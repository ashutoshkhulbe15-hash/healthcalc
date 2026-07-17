"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

export function OneRepMaxCalc(){
  const[weight,setWeight]=useState("");const[reps,setReps]=useState("");
  const[result,setResult]=useState<{brzycki:number;epley:number;avg:number;pcts:{pct:number;w:number}[]}|null>(null);

  const calculate=()=>{
    const w=parseFloat(weight),r=parseInt(reps);if(!w||!r||r<1||r>30)return;
    const brzycki=r===1?w:w*(36/(37-r));
    const epley=r===1?w:w*(1+r/30);
    const avg=Math.round((brzycki+epley)/2);
    const pcts=[100,95,90,85,80,75,70,65,60].map(p=>({pct:p,w:Math.round(avg*p/100)}));
    setResult({brzycki:Math.round(brzycki),epley:Math.round(epley),avg,pcts});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Weight lifted (kg or lbs)" value={weight} onChange={setWeight} placeholder="e.g. 100" />
        <CalcInput label="Reps completed (1-30)" value={reps} onChange={setReps} placeholder="e.g. 5" min={1} max={30} />
      </div>
      <CalcButton onClick={calculate} label="Estimate 1RM" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Estimated One Rep Max</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.avg}</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <ResultCard label="Brzycki" value={`${result.brzycki}`} />
        <ResultCard label="Epley" value={`${result.epley}`} />
        <ResultCard label="Average" value={`${result.avg}`} highlight />
      </div>
      <div className="text-sm font-semibold text-slate-700 mb-3">Percentage-Based Training Chart</div>
      <div className="grid grid-cols-3 gap-2">
        {result.pcts.map(p=>(
          <div key={p.pct} className={`p-2.5 rounded-lg text-center ${p.pct===100?"bg-brand-50 border border-brand-100":"bg-slate-50"}`}>
            <div className="text-xs text-slate-400">{p.pct}%</div>
            <div className="text-lg font-bold text-slate-900">{p.w}</div>
          </div>
        ))}
      </div>
    </ResultsShell>}</>
  );
}
