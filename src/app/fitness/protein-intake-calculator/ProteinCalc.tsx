"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const GOALS=[{value:"sedentary",label:"Sedentary (general health)",min:0.8,max:1.0},{value:"active",label:"Active (moderate exercise)",min:1.2,max:1.6},{value:"muscle",label:"Build muscle (resistance training)",min:1.6,max:2.2},{value:"lose",label:"Lose fat (preserve muscle)",min:2.0,max:2.4},{value:"elderly",label:"Senior (65+, prevent sarcopenia)",min:1.2,max:1.5}];

export function ProteinCalc() {
  const [unit,setUnit]=useState("metric"); const [weight,setWeight]=useState(""); const [goal,setGoal]=useState("active");
  const [result,setResult]=useState<{min:number;max:number;mid:number;perMeal:number;goalLabel:string}|null>(null);

  const calculate=()=>{
    const w=parseFloat(weight); if(!w) return;
    const wkg=unit==="metric"?w:w*0.4536;
    const g=GOALS.find(g=>g.value===goal)||GOALS[1];
    const min=Math.round(wkg*g.min);
    const max=Math.round(wkg*g.max);
    const mid=Math.round((min+max)/2);
    setResult({min,max,mid,perMeal:Math.round(mid/4),goalLabel:g.label});
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label={`Body weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} placeholder={unit==="metric"?"e.g. 75":"e.g. 165"} />
          <CalcSelect label="Goal / activity level" value={goal} onChange={setGoal} options={GOALS.map(g=>({value:g.value,label:g.label}))} />
        </div>
        <CalcButton onClick={calculate} label="Calculate Protein Needs" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Your daily protein target</div>
            <div className="text-4xl font-extrabold text-brand-600">{result.min}–{result.max}g <span className="text-lg font-medium text-slate-400">per day</span></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Recommended range" value={`${result.min}–${result.max}g`} highlight />
            <ResultCard label="Midpoint target" value={`${result.mid}g/day`} sub="Good starting point" />
            <ResultCard label="Per meal (4 meals)" value={`~${result.perMeal}g`} sub="Even distribution" />
            <ResultCard label="Calories from protein" value={`${result.mid*4} cal`} sub={`${result.mid}g × 4 cal/g`} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
