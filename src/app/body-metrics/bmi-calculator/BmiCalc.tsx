"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle, StatusBadge } from "@/components/CalcUI";
import { adultBMI, adultBMIWeightRange } from "@/lib/bmi-math";

const CATEGORIES = [
  { max: 18.5, label: "Underweight", color: "#3B82F6", bg: "bg-blue-100" },
  { max: 25, label: "Healthy weight", color: "#22C55E", bg: "bg-green-100" },
  { max: 30, label: "Overweight", color: "#F59E0B", bg: "bg-amber-100" },
  { max: 35, label: "Class 1 obesity", color: "#EF4444", bg: "bg-red-100" },
  { max: 40, label: "Class 2 obesity", color: "#DC2626", bg: "bg-red-200" },
  { max: 100, label: "Class 3 obesity", color: "#991B1B", bg: "bg-red-300" },
];

function getCat(bmi: number) { return CATEGORIES.find(c => bmi < c.max) || CATEGORIES[CATEGORIES.length - 1]; }

export function BmiCalc() {
  const [unit, setUnit] = useState("metric");
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: typeof CATEGORIES[0]; healthy: [number, number] } | null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,weight,height]);
  const calculate = () => {
    setError("");
    const w = parseFloat(weight), h = parseFloat(height);
    if(!Number.isFinite(w)||!Number.isFinite(h)||w<=0||h<=0){setResult(null);setError("Enter a positive, finite weight and height.");return;}
    const imperial=unit==="imperial";
    const bmi=adultBMI(w,h,imperial);
    const healthy=adultBMIWeightRange(h,imperial);
    setResult({ bmi, category: getCat(bmi), healthy });
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label={`Weight (${unit === "metric" ? "kg" : "lbs"})`} value={weight} onChange={setWeight} placeholder={unit === "metric" ? "e.g. 70" : "e.g. 154"} />
          <CalcInput label={`Height (${unit === "metric" ? "cm" : "inches"})`} value={height} onChange={setHeight} placeholder={unit === "metric" ? "e.g. 170" : "e.g. 67"} />
        </div>
        <CalcButton onClick={calculate} label="Calculate BMI" />
      <CalcError message={error}/></CalcShell>
      {result && (
        <ResultsShell>
          <StatusBadge status={result.category.label === "Healthy weight" ? "good" : result.category.label === "Overweight" ? "warning" : "info"}
            text={`BMI ${result.bmi.toFixed(1)} — ${result.category.label}`} />
          {/* Visual gauge */}
          <div className="mb-6">
            <div className="relative h-5 rounded-full overflow-hidden flex">
              {CATEGORIES.map((c, i) => (
                <div key={i} className="h-full" style={{ width: `${[15, 21.6667, 16.6667, 16.6667, 16.6667, 13.3332][i]}%`, background: c.color + "30" }} />
              ))}
            </div>
            <div className="relative h-8 overflow-hidden">
            <div className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: `${Math.min(95, Math.max(2, ((result.bmi - 14) / 30) * 100))}%` }}>
              <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent" style={{ borderBottomColor: result.category.color }} />
              <div className="text-xs font-bold" style={{ color: result.category.color }}>{result.bmi.toFixed(1)}</div>
            </div>
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>14 or lower</span><span>Illustrative scale</span><span>44 or higher</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Your BMI" value={result.bmi.toFixed(1)} sub={result.category.label} highlight />
            <ResultCard label="Category" value={result.category.label} />
            <ResultCard label="Weight range at healthy BMI" value={`${result.healthy[0]}–${result.healthy[1]} ${unit === "metric" ? "kg" : "lb"}`} sub="BMI 18.5 to <25" />
            <ResultCard label="Reference" value="CDC adult categories" sub="For adults 20+ years" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
