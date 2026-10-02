"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const ACTIVITY=[{value:"1.2",label:"Sedentary"},{value:"1.375",label:"Lightly active"},{value:"1.55",label:"Moderately active"},{value:"1.725",label:"Very active"}];

export function WomenOver50Calc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("55");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");const[activity,setActivity]=useState("1.375");
  const[result,setResult]=useState<{bmr:number;tdee:number;maintain:number;mildLoss:number;loss:number;protein:number}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,age,weight,height,activity]);
  const calculate=()=>{
    setError("");
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height);if(!a||!w||!h){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const wkg=unit==="metric"?w:w*0.45359237,hcm=unit==="metric"?h:h*2.54;
    const bmr=10*wkg+6.25*hcm-5*a-161;
    const tdee=bmr*parseFloat(activity);
    const protein=Math.round(wkg*1.2);
    setResult({bmr:Math.round(bmr),tdee:Math.round(tdee),maintain:Math.round(tdee),mildLoss:Math.round(tdee-250),loss:Math.round(tdee-500),protein});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Age (50+)" min={50} max={120} step={1} value={age} onChange={setAge} placeholder="55" />
        <CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
      </div>
      <CalcButton onClick={calculate} label="Calculate My Calories" />
    <CalcError message={error}/></CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Your daily calorie needs</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.maintain} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Maintain weight" value={`${result.maintain} cal`} highlight />
        <ResultCard label="Mild loss (250 deficit)" value={`${result.mildLoss} cal`} sub="~0.25 kg/week" />
        <ResultCard label="Moderate loss (500 deficit)" value={`${result.loss} cal`} sub="~0.5 kg/week" />
        <ResultCard label="Daily protein target" value={`${result.protein}g`} sub="1.2 g/kg for sarcopenia prevention" />
      </div>
    </ResultsShell>}</>
  );
}
