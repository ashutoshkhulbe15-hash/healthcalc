"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge, UnitToggle } from "@/components/CalcUI";

export function WhrCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");
  const[waist,setWaist]=useState("");const[hip,setHip]=useState("");
  const[result,setResult]=useState<{whr:number;risk:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const w=parseFloat(waist),h=parseFloat(hip);if(!w||!h)return;
    const whr=Math.round((w/h)*100)/100;
    let risk:string,status:"good"|"warning"|"danger";
    if(gender==="male"){
      if(whr<0.9){risk="Low health risk";status="good";}
      else if(whr<1.0){risk="Moderate health risk";status="warning";}
      else{risk="High health risk";status="danger";}
    }else{
      if(whr<0.8){risk="Low health risk";status="good";}
      else if(whr<0.85){risk="Moderate health risk";status="warning";}
      else{risk="High health risk";status="danger";}
    }
    setResult({whr,risk,status});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <div />
        <CalcInput label={`Waist circumference (${unit==="metric"?"cm":"inches"})`} value={waist} onChange={setWaist} placeholder="At narrowest point" />
        <CalcInput label={`Hip circumference (${unit==="metric"?"cm":"inches"})`} value={hip} onChange={setHip} placeholder="At widest point" />
      </div>
      <CalcButton onClick={calculate} label="Calculate WHR" />
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.risk} />
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.whr}</div>
        <div className="text-sm text-slate-400 mt-1">Waist-to-Hip Ratio (WHO)</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ResultCard label="Low risk" value={gender==="male"?"< 0.90":"< 0.80"} sub={result.status==="good"?"← You":""} highlight={result.status==="good"} />
        <ResultCard label="Moderate" value={gender==="male"?"0.90–0.99":"0.80–0.84"} sub={result.status==="warning"?"← You":""} highlight={result.status==="warning"} />
        <ResultCard label="High risk" value={gender==="male"?"≥ 1.00":"≥ 0.85"} sub={result.status==="danger"?"← You":""} highlight={result.status==="danger"} />
      </div>
    </ResultsShell>}</>
  );
}
