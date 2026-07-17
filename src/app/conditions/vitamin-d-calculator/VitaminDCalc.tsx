"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge, UnitToggle } from "@/components/CalcUI";

export function VitaminDCalc(){
  const[unit,setUnit]=useState("metric");const[weight,setWeight]=useState("");
  const[level,setLevel]=useState("");const[skin,setSkin]=useState("medium");const[sun,setSun]=useState("low");
  const[result,setResult]=useState<{dose:number;status:string;badge:"good"|"warning"|"danger";currentLevel:string}|null>(null);

  const calculate=()=>{
    const w=parseFloat(weight);if(!w)return;
    const wkg=unit==="metric"?w:w*0.4536;
    const lvl=parseFloat(level)||0;
    let baseDose=1000;
    if(wkg>90)baseDose=2000;
    else if(wkg>70)baseDose=1500;
    if(skin==="dark")baseDose+=500;
    if(sun==="none")baseDose+=500;
    if(lvl>0&&lvl<20)baseDose=Math.max(baseDose,4000);
    else if(lvl>=20&&lvl<30)baseDose=Math.max(baseDose,2000);

    let status:string,badge:"good"|"warning"|"danger",currentLevel:string;
    if(lvl<=0){currentLevel="Not provided";status="Maintenance dose";badge="good";}
    else if(lvl<20){currentLevel="Deficient (<20 ng/mL)";status="Repletion dose recommended";badge="danger";}
    else if(lvl<30){currentLevel="Insufficient (20-29 ng/mL)";status="Supplementation recommended";badge="warning";}
    else{currentLevel="Sufficient (≥30 ng/mL)";status="Maintenance dose";badge="good";}
    setResult({dose:baseDose,status,badge,currentLevel});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={setUnit} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label={`Body weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
        <CalcInput label="Current vitamin D level (ng/mL, optional)" value={level} onChange={setLevel} placeholder="e.g. 25 (leave blank if unknown)" />
        <CalcSelect label="Skin tone" value={skin} onChange={setSkin} options={[{value:"light",label:"Light"},{value:"medium",label:"Medium"},{value:"dark",label:"Dark (higher melanin)"}]} />
        <CalcSelect label="Sun exposure" value={sun} onChange={setSun} options={[{value:"high",label:"Regular (15+ min/day)"},{value:"moderate",label:"Some (occasional)"},{value:"low",label:"Minimal (mostly indoors)"},{value:"none",label:"Very little / covered"}]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Vitamin D Needs" />
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.badge} text={result.status} />
      <div className="text-center mb-6">
        <div className="text-4xl font-extrabold text-brand-600">{result.dose.toLocaleString()} IU</div>
        <div className="text-sm text-slate-400 mt-1">Recommended daily vitamin D3</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <ResultCard label="Daily dose" value={`${result.dose} IU`} sub="Vitamin D3 recommended" highlight />
        <ResultCard label="Current level" value={result.currentLevel} />
        <ResultCard label="Target range" value="30-50 ng/mL" sub="Endocrine Society" />
      </div>
    </ResultsShell>}</>
  );
}
