"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { espenHealthyOlderProteinRange } from "@/lib/health-math";

export function SeniorProteinCalc(){
  const[unit,setUnit]=useState("metric");const[weight,setWeight]=useState("");
  const[result,setResult]=useState<{min:number;max:number}|null>(null);const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,weight]);
  const calculate=()=>{
    setError("");const w=Number(weight);
    if(!Number.isFinite(w)||w<=0){setResult(null);setError("Enter a positive, finite body weight.");return;}
    setResult(espenHealthyOlderProteinRange(w,unit==="imperial"));
  };
  return <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");}} />
    <div className="grid grid-cols-1 gap-5 mb-5"><CalcInput label={`Body weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} /></div>
    <CalcButton onClick={calculate} label="Calculate ESPEN reference range" /><CalcError message={error}/></CalcShell>
    {result&&<ResultsShell><div className="text-center mb-5"><div className="text-sm text-slate-400 mb-1">Calculated equivalent of ESPEN healthy older-person guidance</div>
      <div className="text-4xl font-extrabold text-brand-600">{result.min}–{result.max}g <span className="text-lg font-medium text-slate-400">per day</span></div></div>
      <ResultCard label="Calculated range" value={`${result.min}–${result.max}g/day`} highlight />
      <p className="text-xs text-slate-500 mt-4">European clinical nutrition guidance, not a personal prescription. It does not account for illness, nutritional status, activity, tolerance, or other individual factors. <a href="https://www.espen.org/files/ESPEN-Guidelines/ESPEN_practical_guideline_Clinical_nutrition_and_hydration_in_geriatrics.pdf" className="underline">ESPEN 2022, recommendation 2 and commentary</a>.</p>
    </ResultsShell>}</>;
}
