"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

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

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[creatinine,age,gender]);
  const calculate=()=>{
    setError("");
    const cr=Number(creatinine),a=Number(age);
    if(!Number.isFinite(cr)||cr<=0||!Number.isInteger(a)||a<18||a>120){setResult(null);setError("Enter serum creatinine in mg/dL above 0 and an adult age from 18 to 120.");return;}
    const gfr=calcGFR(cr,a,gender==="female");
    const stage=STAGES.find(s=>gfr>=s.min)||STAGES[STAGES.length-1];
    setResult({gfr:Math.round(gfr),stage});
  };

  return(
    <>
      <CalcShell>
        <p className="mb-4 text-sm text-slate-600">Adult creatinine-based estimate. <a className="underline" href="https://www.kidney.org/ckd-epi-creatinine-equation-2021">NKF equation and units</a>; <a className="underline" href="https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf">KDIGO category definitions and interpretation</a>.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
          <CalcInput label="Serum creatinine (mg/dL)" value={creatinine} onChange={setCreatinine} placeholder="e.g. 1.1" min={0} step={0.1} />
          <CalcInput label="Age (adults 18+)" min={18} max={120} step={1} value={age} onChange={setAge} placeholder="e.g. 55" />
          <CalcSelect label="Sex" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        </div>
        <CalcButton onClick={calculate} label="Calculate GFR" />
      <CalcError message={error}/></CalcShell>
      {result&&(<>
        <ResultsShell>
          <StatusBadge status={result.stage.color} text={result.stage.label} />
          <div className="text-center mb-6">
            <div className="text-5xl font-extrabold text-brand-600">{result.gfr}</div>
            <div className="text-sm text-slate-400 mt-1">mL/min/1.73m²</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ResultCard label="eGFR" value={`${result.gfr} mL/min/1.73m²`} sub={result.stage.label} highlight />
            <ResultCard label="Equation" value="CKD-EPI 2021" sub="Race-free formula" />
            <ResultCard label="G1 category threshold" value="≥ 90 mL/min/1.73m²" sub="GFR category G1" />
          </div>
        <p className="mt-4 text-sm text-slate-600">This is an adult creatinine-based estimate and GFR category, not a CKD diagnosis. Kidney damage, urine albumin and persistence over time matter. Acute illness, pregnancy and unusual muscle mass need clinical interpretation. Do not choose treatment from this category alone.</p></ResultsShell>
        <p className="text-xs text-slate-400 mt-3 italic">The GFR category reflects KDIGO reference ranges and is not a CKD diagnosis. GFR varies with hydration, diet, and other factors. Consult your healthcare provider for interpretation.</p>
      </>)}
    </>
  );
}
