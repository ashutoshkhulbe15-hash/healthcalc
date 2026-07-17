"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function CholesterolCalc(){
  const[total,setTotal]=useState("");const[hdl,setHdl]=useState("");const[ldl,setLdl]=useState("");const[trig,setTrig]=useState("");
  const[result,setResult]=useState<{tcHdl:number;ldlHdl:number;trigHdl:number;nonHdl:number;risk:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const tc=parseFloat(total),h=parseFloat(hdl),l=parseFloat(ldl),tg=parseFloat(trig);
    if(!tc||!h)return;
    const tcHdl=Math.round((tc/h)*10)/10;
    const ldlHdl=l?Math.round((l/h)*10)/10:0;
    const trigHdl=tg?Math.round((tg/h)*10)/10:0;
    const nonHdl=Math.round(tc-h);
    let risk:string,status:"good"|"warning"|"danger";
    if(tcHdl<3.5){risk="Low cardiovascular risk";status="good";}
    else if(tcHdl<=5){risk="Moderate risk — monitor";status="warning";}
    else{risk="Higher risk — consult provider";status="danger";}
    setResult({tcHdl,ldlHdl,trigHdl,nonHdl,risk,status});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="Total cholesterol (mg/dL)" value={total} onChange={setTotal} placeholder="e.g. 200" />
        <CalcInput label="HDL cholesterol (mg/dL)" value={hdl} onChange={setHdl} placeholder="e.g. 55" />
        <CalcInput label="LDL cholesterol (mg/dL)" value={ldl} onChange={setLdl} placeholder="e.g. 120" />
        <CalcInput label="Triglycerides (mg/dL)" value={trig} onChange={setTrig} placeholder="e.g. 150" />
      </div>
      <CalcButton onClick={calculate} label="Calculate Ratios" />
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.risk} />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="TC/HDL Ratio" value={`${result.tcHdl}`} sub={result.tcHdl<3.5?"Optimal (<3.5)":result.tcHdl<=5?"Moderate (3.5-5)":"High (>5)"} highlight />
        <ResultCard label="LDL/HDL Ratio" value={result.ldlHdl?`${result.ldlHdl}`:"—"} sub={result.ldlHdl&&result.ldlHdl<2?"Optimal (<2)":"Monitor"} />
        <ResultCard label="TG/HDL Ratio" value={result.trigHdl?`${result.trigHdl}`:"—"} sub={result.trigHdl&&result.trigHdl<2?"Low insulin resistance":"Higher IR marker"} />
        <ResultCard label="Non-HDL" value={`${result.nonHdl} mg/dL`} sub={result.nonHdl<130?"Optimal (<130)":"Above optimal"} />
      </div>
    </ResultsShell>}</>
  );
}
