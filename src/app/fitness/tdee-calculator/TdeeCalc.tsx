"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { mifflinStJeor } from "@/lib/health-math";

const ACTIVITY = [
  { value: "1.2", label: "1.20 — site-selected assumption" },
  { value: "1.375", label: "1.375 — site-selected assumption" },
  { value: "1.55", label: "1.55 — site-selected assumption" },
  { value: "1.725", label: "1.725 — site-selected assumption" },
  { value: "1.9", label: "1.90 — site-selected assumption" },
];

export function TdeeCalc() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState(""); const [sex, setSex] = useState("male");
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<{ ree: number; tdee: number } | null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,age,sex,weight,height,activity]);
  const calculate = () => {
    setError("");
    try{const a=Number(age),w=Number(weight),h=Number(height);const ree=mifflinStJeor(w,h,a,sex as "male"|"female",unit==="imperial");const factor=Number(activity);if(![1.2,1.375,1.55,1.725,1.9].includes(factor))throw new Error("Choose one of the listed model factors.");setResult({ree:Math.round(ree),tdee:Math.round(ree*factor)});}catch(e){setResult(null);setError(e instanceof Error?e.message:"Check the entered measurements.");}
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Age (19–78 years)" min={19} max={78} step={1} value={age} onChange={setAge} placeholder="e.g. 30" />
          <CalcSelect label="Sex used by the published equation" value={sex} onChange={setSex}
            options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]} />
          <CalcInput label={`Weight (${unit === "metric" ? "kg" : "lbs"})`} value={weight} onChange={setWeight} placeholder={unit === "metric" ? "e.g. 75" : "e.g. 165"} />
          <CalcInput label={`Height (${unit === "metric" ? "cm" : "inches"})`} value={height} onChange={setHeight} placeholder={unit === "metric" ? "e.g. 178" : "e.g. 70"} />
          <div className="sm:col-span-2">
            <CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} />
          </div>
        </div>
        <CalcButton onClick={calculate} label="Calculate TDEE" />
      <CalcError message={error}/></CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Estimated total daily energy expenditure</div>
            <div className="text-4xl font-extrabold text-brand-600">{result.tdee.toLocaleString()} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Mifflin–St Jeor REE" value={`${result.ree.toLocaleString()} kcal/day`} sub="Resting energy estimate" />
            <ResultCard label="REE × selected factor" value={`${result.tdee.toLocaleString()} kcal/day`} sub="Illustrative TDEE estimate" highlight />
          </div>
          <p className="text-xs text-slate-500 mt-4">The activity multiplier is a site-selected model assumption, not an official category or a personalized maintenance target. The source equation was developed in healthy adults aged 19–78.</p>
        </ResultsShell>
      )}
    </>
  );
}
