"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

function addDays(d:Date,n:number){const r=new Date(d);r.setDate(r.getDate()+n);return r;}
function fmt(d:Date){return d.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});}

export function IvfCalc(){
  const[transferDate,setTransferDate]=useState("");const[embryoType,setEmbryoType]=useState("5");
  const[transferType,setTransferType]=useState("fresh");
  const[result,setResult]=useState<{edd:Date;current:{weeks:number;days:number};progress:number}|null>(null);

  const calculate=()=>{
    if(!transferDate)return;
    const td=new Date(transferDate);
    const daysToAdd=embryoType==="5"?263:265;
    const edd=addDays(td,daysToAdd);
    const lmpEquiv=addDays(td,embryoType==="5"?-19:-17);
    const today=new Date();
    const diff=Math.abs(today.getTime()-lmpEquiv.getTime());
    const weeks=Math.floor(diff/(7*86400000));
    const days=Math.floor((diff%(7*86400000))/86400000);
    setResult({edd,current:{weeks,days},progress:Math.min(100,Math.round((weeks/40)*100))});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Transfer date" value={transferDate} onChange={setTransferDate} type="date" />
        <CalcSelect label="Embryo type" value={embryoType} onChange={setEmbryoType}
          options={[{value:"5",label:"Day 5 blastocyst"},{value:"3",label:"Day 3 embryo"}]} />
        <CalcSelect label="Transfer type" value={transferType} onChange={setTransferType}
          options={[{value:"fresh",label:"Fresh transfer"},{value:"fet",label:"Frozen (FET)"}]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate IVF Due Date" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Your estimated due date</div>
        <div className="text-3xl font-extrabold text-brand-600">{fmt(result.edd)}</div>
      </div>
      <div className="mb-6">
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
          <div className="absolute h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full" style={{width:`${result.progress}%`}} />
        </div>
        <div className="text-center text-sm font-semibold text-slate-700 mt-2">
          {result.current.weeks} weeks, {result.current.days} days ({result.progress}%)
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultCard label="Due date" value={result.edd.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})} highlight />
        <ResultCard label="Gestational age" value={`${result.current.weeks}w ${result.current.days}d`} />
        <ResultCard label="Method" value={`${embryoType}-day ${transferType==="fresh"?"fresh":"FET"}`} />
      </div>
    </ResultsShell>}</>
  );
}
