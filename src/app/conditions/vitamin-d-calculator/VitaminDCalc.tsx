"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";
export function VitaminDCalc(){
 const [age,setAge]=useState(""),[result,setResult]=useState<number|null>(null);
 useEffect(()=>setResult(null),[age]);
 const calculate=()=>{const a=Number(age);if(Number.isInteger(a)&&a>=1&&a<=120)setResult(a>=71?800:600);};
 return <><CalcShell><p className="text-sm text-slate-600 mb-4">This reference shows the US recommended daily allowance from all sources, not an individualized supplement or deficiency treatment dose. Ages one year and older only. No dose is inferred from skin tone, weight or a blood test.</p><CalcInput label="Age (years, 1–120)" value={age} onChange={setAge} min={1} max={120} step={1}/><div className="mt-4"><CalcButton onClick={calculate} label="Show Daily Reference Intake"/></div></CalcShell>{result!==null&&<ResultsShell><ResultCard label="Recommended daily allowance" value={`${result} IU (${result/40} micrograms)`} sub="Total intake from food and supplements"/><p className="text-sm mt-4">This is not the amount you should automatically add as a supplement. Deficiency treatment, medications and some medical conditions require an individual plan. Blood-level targets are not universal.</p><a className="underline text-brand-700" href="https://ods.od.nih.gov/factsheets/VitaminD-Consumer/">NIH Office of Dietary Supplements: vitamin D</a></ResultsShell>}</>;
}
