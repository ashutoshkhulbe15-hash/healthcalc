"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge, UnitToggle } from "@/components/CalcUI";

const RANGES_M = [{max:6,label:"Essential",color:"#EF4444"},{max:14,label:"Athletic",color:"#22C55E"},{max:18,label:"Fit",color:"#22C55E"},{max:25,label:"Average",color:"#F59E0B"},{max:100,label:"Obese",color:"#EF4444"}];
const RANGES_F = [{max:14,label:"Essential",color:"#EF4444"},{max:21,label:"Athletic",color:"#22C55E"},{max:25,label:"Fit",color:"#22C55E"},{max:32,label:"Average",color:"#F59E0B"},{max:100,label:"Obese",color:"#EF4444"}];

export function BodyFatCalc() {
  const [unit, setUnit] = useState("metric"); const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState(""); const [neck, setNeck] = useState("");
  const [hip, setHip] = useState(""); const [height, setHeight] = useState("");
  const [result, setResult] = useState<{bf:number;leanMass:number;fatMass:number;category:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate = () => {
    let w=parseFloat(waist), n=parseFloat(neck), h=parseFloat(height), hp=parseFloat(hip)||0;
    if (!w||!n||!h) return;
    if (unit==="metric") { w/=2.54; n/=2.54; h/=2.54; hp/=2.54; }
    let bf: number;
    if (gender==="male") bf=86.010*Math.log10(w-n)-70.041*Math.log10(h)+36.76;
    else { if(!hp) return; bf=163.205*Math.log10(w+hp-n)-97.684*Math.log10(h)-78.387; }
    bf=Math.round(bf*10)/10;
    const ranges=gender==="male"?RANGES_M:RANGES_F;
    const cat=ranges.find(r=>bf<r.max)||ranges[ranges.length-1];
    const status=cat.label==="Athletic"||cat.label==="Fit"?"good":cat.label==="Average"?"warning":"danger";
    setResult({bf,leanMass:100-bf,fatMass:bf,category:cat.label,status});
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
          <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
          <CalcInput label={`Waist circumference (${unit==="metric"?"cm":"inches"})`} value={waist} onChange={setWaist} placeholder="At navel" />
          <CalcInput label={`Neck circumference (${unit==="metric"?"cm":"inches"})`} value={neck} onChange={setNeck} placeholder="Below Adam's apple" />
          {gender==="female" && <CalcInput label={`Hip circumference (${unit==="metric"?"cm":"inches"})`} value={hip} onChange={setHip} placeholder="At widest point" />}
        </div>
        <CalcButton onClick={calculate} label="Calculate Body Fat" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <StatusBadge status={result.status} text={`${result.bf}% body fat — ${result.category}`} />
          <div className="mb-6">
            <div className="flex rounded-full overflow-hidden h-5">
              <div className="bg-brand-500 transition-all" style={{width:`${100-result.bf}%`}} />
              <div className="bg-amber-300 transition-all" style={{width:`${result.bf}%`}} />
            </div>
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>Lean mass: {result.leanMass.toFixed(1)}%</span><span>Fat mass: {result.fatMass.toFixed(1)}%</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <ResultCard label="Body fat %" value={`${result.bf}%`} sub={result.category} highlight />
            <ResultCard label="Lean mass" value={`${result.leanMass.toFixed(1)}%`} />
            <ResultCard label="Method" value="U.S. Navy" sub="Hodgdon & Beckett, 1984" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
