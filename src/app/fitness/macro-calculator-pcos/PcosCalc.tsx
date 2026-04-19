"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const TYPES=[{value:"insulin",label:"Insulin-resistant PCOS",p:30,c:25,f:45},{value:"inflammatory",label:"Inflammatory PCOS",p:30,c:35,f:35},{value:"adrenal",label:"Adrenal / stress-related PCOS",p:25,c:40,f:35},{value:"general",label:"Not sure / General PCOS",p:30,c:30,f:40}];
const ACTIVITY=[{value:"1.2",label:"Sedentary"},{value:"1.375",label:"Lightly active"},{value:"1.55",label:"Moderately active"},{value:"1.725",label:"Very active"}];

export function PcosCalc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("");const[weight,setWeight]=useState("");
  const[height,setHeight]=useState("");const[activity,setActivity]=useState("1.375");const[type,setType]=useState("insulin");
  const[result,setResult]=useState<{cal:number;protein:number;carbs:number;fat:number;split:[number,number,number]}|null>(null);

  const calculate=()=>{
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height);if(!a||!w||!h)return;
    const wkg=unit==="metric"?w:w*0.4536,hcm=unit==="metric"?h:h*2.54;
    const bmr=10*wkg+6.25*hcm-5*a-161;
    const tdee=bmr*parseFloat(activity)*0.9; // 10% reduction for PCOS metabolic adaptation
    const t=TYPES.find(t=>t.value===type)||TYPES[0];
    const protein=Math.round((tdee*t.p/100)/4);
    const carbs=Math.round((tdee*t.c/100)/4);
    const fat=Math.round((tdee*t.f/100)/9);
    setResult({cal:Math.round(tdee),protein,carbs,fat,split:[t.p,t.c,t.f]});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Age" value={age} onChange={setAge} />
        <CalcSelect label="PCOS type" value={type} onChange={setType} options={TYPES.map(t=>({value:t.value,label:t.label}))} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
        <div className="sm:col-span-2"><CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} /></div>
      </div>
      <CalcButton onClick={calculate} label="Calculate PCOS Macros" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">PCOS-adjusted daily target</div>
        <div className="text-3xl font-extrabold text-brand-600">{result.cal.toLocaleString()} cal</div>
        <div className="text-xs text-slate-400 mt-1">Includes 10% metabolic adjustment for PCOS</div>
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
