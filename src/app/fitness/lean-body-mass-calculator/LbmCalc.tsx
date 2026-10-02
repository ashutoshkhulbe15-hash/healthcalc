"use client";
import { leanBodyMass } from "@/lib/health-math";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle, CalcError } from "@/components/CalcUI";

export function LbmCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");
  const[result,setResult]=useState<{boer:number;james:number;avg:number;fatMass:number;bf:number}|null>(null);

  const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,gender,weight,height]);
  const calculate=()=>{
    try { setError("");
    const {boer,james,avg,fatMass,bf}=leanBodyMass(Number(weight),Number(height),gender,unit==="imperial");
    setResult({boer:Math.round(boer*10)/10,james:Math.round(james*10)/10,avg:Math.round(avg*10)/10,fatMass:Math.round(fatMass*10)/10,bf:Math.round(bf*10)/10});
    } catch(e) {setResult(null);setError((e as Error).message);}
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Lean Body Mass" />
      <CalcError message={error}/>
    </CalcShell>
    {result&&<ResultsShell>
      <div className="mb-6">
        <div className="flex rounded-full overflow-hidden h-5">
          <div className="bg-brand-500" style={{width:`${100-result.bf}%`}} />
          <div className="bg-amber-300" style={{width:`${result.bf}%`}} />
        </div>
        <div className="flex justify-between text-[11px] text-slate-400 mt-1">
          <span>Lean mass: {result.avg} kg ({(100-result.bf).toFixed(1)}%)</span>
          <span>Fat mass: {result.fatMass} kg ({result.bf}%)</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Lean Body Mass (Boer)" value={`${result.avg} kg`} sub={`${Math.round(result.avg*2.205)} lbs`} highlight />
        <ResultCard label="Boer formula" value={`${result.boer} kg`} />
        <ResultCard label="James formula" value={`${result.james} kg`} />
        <ResultCard label="Est. body fat" value={`${result.bf}%`} sub={`${result.fatMass} kg fat mass`} />
      </div>
    </ResultsShell>}</>
  );
}
