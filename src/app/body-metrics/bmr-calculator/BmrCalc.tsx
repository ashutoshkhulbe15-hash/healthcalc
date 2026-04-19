"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

export function BmrCalc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("");const[gender,setGender]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");const[formula,setFormula]=useState("mifflin");
  const[result,setResult]=useState<{mifflin:number;harris:number;selected:number;label:string}|null>(null);

  const calculate=()=>{
    const a=parseInt(age),w=parseFloat(weight),h=parseFloat(height);if(!a||!w||!h)return;
    const wkg=unit==="metric"?w:w*0.4536,hcm=unit==="metric"?h:h*2.54;
    const mifflin=gender==="male"?10*wkg+6.25*hcm-5*a+5:10*wkg+6.25*hcm-5*a-161;
    const harris=gender==="male"?88.362+13.397*wkg+4.799*hcm-5.677*a:447.593+9.247*wkg+3.098*hcm-4.330*a;
    const sel=formula==="mifflin"?mifflin:harris;
    setResult({mifflin:Math.round(mifflin),harris:Math.round(harris),selected:Math.round(sel),label:formula==="mifflin"?"Mifflin-St Jeor":"Harris-Benedict"});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Age" value={age} onChange={setAge} placeholder="30" />
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
        <CalcSelect label="Formula" value={formula} onChange={setFormula} options={[{value:"mifflin",label:"Mifflin-St Jeor (recommended)"},{value:"harris",label:"Harris-Benedict (revised)"}]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate BMR" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Your Basal Metabolic Rate</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.selected.toLocaleString()} <span className="text-lg font-medium text-slate-400">cal/day</span></div>
        <div className="text-xs text-slate-400 mt-1">Using {result.label}</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Mifflin-St Jeor" value={`${result.mifflin} cal`} sub="More accurate" highlight={formula==="mifflin"} />
        <ResultCard label="Harris-Benedict" value={`${result.harris} cal`} sub="Revised 1984" highlight={formula==="harris"} />
        <ResultCard label="Difference" value={`${Math.abs(result.mifflin-result.harris)} cal`} sub="Between formulas" />
        <ResultCard label="What BMR means" value="Resting burn" sub="Calories at complete rest" />
      </div>
    </ResultsShell>}</>
  );
}
