"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { proteinGuidelineRange } from "@/lib/health-math";

export function ProteinCalc() {
  const [unit,setUnit]=useState("metric"); const [weight,setWeight]=useState("");
  const [result,setResult]=useState<{min:number;max:number}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,weight]);
  const calculate=()=>{
    setError("");
    const w=Number(weight); if(!Number.isFinite(w)||w<=0){setResult(null);setError("Enter a positive, finite body weight.");return;}
    setResult(proteinGuidelineRange(w,unit==="imperial"));
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label={`Body weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} placeholder={unit==="metric"?"e.g. 75":"e.g. 165"} />
        </div>
        <CalcButton onClick={calculate} label="Calculate U.S. guideline range" />
      <CalcError message={error}/></CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Calculated equivalent of the U.S. daily guideline</div>
            <div className="text-4xl font-extrabold text-brand-600">{result.min}–{result.max}g <span className="text-lg font-medium text-slate-400">per day</span></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Calculated range" value={`${result.min}–${result.max}g/day`} highlight />
          </div>
          <p className="text-xs text-slate-500 mt-4"><a href="https://cdn.realfood.gov/DGA.pdf" className="underline">U.S. Dietary Guidelines 2025–2030, page 2</a> give a protein serving goal of 1.2–1.6 g/kg/day, adjusted for calorie requirements. This arithmetic applies the guideline range to the entered weight. It is not a personal prescription or a substitute for guidance that accounts for your health, life stage, or country.</p>
        </ResultsShell>
      )}
    </>
  );
}
