"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const TYPES=[{value:"balanced",label:"Example: 20% protein / 50% carbs / 30% fat",p:20,c:50,f:30},{value:"higherProtein",label:"Example: 25% protein / 45% carbs / 30% fat",p:25,c:45,f:30}];
const ACTIVITY=[{value:"1.2",label:"Sedentary"},{value:"1.375",label:"Lightly active"},{value:"1.55",label:"Moderately active"},{value:"1.725",label:"Very active"}];

export function PcosCalc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("");const[weight,setWeight]=useState("");
  const[height,setHeight]=useState("");const[activity,setActivity]=useState("1.375");const[type,setType]=useState("balanced");
  const[result,setResult]=useState<{cal:number;protein:number;carbs:number;fat:number;split:[number,number,number]}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,age,weight,height,activity,type]);
  const calculate=()=>{
    setError("");
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height);if(!a||!w||!h||a<18||a>120||w<=0||h<=0){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const wkg=unit==="metric"?w:w*0.45359237,hcm=unit==="metric"?h:h*2.54;
    const bmr=10*wkg+6.25*hcm-5*a-161;
    const tdee=bmr*parseFloat(activity);
    const t=TYPES.find(t=>t.value===type)||TYPES[0];
    const protein=Math.round((tdee*t.p/100)/4);
    const carbs=Math.round((tdee*t.c/100)/4);
    const fat=Math.round((tdee*t.f/100)/9);
    setResult({cal:Math.round(tdee),protein,carbs,fat,split:[t.p,t.c,t.f]});
  };

  return(
    <><CalcShell><p className="text-sm text-slate-600 mb-5">No single macro split is established as best for PCOS. This adult female-equation planner converts an example split into grams; it does not prescribe a PCOS diet. Not for pregnancy, breastfeeding or adolescent energy needs. Personal goals belong with your clinician or dietitian.</p><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Age (adults 18+)" min={18} max={120} value={age} onChange={setAge} />
        <CalcSelect label="Illustrative split (not a PCOS prescription)" value={type} onChange={setType} options={TYPES.map(t=>({value:t.value,label:t.label}))} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
        <div className="sm:col-span-2"><CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} /></div>
      </div>
      <CalcButton onClick={calculate} label="Calculate Example Macros" />
    <CalcError message={error}/></CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Illustrative adult maintenance estimate</div>
        <div className="text-3xl font-extrabold text-brand-600">{result.cal.toLocaleString()} cal</div>
        <div className="text-xs text-slate-400 mt-1">Mifflin–St Jeor estimate; no PCOS-specific adjustment</div>
      </div>
      <div className="flex rounded-full overflow-hidden h-6 mb-6">
        <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[0]}%`,background:"#8B5CF6"}}>P {result.split[0]}%</div>
        <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[1]}%`,background:"#3B82F6"}}>C {result.split[1]}%</div>
        <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[2]}%`,background:"#F59E0B"}}>F {result.split[2]}%</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ResultCard label="Protein" value={`${result.protein}g`} highlight />
        <ResultCard label="Carbs" value={`${result.carbs}g`} />
        <ResultCard label="Fat" value={`${result.fat}g`} />
      </div>
    </ResultsShell>}</>
  );
}
