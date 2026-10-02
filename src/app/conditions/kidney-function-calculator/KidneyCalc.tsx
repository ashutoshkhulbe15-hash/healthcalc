"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

function calcGFR(cr:number,age:number,female:boolean):number{
  const k=female?0.7:0.9;const a=female?-0.241:-0.302;
  return 142*Math.pow(Math.min(cr/k,1),a)*Math.pow(Math.max(cr/k,1),-1.200)*Math.pow(0.9938,age)*(female?1.012:1);
}

const STAGES=[{min:90,label:"G1 — Normal",action:"Discuss in clinical context",color:"good" as const},{min:60,label:"G2 — Mild decrease",action:"Discuss in clinical context",color:"good" as const},{min:45,label:"G3a — Mild-moderate",action:"Discuss with your clinician",color:"warning" as const},{min:30,label:"G3b — Moderate-severe",action:"Seek clinical assessment",color:"warning" as const},{min:15,label:"G4 — Severe decrease",action:"Seek prompt clinical assessment",color:"danger" as const},{min:0,label:"G5 — Kidney failure",action:"Seek prompt clinical assessment",color:"danger" as const}];

export function KidneyCalc(){
  const[cr,setCr]=useState("");const[age,setAge]=useState("");const[gender,setGender]=useState("male");
  const[result,setResult]=useState<{gfr:number;stage:typeof STAGES[0]}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[cr,age,gender]);
  const calculate=()=>{
    setError("");
    const c=parseFloat(cr),a=parseInt(age);if(!c||!a||c<=0||a<18||a>120){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const gfr=calcGFR(c,a,gender==="female");
    const stage=STAGES.find(s=>gfr>=s.min)||STAGES[STAGES.length-1];
    setResult({gfr:Math.round(gfr),stage});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        <CalcInput label="Serum creatinine (mg/dL)" value={cr} onChange={setCr} placeholder="e.g. 1.2" step={0.1} />
        <CalcInput label="Age (adults 18+)" min={18} max={120} step={1} value={age} onChange={setAge} placeholder="e.g. 60" />
        <CalcSelect label="Sex" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Kidney Function" />
    <CalcError message={error}/></CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.stage.color} text={result.stage.label} />
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.gfr}</div>
        <div className="text-sm text-slate-400 mt-1">mL/min/1.73m² (CKD-EPI 2021)</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultCard label="eGFR" value={`${result.gfr}`} sub={result.stage.label} highlight />
        <ResultCard label="Next step" value={result.stage.action} />
        <ResultCard label="Equation" value="CKD-EPI 2021" sub="Race-free" />
      </div>
    <p className="mt-4 text-sm text-slate-600">This is an adult creatinine-based estimate and GFR category, not a CKD diagnosis. Kidney damage, urine albumin and persistence over time matter. Acute illness, pregnancy and unusual muscle mass need clinical interpretation. Do not choose treatment from this category alone.</p></ResultsShell>}</>
  );
}
