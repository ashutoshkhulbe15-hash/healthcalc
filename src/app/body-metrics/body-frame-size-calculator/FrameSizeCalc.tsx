"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

export function FrameSizeCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");
  const[height,setHeight]=useState("");const[wrist,setWrist]=useState("");
  const[result,setResult]=useState<{ratio:number;frame:string;status:"good"|"info"|"warning"}|null>(null);

  const calculate=()=>{
    const h=parseFloat(height),w=parseFloat(wrist);if(!h||!w)return;
    const hcm=unit==="metric"?h:h*2.54;
    const wcm=unit==="metric"?w:w*2.54;
    const ratio=hcm/wcm;
    let frame:string;
    if(gender==="male"){
      frame=ratio>10.4?"Small":ratio>=9.6?"Medium":"Large";
    }else{
      frame=ratio>11?"Small":ratio>=10.1?"Medium":"Large";
    }
    setResult({ratio:Math.round(ratio*10)/10,frame,status:"info"});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
        <CalcInput label={`Wrist circumference (${unit==="metric"?"cm":"inches"})`} value={wrist} onChange={setWrist} placeholder="Measure below wrist bone" />
      </div>
      <CalcButton onClick={calculate} label="Determine Frame Size" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-5">
        <div className="text-4xl font-extrabold text-brand-600">{result.frame} Frame</div>
        <div className="text-sm text-slate-400 mt-1">Height-to-wrist ratio: {result.ratio}</div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <ResultCard label="Small frame" value={gender==="male"?"> 10.4":"> 11.0"} sub={result.frame==="Small"?"← You":""} highlight={result.frame==="Small"} />
        <ResultCard label="Medium frame" value={gender==="male"?"9.6–10.4":"10.1–11.0"} sub={result.frame==="Medium"?"← You":""} highlight={result.frame==="Medium"} />
        <ResultCard label="Large frame" value={gender==="male"?"< 9.6":"< 10.1"} sub={result.frame==="Large"?"← You":""} highlight={result.frame==="Large"} />
      </div>
    </ResultsShell>}</>
  );
}
