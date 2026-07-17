"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

export function IdealWeightCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");const[height,setHeight]=useState("");
  const[result,setResult]=useState<{devine:number;robinson:number;miller:number;hamwi:number;bmiRange:[number,number]}|null>(null);

  const calculate=()=>{
    const h=parseFloat(height);if(!h)return;
    const inches=unit==="metric"?h/2.54:h;
    const over60=inches-60;if(over60<0)return;
    let d:number,r:number,m:number,hw:number;
    if(gender==="male"){d=50+2.3*over60;r=52+1.9*over60;m=56.2+1.41*over60;hw=48+2.7*over60;}
    else{d=45.5+2.3*over60;r=49+1.7*over60;m=53.1+1.36*over60;hw=45.5+2.2*over60;}
    const hm=inches*0.0254;
    const bmiMin=Math.round(18.5*hm*hm*10)/10;
    const bmiMax=Math.round(24.9*hm*hm*10)/10;
    setResult({devine:Math.round(d*10)/10,robinson:Math.round(r*10)/10,miller:Math.round(m*10)/10,hamwi:Math.round(hw*10)/10,bmiRange:[bmiMin,bmiMax]});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} placeholder={unit==="metric"?"e.g. 170":"e.g. 67"} />
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Ideal Weight" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <ResultCard label="Devine (1974)" value={`${result.devine} kg`} sub={`${Math.round(result.devine*2.205)} lbs`} highlight />
        <ResultCard label="Robinson (1983)" value={`${result.robinson} kg`} sub={`${Math.round(result.robinson*2.205)} lbs`} />
        <ResultCard label="Miller (1983)" value={`${result.miller} kg`} sub={`${Math.round(result.miller*2.205)} lbs`} />
        <ResultCard label="Hamwi" value={`${result.hamwi} kg`} sub={`${Math.round(result.hamwi*2.205)} lbs`} />
      </div>
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Healthy BMI Range (18.5–24.9)</div>
        <div className="text-lg font-bold text-slate-900">{result.bmiRange[0]} – {result.bmiRange[1]} kg</div>
        <div className="text-xs text-slate-500">({Math.round(result.bmiRange[0]*2.205)} – {Math.round(result.bmiRange[1]*2.205)} lbs)</div>
      </div>
    </ResultsShell>}</>
  );
}
