"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const GOALS=[{value:"maintain",label:"Maintain health & function",min:1.0,max:1.2},{value:"active",label:"Active lifestyle / exercise",min:1.2,max:1.5},{value:"recovery",label:"Recovering from illness/surgery",min:1.5,max:2.0},{value:"sarcopenia",label:"Preventing/treating sarcopenia",min:1.2,max:1.5}];

export function SeniorProteinCalc(){
  const[unit,setUnit]=useState("metric");const[weight,setWeight]=useState("");const[goal,setGoal]=useState("maintain");
  const[result,setResult]=useState<{min:number;max:number;perMeal:number;leucine:string}|null>(null);

  const calculate=()=>{
    const w=parseFloat(weight);if(!w)return;
    const wkg=unit==="metric"?w:w*0.4536;
    const g=GOALS.find(g=>g.value===goal)||GOALS[0];
    const min=Math.round(wkg*g.min);const max=Math.round(wkg*g.max);
    setResult({min,max,perMeal:Math.round(((min+max)/2)/3),leucine:"2.5-3g"});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label={`Body weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcSelect label="Health goal" value={goal} onChange={setGoal} options={GOALS.map(g=>({value:g.value,label:g.label}))} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Protein Needs" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Daily protein target</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.min}–{result.max}g <span className="text-lg font-medium text-slate-400">per day</span></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Daily range" value={`${result.min}–${result.max}g`} highlight />
        <ResultCard label="Per meal (3 meals)" value={`~${result.perMeal}g`} sub="Even distribution important" />
        <ResultCard label="Leucine target" value={result.leucine} sub="Per meal for MPS" />
        <ResultCard label="Key insight" value="Distribute evenly" sub="Don't backload to dinner" />
      </div>
    </ResultsShell>}</>
  );
}
