"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle, CalcError } from "@/components/CalcUI";
import { pregnancyGain, KG_PER_LB } from "@/lib/health-math";
export function PregnancyWeightGainCalc(){
 const [unit,setUnit]=useState("metric"),[preWeight,setPreWeight]=useState(""),[height,setHeight]=useState(""),[currentWeight,setCurrentWeight]=useState(""),[kind,setKind]=useState("singleton");
 const [result,setResult]=useState<ReturnType<typeof pregnancyGain>|null>(null),[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,preWeight,height,currentWeight,kind]);
 const calculate=()=>{try{setError("");setResult(pregnancyGain(Number(preWeight),Number(height),Number(currentWeight),kind,unit==="imperial"));}catch(e){setResult(null);setError((e as Error).message);}};
 return <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setHeight("");setPreWeight("");setCurrentWeight("");}}/><div className="grid sm:grid-cols-2 gap-5 mb-5">
 <CalcInput label={`Pre-pregnancy weight (${unit==="metric"?"kg":"lb"})`} value={preWeight} onChange={setPreWeight}/>
 <CalcInput label={`Height (${unit==="metric"?"cm":"in"})`} value={height} onChange={setHeight}/>
 <CalcInput label={`Current weight (${unit==="metric"?"kg":"lb"})`} value={currentWeight} onChange={setCurrentWeight}/>
 <CalcSelect label="Pregnancy" value={kind} onChange={setKind} options={[{value:"singleton",label:"One baby"},{value:"twins",label:"Twins"},{value:"higher",label:"Triplets or more"}]}/>
 </div><p className="text-sm text-slate-600 mb-4">This tool shows total pregnancy gain guidance, not a weekly growth curve or assessment of your pregnancy.</p><CalcButton onClick={calculate} label="Calculate Weight Gain"/><CalcError message={error}/></CalcShell>
 {result&&<ResultsShell><div className="grid sm:grid-cols-3 gap-4"><ResultCard label="Pre-pregnancy BMI" value={result.bmi.toFixed(1)} sub={result.category}/><ResultCard label="Gain so far" value={`${result.gain.toFixed(1)} kg`} sub={`${(result.gain/KG_PER_LB).toFixed(1)} lb`}/><ResultCard label="Total pregnancy gain guidance" value={result.range?`${result.range[0]}–${result.range[1]} lb`:"Individual plan"} sub={result.range?`${(result.range[0]*KG_PER_LB).toFixed(1)}–${(result.range[1]*KG_PER_LB).toFixed(1)} kg (converted from lb)`:"Discuss with your maternity team"}/></div>
 <p className="mt-4 text-sm text-slate-600">{result.underweightTwins?"For twins with prepregnancy BMI below 18.5, CDC cites a separate observational study; the National Academies reported insufficient information for a twin guideline for this group. ":""}These are U.S. population reference ranges. The National Academies twin ranges are provisional. They do not set an individual goal; use clinical judgment with your maternity team. No weekly or higher-multiple targets are inferred here.</p><div className="flex flex-wrap gap-x-4 gap-y-2"><a className="text-brand-700 underline" href="https://www.nationalacademies.org/read/12584/chapter/2">National Academies: guideline table and scope</a><a className="text-brand-700 underline" href="https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html">CDC summary and twin exception source</a>{result.underweightTwins&&<a className="text-brand-700 underline" href="https://pubmed.ncbi.nlm.nih.gov/12746982/">CDC-cited twin study: historical cohort</a>}</div></ResultsShell>}</>;
}
