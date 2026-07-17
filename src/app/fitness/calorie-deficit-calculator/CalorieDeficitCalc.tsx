"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const ACTIVITY=[{value:"1.2",label:"Sedentary"},{value:"1.375",label:"Lightly active"},{value:"1.55",label:"Moderately active"},{value:"1.725",label:"Very active"}];
const RATES=[{value:"0.25",label:"0.25 kg/week (conservative)"},{value:"0.5",label:"0.5 kg/week (moderate)"},{value:"0.75",label:"0.75 kg/week (aggressive)"},{value:"1",label:"1 kg/week (very aggressive)"}];

export function CalorieDeficitCalc() {
  const [unit,setUnit]=useState("metric"); const [age,setAge]=useState(""); const [gender,setGender]=useState("male");
  const [weight,setWeight]=useState(""); const [height,setHeight]=useState("");
  const [goalWeight,setGoalWeight]=useState(""); const [activity,setActivity]=useState("1.55");
  const [rate,setRate]=useState("0.5");
  const [result,setResult]=useState<{tdee:number;target:number;deficit:number;weeksToGoal:number;dailyDeficit:number}|null>(null);

  const calculate=()=>{
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height),gw=parseFloat(goalWeight);
    if(!a||!w||!h||!gw)return;
    const wkg=unit==="metric"?w:w*0.4536, hcm=unit==="metric"?h:h*2.54, gwkg=unit==="metric"?gw:gw*0.4536;
    const bmr=gender==="male"?10*wkg+6.25*hcm-5*a+5:10*wkg+6.25*hcm-5*a-161;
    const tdee=bmr*parseFloat(activity);
    const r=parseFloat(rate);
    const dailyDef=Math.round(r*7700/7); // 7700 cal per kg
    const target=Math.round(tdee-dailyDef);
    const tolose=wkg-gwkg;
    const weeks=tolose>0?Math.ceil(tolose/r):0;
    setResult({tdee:Math.round(tdee),target:Math.max(target,Math.round(bmr)),deficit:dailyDef,weeksToGoal:weeks,dailyDeficit:dailyDef});
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Age" value={age} onChange={setAge} placeholder="30" />
          <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
          <CalcInput label={`Current weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
          <CalcInput label={`Goal weight (${unit==="metric"?"kg":"lbs"})`} value={goalWeight} onChange={setGoalWeight} />
          <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
          <CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} />
          <div className="sm:col-span-2"><CalcSelect label="Target rate of loss" value={rate} onChange={setRate} options={RATES} /></div>
        </div>
        <CalcButton onClick={calculate} label="Calculate My Deficit" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Your daily calorie target</div>
            <div className="text-4xl font-extrabold text-brand-600">{result.target.toLocaleString()} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="TDEE (maintenance)" value={`${result.tdee.toLocaleString()} cal`} />
            <ResultCard label="Daily target" value={`${result.target.toLocaleString()} cal`} highlight />
            <ResultCard label="Daily deficit" value={`${result.deficit} cal`} sub={`${parseFloat(rate)} kg/week`} />
            <ResultCard label="Time to goal" value={`~${result.weeksToGoal} weeks`} sub={`${Math.round(result.weeksToGoal/4.3)} months`} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
