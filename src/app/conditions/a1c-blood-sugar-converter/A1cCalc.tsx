"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function A1cCalc(){
  const[a1c,setA1c]=useState("");
  const[result,setResult]=useState<{a1c:number;eag_mgdl:number;eag_mmol:number;category:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const v=parseFloat(a1c); if(!v||v<3||v>15) return;
    const eag=28.7*v-46.7;
    const mmol=Math.round(eag/18*10)/10;
    let cat:string,status:"good"|"warning"|"danger";
    if(v<5.7){cat="Normal";status="good";}
    else if(v<6.5){cat="Prediabetes";status="warning";}
    else{cat="Diabetes range";status="danger";}
    setResult({a1c:v,eag_mgdl:Math.round(eag),eag_mmol:mmol,category:cat,status});
  };

  return(
    <>
      <CalcShell>
        <div className="max-w-xs mb-5">
          <CalcInput label="A1C value (%)" value={a1c} onChange={setA1c} placeholder="e.g. 6.2" step={0.1} />
        </div>
        <CalcButton onClick={calculate} label="Convert A1C" />
      </CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.status} text={`A1C ${result.a1c}% — ${result.category}`} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="A1C" value={`${result.a1c}%`} highlight />
            <ResultCard label="Est. avg glucose" value={`${result.eag_mgdl} mg/dL`} />
            <ResultCard label="Est. avg glucose" value={`${result.eag_mmol} mmol/L`} />
            <ResultCard label="Classification" value={result.category} sub="ADA Standards" />
          </div>
          <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-500">
            Formula: eAG (mg/dL) = 28.7 × A1C − 46.7 (Nathan DM et al. Diabetes Care. 2008)
          </div>
        </ResultsShell>
      )}
    </>
  );
}
