"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function A1cCalc(){
  const[a1c,setA1c]=useState("");
  const[result,setResult]=useState<{a1c:number;eag_mgdl:number;eag_mmol:number;category:string;status:"good"|"warning"|"danger"}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[a1c]);
  const calculate=()=>{
    setError("");
    const v=parseFloat(a1c); if(!v||v<3||v>15){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const eag=28.7*v-46.7;
    const mmol=Math.round(eag/18*10)/10;
    let cat:string,status:"good"|"warning"|"danger";
    if(v<5.7){cat="Laboratory reference: Below 5.7%";status="good";}
    else if(v<6.5){cat="Laboratory reference: Prediabetes range";status="warning";}
    else{cat="Laboratory reference: Diabetes threshold";status="danger";}
    setResult({a1c:v,eag_mgdl:Math.round(eag),eag_mmol:mmol,category:cat,status});
  };

  return(
    <>
      <CalcShell>
        <div className="max-w-xs mb-5">
          <CalcInput label="A1C value (%)" value={a1c} onChange={setA1c} placeholder="e.g. 6.2" min={3} max={15} step={0.1} />
        </div>
        <CalcButton onClick={calculate} label="Convert A1C" />
      <CalcError message={error}/></CalcShell>
      {result&&(<>
        <ResultsShell>
          <StatusBadge status={result.status} text={`A1C ${result.a1c}% — ${result.category}`} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="A1C" value={`${result.a1c}%`} highlight />
            <ResultCard label="Est. avg glucose" value={`${result.eag_mgdl} mg/dL`} />
            <ResultCard label="Est. avg glucose" value={`${result.eag_mmol} mmol/L`} />
            <ResultCard label="A1C reference range" value={result.category} sub="Nonpregnant individuals; not a diagnosis" />
          </div>
          <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-500">
            Formula: eAG (mg/dL) = 28.7 × A1C − 46.7. <a href="https://ngsp.org/A1ceAG.asp" className="underline">NGSP equation</a>. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/" className="underline">ADA 2026 reference criteria</a>.
          </div>
        </ResultsShell>
        <p className="text-xs text-slate-400 mt-3 italic">These are laboratory reference criteria for nonpregnant individuals, not a diagnosis or personal treatment goal. Diagnosis generally requires confirmation. Discuss interpretation with your healthcare provider.</p>
      </>)}
    </>
  );
}
