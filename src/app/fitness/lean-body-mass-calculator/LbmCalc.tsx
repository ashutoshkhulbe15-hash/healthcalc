"use client";
import { leanBodyMass } from "@/lib/health-math";
import { useState, useEffect } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle, CalcError } from "@/components/CalcUI";

export function LbmCalc(){
  const[unit,setUnit]=useState("metric");const[sex,setSex]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");
  const[result,setResult]=useState<number|null>(null);const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[unit,sex,weight,height]);
  const calculate=()=>{
    try {
      setError("");
      const {boer}=leanBodyMass(Number(weight),Number(height),sex,unit==="imperial");
      setResult(Math.round(boer*10)/10);
    } catch(e) {setResult(null);setError((e as Error).message);}
  };
  const pounds=result===null?null:Math.round(result*2.2046226218*10)/10;
  return <><CalcShell><UnitToggle value={unit} onChange={v=>{setUnit(v);setWeight("");setHeight("");}} />
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
      <CalcSelect label="Sex category used by this equation" value={sex} onChange={setSex} options={[{value:"male",label:"Male equation"},{value:"female",label:"Female equation"}]} />
      <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
      <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
    </div>
    <CalcButton onClick={calculate} label="Calculate equation estimate"/><CalcError message={error}/>
  </CalcShell>{result!==null&&<ResultsShell><ResultCard label="Boer equation estimate" value={`${result} kg`} sub={`${pounds} lb`} highlight /></ResultsShell>}</>;
}
