"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

function calcGFR(cr:number,age:number,female:boolean):number{
  // CKD-EPI 2021 (race-free)
  const k=female?0.7:0.9;
  const a=female?-0.241:-0.302;
  const minR=Math.min(cr/k,1);
  const maxR=Math.max(cr/k,1);
  return 142*Math.pow(minR,a)*Math.pow(maxR,-1.200)*Math.pow(0.9938,age)*(female?1.012:1);
}

const STAGES=[
  {min:90,label:"G1 — Normal or high",color:"good" as const},
  {min:60,label:"G2 — Mildly decreased",color:"good" as const},
  {min:45,label:"G3a — Mild to moderate",color:"warning" as const},
  {min:30,label:"G3b — Moderate to severe",color:"warning" as const},
  {min:15,label:"G4 — Severely decreased",color:"danger" as const},
  {min:0,label:"G5 — Kidney failure",color:"danger" as const},
];

export function GfrCalc(){
  const[creatinine,setCreatinine]=useState("");const[age,setAge]=useState("");const[gender,setGender]=useState("male");
  const[result,setResult]=useState<{gfr:number;stage:typeof STAGES[0]}|null>(null);

  const calculate=()=>{
    const cr=parseFloat(creatinine),a=parseInt(age);
    if(!cr||!a)return;
    const gfr=calcGFR(cr,a,gender==="female");
    const stage=STAGES.find(s=>gfr>=s.min)||STAGES[STAGES.length-1];
    setResult({gfr:Math.round(gfr),stage});
  };

  return(
    <>
      <CalcShell>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          <CalcInput label="Serum creatinine (mg/dL)" value={creatinine} onChange={setCreatinine} placeholder="e.g. 1.1" step={0.1} />
          <CalcInput label="Age" value={age} onChange={setAge} placeholder="e.g. 55" />
          <CalcSelect label="Sex" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        </div>
        <CalcButton onClick={calculate} label="Calculate GFR" />
      </CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.stage.color} text={result.stage.label} />
          <div className="text-center mb-6">
            <div className="text-5xl font-extrabold text-brand-600">{result.gfr}</div>
            <div className="text-sm text-slate-400 mt-1">mL/min/1.73m²</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ResultCard label="eGFR" value={`${result.gfr} mL/min`} sub={result.stage.label} highlight />
            <ResultCard label="Equation" value="CKD-EPI 2021" sub="Race-free formula" />
            <ResultCard label="Normal range" value="≥ 90 mL/min" sub="Stage G1" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
