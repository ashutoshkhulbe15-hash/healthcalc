"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle, StatusBadge } from "@/components/CalcUI";

const CATEGORIES = [
  { max: 18.5, label: "Underweight", color: "#3B82F6", bg: "bg-blue-100" },
  { max: 25, label: "Normal", color: "#22C55E", bg: "bg-green-100" },
  { max: 30, label: "Overweight", color: "#F59E0B", bg: "bg-amber-100" },
  { max: 35, label: "Obese I", color: "#EF4444", bg: "bg-red-100" },
  { max: 40, label: "Obese II", color: "#DC2626", bg: "bg-red-200" },
  { max: 100, label: "Obese III", color: "#991B1B", bg: "bg-red-300" },
];

function getCat(bmi: number) { return CATEGORIES.find(c => bmi < c.max) || CATEGORIES[CATEGORIES.length - 1]; }

export function BmiCalc() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: typeof CATEGORIES[0]; healthy: [number, number] } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight), h = parseFloat(height);
    if (!w || !h) return;
    const hm = unit === "metric" ? h / 100 : h * 0.0254;
    const wkg = unit === "metric" ? w : w * 0.4536;
    const bmi = wkg / (hm * hm);
    const healthyMin = Math.round(18.5 * hm * hm * 10) / 10;
    const healthyMax = Math.round(24.9 * hm * hm * 10) / 10;
    setResult({ bmi, category: getCat(bmi), healthy: [healthyMin, healthyMax] });
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label={`Weight (${unit === "metric" ? "kg" : "lbs"})`} value={weight} onChange={setWeight} placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"} />
          <CalcInput label={`Height (${unit === "metric" ? "cm" : "inches"})`} value={height} onChange={setHeight} placeholder={unit === "metric" ? "e.g. 170" : "e.g. 67"} />
        </div>
        <CalcButton onClick={calculate} label="Calculate BMI" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <StatusBadge status={result.category.label === "Normal" ? "good" : result.category.label === "Overweight" ? "warning" : "danger"}
            text={`BMI ${result.bmi.toFixed(1)} — ${result.category.label}`} />
          {/* Visual gauge */}
          <div className="mb-6">
            <div className="relative h-5 rounded-full overflow-hidden flex">
              {CATEGORIES.slice(0, 5).map((c, i) => (
                <div key={i} className="h-full" style={{ width: `${[18.5, 6.5, 5, 5, 65][i]}%`, background: c.color + "30" }} />
              ))}
            </div>
            <div className="relative" style={{ left: `${Math.min(95, Math.max(2, ((result.bmi - 14) / 30) * 100))}%` }}>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent" style={{ borderBottomColor: result.category.color }} />
              <div className="text-xs font-bold -ml-3" style={{ color: result.category.color }}>{result.bmi.toFixed(1)}</div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>14</span><span>18.5</span><span>25</span><span>30</span><span>35</span><span>40+</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Your BMI" value={result.bmi.toFixed(1)} sub={result.category.label} highlight />
            <ResultCard label="Category" value={result.category.label} />
            <ResultCard label="Healthy weight range" value={`${result.healthy[0]}–${result.healthy[1]} kg`} sub="BMI 18.5–24.9" />
            <ResultCard label="Classification" value="WHO Standard" sub="Adult (20+ years)" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
