"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

// WHO/Hadlock estimated fetal weight by week (grams) - 10th, 50th, 90th percentiles
const FETAL_DATA: Record<number, [number, number, number]> = {
  20: [249, 331, 414], 21: [299, 399, 499], 22: [359, 478, 598], 23: [426, 568, 710],
  24: [503, 670, 837], 25: [589, 785, 981], 26: [685, 913, 1141], 27: [791, 1055, 1319],
  28: [908, 1210, 1512], 29: [1034, 1379, 1724], 30: [1169, 1559, 1949], 31: [1313, 1751, 2189],
  32: [1465, 1953, 2441], 33: [1622, 2162, 2702], 34: [1783, 2377, 2971], 35: [1946, 2595, 3244],
  36: [2110, 2813, 3516], 37: [2271, 3028, 3785], 38: [2427, 3236, 4045], 39: [2576, 3435, 4294],
  40: [2714, 3619, 4524],
};

function getPercentile(week: number, weight: number): number {
  const d = FETAL_DATA[week];
  if (!d) return 50;
  const [p10, p50, p90] = d;
  if (weight <= p10) return Math.max(1, Math.round((weight / p10) * 10));
  if (weight <= p50) return 10 + Math.round(((weight - p10) / (p50 - p10)) * 40);
  if (weight <= p90) return 50 + Math.round(((weight - p50) / (p90 - p50)) * 40);
  return Math.min(99, 90 + Math.round(((weight - p90) / (p90 * 0.2)) * 9));
}

export function FetalWeightCalc() {
  const [week, setWeek] = useState(""); const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ percentile: number; week: number; weight: number; p10: number; p50: number; p90: number; status: "good"|"warning"|"danger"; statusText: string } | null>(null);

  const calculate = () => {
    const w = parseInt(week), wt = parseFloat(weight);
    if (!w || !wt || w < 20 || w > 40) return;
    const d = FETAL_DATA[w]; if (!d) return;
    const pct = getPercentile(w, wt);
    let status: "good"|"warning"|"danger", statusText: string;
    if (pct < 10) { status = "warning"; statusText = `${pct}th percentile — Small for gestational age (SGA)`; }
    else if (pct > 90) { status = "warning"; statusText = `${pct}th percentile — Large for gestational age (LGA)`; }
    else { status = "good"; statusText = `${pct}th percentile — Within normal range`; }
    setResult({ percentile: pct, week: w, weight: wt, p10: d[0], p50: d[1], p90: d[2], status, statusText });
  };

  return (
    <>
      <CalcShell>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Gestational week (20-40)" value={week} onChange={setWeek} placeholder="e.g. 32" min={20} max={40} />
          <CalcInput label="Estimated fetal weight (grams)" value={weight} onChange={setWeight} placeholder="e.g. 1800" />
        </div>
        <CalcButton onClick={calculate} label="Calculate Percentile" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <StatusBadge status={result.status} text={result.statusText} />
          {/* Percentile bar */}
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Percentile at Week {result.week}</div>
            <div className="relative h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="absolute left-[10%] w-[80%] h-full bg-green-100 rounded-full" />
              <div className="absolute -top-0.5 w-5 h-5 rounded-full bg-brand-600 border-[3px] border-white shadow -translate-x-1/2"
                style={{ left: `${result.percentile}%` }} />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>SGA (&lt;10th)</span><span>Normal (10th–90th)</span><span>LGA (&gt;90th)</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Percentile" value={`${result.percentile}th`} highlight />
            <ResultCard label="Baby's weight" value={`${result.weight}g`} sub={`Week ${result.week}`} />
            <ResultCard label="Average (50th)" value={`${result.p50}g`} sub="For this week" />
            <ResultCard label="Normal range" value={`${result.p10}–${result.p90}g`} sub="10th–90th percentile" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
