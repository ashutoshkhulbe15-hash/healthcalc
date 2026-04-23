"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const ACTIVITY = [
  { value: "1.2", label: "Sedentary (desk job, little exercise)" },
  { value: "1.375", label: "Lightly active (1-3 days/week)" },
  { value: "1.55", label: "Moderately active (3-5 days/week)" },
  { value: "1.725", label: "Very active (6-7 days/week)" },
  { value: "1.9", label: "Extremely active (intense daily + physical job)" },
];

export function TdeeCalc() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState(""); const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [result, setResult] = useState<{ bmr: number; tdee: number; cut: number; bulk: number } | null>(null);

  const calculate = () => {
    const a = parseInt(age), w = parseFloat(weight), h = parseFloat(height);
    if (!a || !w || !h) return;
    const wkg = unit === "metric" ? w : w * 0.4536;
    const hcm = unit === "metric" ? h : h * 2.54;
    const bmr = gender === "male"
      ? 10 * wkg + 6.25 * hcm - 5 * a + 5
      : 10 * wkg + 6.25 * hcm - 5 * a - 161;
    const tdee = bmr * parseFloat(activity);
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), cut: Math.round(tdee - 500), bulk: Math.round(tdee + 300) });
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Age" value={age} onChange={setAge} placeholder="e.g. 30" />
          <CalcSelect label="Gender" value={gender} onChange={setGender}
            options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }]} />
          <CalcInput label={`Weight (${unit === "metric" ? "kg" : "lbs"})`} value={weight} onChange={setWeight} placeholder={unit === "metric" ? "e.g. 75" : "e.g. 165"} />
          <CalcInput label={`Height (${unit === "metric" ? "cm" : "inches"})`} value={height} onChange={setHeight} placeholder={unit === "metric" ? "e.g. 178" : "e.g. 70"} />
          <div className="sm:col-span-2">
            <CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} />
          </div>
        </div>
        <CalcButton onClick={calculate} label="Calculate TDEE" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Your Total Daily Energy Expenditure</div>
            <div className="text-4xl font-extrabold text-brand-600">{result.tdee.toLocaleString()} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="BMR (resting)" value={`${result.bmr.toLocaleString()} cal`} sub="Calories at rest" />
            <ResultCard label="TDEE (maintenance)" value={`${result.tdee.toLocaleString()} cal`} sub="To maintain weight" highlight />
            <ResultCard label="Weight loss" value={`${result.cut.toLocaleString()} cal`} sub="500 cal deficit" />
            <ResultCard label="Lean bulk" value={`${result.bulk.toLocaleString()} cal`} sub="300 cal surplus" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
