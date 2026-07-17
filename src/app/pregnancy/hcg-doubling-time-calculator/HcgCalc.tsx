"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function HcgCalc() {
  const [hcg1, setHcg1] = useState(""); const [date1, setDate1] = useState("");
  const [hcg2, setHcg2] = useState(""); const [date2, setDate2] = useState("");
  const [result, setResult] = useState<{ doublingTime: number; hours: number; increase: number; status: "good"|"warning"|"danger"; statusText: string } | null>(null);

  const calculate = () => {
    const v1 = parseFloat(hcg1), v2 = parseFloat(hcg2);
    if (!v1 || !v2 || !date1 || !date2) return;
    const d1 = new Date(date1), d2 = new Date(date2);
    const hours = Math.abs(d2.getTime() - d1.getTime()) / 3600000;
    if (hours === 0) return;
    const first = d1 < d2 ? v1 : v2, second = d1 < d2 ? v2 : v1;
    const doublingTime = (hours * Math.log(2)) / Math.log(second / first);
    const increase = ((second - first) / first) * 100;

    let status: "good"|"warning"|"danger", statusText: string;
    if (second <= first) { status = "danger"; statusText = "HCG is declining"; }
    else if (doublingTime <= 72) { status = "good"; statusText = "Normal doubling time"; }
    else if (doublingTime <= 96) { status = "warning"; statusText = "Slower than typical — monitor"; }
    else { status = "danger"; statusText = "Slow rise — consult provider"; }

    setResult({ doublingTime: Math.round(doublingTime * 10) / 10, hours: Math.round(hours), increase: Math.round(increase), status, statusText });
  };

  return (
    <>
      <CalcShell>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="First HCG value (mIU/mL)" value={hcg1} onChange={setHcg1} placeholder="e.g. 120" />
          <CalcInput label="First test date" value={date1} onChange={setDate1} type="date" />
          <CalcInput label="Second HCG value (mIU/mL)" value={hcg2} onChange={setHcg2} placeholder="e.g. 350" />
          <CalcInput label="Second test date" value={date2} onChange={setDate2} type="date" />
        </div>
        <CalcButton onClick={calculate} label="Calculate Doubling Time" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <StatusBadge status={result.status} text={result.statusText} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Doubling time" value={`${result.doublingTime} hours`} sub={result.doublingTime <= 72 ? "Within normal range" : "Slower than typical"} highlight />
            <ResultCard label="Time between tests" value={`${result.hours} hours`} />
            <ResultCard label="HCG increase" value={`${result.increase}%`} />
            <ResultCard label="Expected range" value="48–72 hrs" sub="Below 1,200 mIU/mL" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
