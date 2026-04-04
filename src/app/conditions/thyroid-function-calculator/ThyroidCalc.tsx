"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function ThyroidCalc(){
  const[tsh,setTsh]=useState("");const[ft4,setFt4]=useState("");const[pregnant,setPregnant]=useState("no");
  const[result,setResult]=useState<{interpretation:string;status:"good"|"warning"|"danger";tshRange:string;details:string}|null>(null);

  const calculate=()=>{
    const t=parseFloat(tsh);if(!t&&t!==0)return;
    const f=parseFloat(ft4)||0;
    const isPreg=pregnant==="yes";
    const upperTSH=isPreg?2.5:4.0;
    const lowerTSH=isPreg?0.1:0.4;

    let interp:string,status:"good"|"warning"|"danger",details:string;
    if(t>=lowerTSH&&t<=upperTSH){
      interp="Normal thyroid function";status="good";
      details=isPreg?"TSH within pregnancy range (0.1-2.5 mIU/L)":"TSH within standard range (0.4-4.0 mIU/L)";
    }else if(t>upperTSH&&t<=10){
      if(f>0&&f>=0.8){interp="Subclinical hypothyroidism";status="warning";details="Elevated TSH with normal Free T4. Monitor or treat based on symptoms.";}
      else if(f>0){interp="Hypothyroidism";status="danger";details="Elevated TSH with low Free T4. Evaluation and treatment likely needed.";}
      else{interp="Elevated TSH — possible hypothyroidism";status="warning";details="Free T4 needed for full interpretation.";}
    }else if(t>10){
      interp="Hypothyroidism likely";status="danger";details="TSH significantly elevated. Medical evaluation recommended.";
    }else if(t<lowerTSH&&t>=0.1){
      interp="Subclinical hyperthyroidism";status="warning";details="Low TSH with possibly normal thyroid hormones. Monitor.";
    }else{
      interp="Possible hyperthyroidism";status="danger";details="Very low TSH. Medical evaluation recommended.";
    }
    setResult({interpretation:interp,status,tshRange:isPreg?"0.1–2.5 mIU/L":"0.4–4.0 mIU/L",details});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="TSH (mIU/L)" value={tsh} onChange={setTsh} placeholder="e.g. 2.5" step={0.1} />
        <CalcInput label="Free T4 (ng/dL, optional)" value={ft4} onChange={setFt4} placeholder="e.g. 1.2" step={0.1} />
        <CalcSelect label="Currently pregnant?" value={pregnant} onChange={setPregnant} options={[{value:"no",label:"No"},{value:"yes",label:"Yes (different TSH ranges apply)"}]} />
      </div>
      <CalcButton onClick={calculate} label="Interpret Results" />
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.interpretation} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <ResultCard label="Interpretation" value={result.interpretation} highlight />
        <ResultCard label="Normal TSH range" value={result.tshRange} sub={pregnant==="yes"?"Pregnancy-adjusted":"Standard adult"} />
        <ResultCard label="Next step" value={result.status==="good"?"Routine monitoring":"Discuss with provider"} />
      </div>
      <div className="p-3.5 bg-slate-50 rounded-lg text-sm text-slate-600">{result.details}</div>
    </ResultsShell>}</>
  );
}
