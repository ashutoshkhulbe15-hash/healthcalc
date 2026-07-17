"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

export function LbmCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");
  const[result,setResult]=useState<{boer:number;james:number;avg:number;fatMass:number;bf:number}|null>(null);

  const calculate=()=>{
    const w=parseFloat(weight),h=parseFloat(height);if(!w||!h)return;
    const wkg=unit==="metric"?w:w*0.4536,hcm=unit==="metric"?h:h*2.54;
    let boer:number,james:number;
    if(gender==="male"){boer=0.407*wkg+0.267*hcm-19.2;james=1.1*wkg-128*(wkg/(hcm/100))**2;}
    else{boer=0.252*wkg+0.473*hcm-48.3;james=1.07*wkg-148*(wkg/(hcm/100))**2;}
    const avg=(boer+james)/2;
    const fatMass=wkg-avg;
    const bf=(fatMass/wkg)*100;
    setResult({boer:Math.round(boer*10)/10,james:Math.round(james*10)/10,avg:Math.round(avg*10)/10,fatMass:Math.round(fatMass*10)/10,bf:Math.round(bf*10)/10});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Lean Body Mass" />
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
        <ResultCard label="Lean Body Mass (avg)" value={`${result.avg} kg`} sub={`${Math.round(result.avg*2.205)} lbs`} highlight />
        <ResultCard label="Boer formula" value={`${result.boer} kg`} />
        <ResultCard label="James formula" value={`${result.james} kg`} />
        <ResultCard label="Est. body fat" value={`${result.bf}%`} sub={`${result.fatMass} kg fat mass`} />
      </div>
    </ResultsShell>}</>
  );
}
