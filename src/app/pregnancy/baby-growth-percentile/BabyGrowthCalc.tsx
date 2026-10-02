"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, CalcError } from "@/components/CalcUI";
import { babyWeight } from "@/lib/baby-growth-math";
export function BabyGrowthCalc(){
 const [gender,setGender]=useState("male"),[ageDays,setAgeDays]=useState(""),[weight,setWeight]=useState("");
 const [result,setResult]=useState<ReturnType<typeof babyWeight>|null>(null),[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[gender,ageDays,weight]);
 const calculate=()=>{try{setError("");setResult(babyWeight(Number(ageDays),Number(weight),gender));}catch(e){setResult(null);setError((e as Error).message);}};
 return <><CalcShell><p className="text-sm text-slate-600 mb-5">WHO weight-for-age standard, birth to five years. Use completed days for the age at measurement. This is weight only, not length, head circumference, or a diagnosis. Prematurity and medical conditions need clinical interpretation.</p><div className="grid sm:grid-cols-3 gap-5 mb-5"><CalcSelect label="Sex used by WHO chart" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]}/><CalcInput label="Age at measurement (completed days, 0–1826)" value={ageDays} onChange={setAgeDays} min={0} max={1826} step={1}/><CalcInput label="Weight (kg)" value={weight} onChange={setWeight}/></div><CalcButton onClick={calculate} label="Calculate Weight-for-age Percentile"/><CalcError message={error}/></CalcShell>
 {result&&<ResultsShell><div className="grid sm:grid-cols-4 gap-4"><ResultCard label="Weight-for-age percentile" value={`${result.percentile.toFixed(2)}th`} highlight/><ResultCard label="3rd percentile" value={`${result.p3.toFixed(2)} kg`}/><ResultCard label="Median" value={`${result.p50.toFixed(2)} kg`}/><ResultCard label="97th percentile" value={`${result.p97.toFixed(2)} kg`}/></div><p className="text-sm mt-4 text-slate-600">A single percentile does not establish whether growth is healthy. Discuss the series of measurements with your child’s clinician.</p></ResultsShell>}</>;
}
