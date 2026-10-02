"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcError, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function CholesterolCalc(){
  const[total,setTotal]=useState("");const[hdl,setHdl]=useState("");const[ldl,setLdl]=useState("");const[trig,setTrig]=useState("");
  const[result,setResult]=useState<{tcHdl:number;ldlHdl:number|null;trigHdl:number|null;nonHdl:number;risk:string;status:"good"|"warning"|"danger"|"info"}|null>(null);

  useEffect(()=>{setResult(null);},[total,hdl,ldl,trig]);
  const[error,setError]=useState("");
  const calculate=()=>{
    setError("");
    const tc=parseFloat(total),h=parseFloat(hdl),l=parseFloat(ldl),tg=parseFloat(trig);
    if(!Number.isFinite(tc)||!Number.isFinite(h)||tc<=0||h<=0||tc<h||(ldl!==""&&(!Number.isFinite(l)||l<0))||(trig!==""&&(!Number.isFinite(tg)||tg<0))){setResult(null);setError("Use positive total/HDL values with total at least HDL, and nonnegative optional values.");return;}
    const tcHdl=Math.round((tc/h)*10)/10;
    const ldlHdl=ldl!==""?Math.round((l/h)*10)/10:null;
    const trigHdl=trig!==""?Math.round((tg/h)*10)/10:null;
    const nonHdl=Math.round(tc-h);
    const risk="Ratios are arithmetic summaries, not an overall cardiovascular risk score",status="info";
    setResult({tcHdl,ldlHdl,trigHdl,nonHdl,risk,status});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Total cholesterol (mg/dL)" value={total} onChange={setTotal} placeholder="e.g. 200" />
        <CalcInput label="HDL cholesterol (mg/dL)" value={hdl} onChange={setHdl} placeholder="e.g. 55" />
        <CalcInput label="LDL cholesterol (mg/dL, optional)" value={ldl} onChange={setLdl} min={0} placeholder="e.g. 120" />
        <CalcInput label="Triglycerides (mg/dL, optional)" value={trig} onChange={setTrig} min={0} placeholder="e.g. 150" />
      </div>
      <CalcButton onClick={calculate} label="Calculate Ratios" />
      <CalcError message={error}/>
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.risk} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="TC/HDL Ratio" value={`${result.tcHdl}`} sub="Total ÷ HDL" highlight />
        <ResultCard label="LDL/HDL Ratio" value={result.ldlHdl!==null?`${result.ldlHdl}`:"—"} sub={result.ldlHdl===null?"Not provided":"LDL ÷ HDL"} />
        <ResultCard label="TG/HDL Ratio" value={result.trigHdl!==null?`${result.trigHdl}`:"—"} sub={result.trigHdl===null?"Not provided":"TG ÷ HDL; not an insulin-resistance diagnosis"} />
        <ResultCard label="Non-HDL" value={`${result.nonHdl} mg/dL`} sub="Total minus HDL" />
      </div>
    </ResultsShell>}</>
  );
}
