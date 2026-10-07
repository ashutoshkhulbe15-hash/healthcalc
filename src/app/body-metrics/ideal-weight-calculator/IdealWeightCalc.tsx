"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";
import { historicalWeightEquations } from "@/lib/health-math";

export function IdealWeightCalc(){
  const[unit,setUnit]=useState("metric");const[gender,setGender]=useState("male");const[height,setHeight]=useState("");
  const[result,setResult]=useState<{devine:number;robinson:number;miller:number;hamwi:number;bmiRange:[number,number]}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,gender,height]);
  const calculate=()=>{
    setError("");
    const h=parseFloat(height);if(!Number.isFinite(h)||h<=0){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const inches=unit==="metric"?h/2.54:h;
    let equations;
    try { equations=historicalWeightEquations(inches,gender as "male"|"female"); }
    catch { setResult(null);setError("This comparison is limited to heights of at least 60 inches (152.4 cm).");return; }
    const hm=inches*0.0254;
    const bmiMin=18.5*hm*hm;
    const bmiMax=25*hm*hm;
    setResult({...equations,bmiRange:[bmiMin,bmiMax]});
  };

  return(
    <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setHeight("");}} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} placeholder={unit==="metric"?"e.g. 170":"e.g. 67"} />
        <CalcSelect label="Sex category used by the equations" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
      </div>
      <CalcButton onClick={calculate} label="Compare historical equations" />
    <CalcError message={error}/></CalcShell>
    {result&&<ResultsShell>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <ResultCard label="Devine (1974)" value={`${result.devine.toFixed(1)} kg`} sub={`${Math.round(result.devine/0.45359237)} lbs`} highlight />
        <ResultCard label="Robinson (1983)" value={`${result.robinson.toFixed(1)} kg`} sub={`${Math.round(result.robinson/0.45359237)} lbs`} />
        <ResultCard label="Miller (1983)" value={`${result.miller.toFixed(1)} kg`} sub={`${Math.round(result.miller/0.45359237)} lbs`} />
        <ResultCard label="Hamwi" value={`${result.hamwi.toFixed(1)} kg`} sub={`${Math.round(result.hamwi/0.45359237)} lbs`} />
      </div>
      <div className="bg-slate-50 rounded-xl p-4">
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Adult BMI 18.5 to less than 25 reference range</div>
        <div className="text-lg font-bold text-slate-900">{unit==="metric"?`${result.bmiRange[0].toFixed(1)} to below ${result.bmiRange[1].toFixed(1)} kg`: `${(result.bmiRange[0]/0.45359237).toFixed(1)} to below ${(result.bmiRange[1]/0.45359237).toFixed(1)} lb`}</div>
        <div className="text-xs text-slate-500">Reference range for adults 20+ only; this is not a personal target. Boundaries are rounded for display; use unrounded BMI for categorization. <a className="underline" href="https://www.cdc.gov/bmi/adult-calculator/bmi-categories.html">CDC category source</a></div>
      </div>
      <p className="text-xs text-slate-500 mt-4">Historical formula outputs, not measured ideal weights. <a className="underline" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC4841935/">Published equations, Table 3</a></p>
    </ResultsShell>}</>
  );
}
