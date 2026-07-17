"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

const ACTIVITY=[{value:"1.3",label:"Sedentary (mostly sitting)"},{value:"1.5",label:"Lightly active (some PE/walking)"},{value:"1.7",label:"Moderately active (sports 3-5x/week)"},{value:"1.9",label:"Very active (daily intense sports/training)"}];

export function TdeeTeensCalc(){
  const[age,setAge]=useState("");const[gender,setGender]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");const[activity,setActivity]=useState("1.5");
  const[result,setResult]=useState<{bmr:number;tdee:number;growth:number;total:number}|null>(null);

  const calculate=()=>{
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height);if(!a||!w||!h||a<10||a>19)return;
    const bmr=gender==="male"?10*w+6.25*h-5*a+5:10*w+6.25*h-5*a-161;
    const tdee=bmr*parseFloat(activity);
    const growthBonus=a<=14?300:a<=17?200:100;
    setResult({bmr:Math.round(bmr),tdee:Math.round(tdee),growth:growthBonus,total:Math.round(tdee+growthBonus)});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Age (10-19)" value={age} onChange={setAge} placeholder="e.g. 15" min={10} max={19} />
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label="Weight (kg)" value={weight} onChange={setWeight} />
        <CalcInput label="Height (cm)" value={height} onChange={setHeight} />
        <div className="sm:col-span-2"><CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} /></div>
      </div>
      <CalcButton onClick={calculate} label="Calculate Teen TDEE" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Recommended daily intake (with growth)</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.total.toLocaleString()} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Base TDEE" value={`${result.tdee} cal`} sub="Activity-adjusted" />
        <ResultCard label="Growth bonus" value={`+${result.growth} cal`} sub="For development" />
        <ResultCard label="Total recommended" value={`${result.total} cal`} highlight />
        <ResultCard label="BMR (resting)" value={`${result.bmr} cal`} />
      </div>
      <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        ⚠️ Calorie restriction is not recommended for growing teenagers. These numbers support healthy development. Consult a pediatrician before making dietary changes.
      </div>
    </ResultsShell>}</>
  );
}
