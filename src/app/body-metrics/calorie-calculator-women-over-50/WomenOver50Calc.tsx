"use client";
import { useEffect, useState } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { mifflinStJeor } from "@/lib/health-math";

export function WomenOver50Calc() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState("55");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => setResult(null), [unit, age, weight, height]);
  const calculate = () => {
    setError("");
    try {
      const years = Number(age);
      if (!Number.isInteger(years) || years < 50 || years > 78) throw new Error("Enter a whole age from 50 to 78, the covered ages on this page.");
      setResult(Math.round(mifflinStJeor(Number(weight), Number(height), years, "female", unit === "imperial")));
    } catch (e) {
      setResult(null);
      setError((e as Error).message);
    }
  };

  return (
    <>
      <CalcShell>
        <p className="mb-4 text-sm text-slate-600">Female Mifflin–St Jeor resting-energy estimate. This is not a total daily calorie need or food-intake target.</p>
        <UnitToggle value={unit} onChange={v => { setUnit(v); setWeight(""); setHeight(""); }} />
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <CalcInput label="Age (50–78 years)" min={50} max={78} step={1} value={age} onChange={setAge} />
          <CalcInput label={`Weight (${unit === "metric" ? "kg" : "lbs"})`} value={weight} onChange={setWeight} />
          <CalcInput label={`Height (${unit === "metric" ? "cm" : "inches"})`} value={height} onChange={setHeight} />
        </div>
        <CalcButton onClick={calculate} label="Calculate REE estimate" />
        <CalcError message={error} />
      </CalcShell>
      {result !== null && (
        <ResultsShell>
          <ResultCard label="Estimated resting energy expenditure" value={`${result.toLocaleString()} cal/day`} highlight />
          <p className="mt-4 text-sm text-slate-600">Equation estimate only. It does not include activity or represent a recommended daily intake.</p>
        </ResultsShell>
      )}
    </>
  );
}
