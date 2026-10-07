"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle, CalcError } from "@/components/CalcUI";
import { circumferenceBodyCompositionEstimate } from "@/lib/health-math";

export function BodyFatCalc() {
  const [unit, setUnit] = useState("metric"); const [gender, setGender] = useState("male");
  const [waist, setWaist] = useState(""); const [neck, setNeck] = useState("");
  const [hip, setHip] = useState(""); const [height, setHeight] = useState("");
  const [result, setResult] = useState<{bf:number}|null>(null);

  useEffect(()=>{setResult(null);},[unit,gender,waist,neck,hip,height]);
  const [error,setError]=useState("");
  const calculate = () => {
    setError("");
    let w=parseFloat(waist), n=parseFloat(neck), h=parseFloat(height), hp=parseFloat(hip)||0;
    if (![w,n,h].every(v=>Number.isFinite(v)&&v>0)) {setResult(null);setError("Enter positive measurements.");return;}
    if (unit==="metric") { w/=2.54; n/=2.54; h/=2.54; hp/=2.54; }
    let bf:number;
    try { bf=circumferenceBodyCompositionEstimate(w,n,h,gender as "male"|"female",hp); }
    catch(e) { setResult(null);setError((e as Error).message);return; }
    setResult({bf});
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={v=>{setUnit(v);setHeight("");setWaist("");setNeck("");setHip("");}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcSelect label="Equation selection" value={gender} onChange={setGender} options={[{value:"male",label:"Male equation"},{value:"female",label:"Female equation"}]} />
          <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
          <CalcInput label={`${gender==="male"?"Abdomen":"Waist"} circumference (${unit==="metric"?"cm":"inches"})`} value={waist} onChange={setWaist} placeholder={gender==="male"?"At navel":"Use the method's waist site"} />
          <CalcInput label={`Neck circumference (${unit==="metric"?"cm":"inches"})`} value={neck} onChange={setNeck} placeholder="As measured for this method" />
          {gender==="female" && <CalcInput label={`Hip circumference (${unit==="metric"?"cm":"inches"})`} value={hip} onChange={setHip} placeholder="At widest point" />}
        </div>
        <p className="mb-4 text-sm text-slate-600">This uses the historical Army 2013 circumference equations. It does not provide a diagnosis, health category, or personal target.</p>
        <CalcButton onClick={calculate} label="Calculate estimate" />
        <CalcError message={error}/>
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ResultCard label="Equation estimate" value={`${result.bf}%`} highlight />
            <ResultCard label="Method" value="Military circumference equation" sub="Army Regulation 600-9 (2013), Appendix B" />
          </div>
          <p className="mt-4 text-sm text-slate-600">This number is an estimate from the equation and entered measurements. It is not a clinical measurement or health classification. <a className="underline" href="https://api.army.mil/e2/c/downloads/566071.pdf">Army 2013 equation source, Table B–5</a>. This tool is not an official service assessment.</p>
        </ResultsShell>
      )}
    </>
  );
}
