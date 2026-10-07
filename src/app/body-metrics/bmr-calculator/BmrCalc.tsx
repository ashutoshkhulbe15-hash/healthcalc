"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { mifflinStJeor } from "@/lib/health-math";

export function BmrCalc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("");const[sex,setSex]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");const[result,setResult]=useState<number|null>(null);const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,age,sex,weight,height]);
  const calculate=()=>{setError("");try{const value=mifflinStJeor(Number(weight),Number(height),Number(age),sex as "male"|"female",unit==="imperial");setResult(Math.round(value));}catch(e){setResult(null);setError(e instanceof Error?e.message:"Check the entered measurements.");}};
  return <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
      <CalcInput label="Age (19–78 years)" min={19} max={78} step={1} value={age} onChange={setAge}/>
      <CalcSelect label="Sex used by the published equation" value={sex} onChange={setSex} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]}/>
      <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight}/>
      <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight}/>
    </div><CalcButton onClick={calculate} label="Estimate resting energy expenditure"/><CalcError message={error}/></CalcShell>
    {result!==null&&<ResultsShell><div className="text-center mb-5"><div className="text-sm text-slate-400 mb-1">Estimated resting energy expenditure</div><div className="text-4xl font-extrabold text-brand-600">{result.toLocaleString()} <span className="text-lg font-medium text-slate-400">kcal/day</span></div></div><ResultCard label="Mifflin–St Jeor estimate" value={`${result.toLocaleString()} kcal/day`} highlight/><p className="text-xs text-slate-500 mt-4">An equation-based population estimate, not a measurement or personal calorie prescription. The original study included healthy adults aged 19–78. <a className="underline" href="https://pubmed.ncbi.nlm.nih.gov/2305711/" target="_blank" rel="noopener noreferrer">Original equation and study population</a>.</p></ResultsShell>}</>;
}
