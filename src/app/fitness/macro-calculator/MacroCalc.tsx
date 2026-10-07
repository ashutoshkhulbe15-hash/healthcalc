"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard } from "@/components/CalcUI";
import { macroAllocation } from "@/lib/health-math";

export function MacroCalc(){
  const[calories,setCalories]=useState("");const[protein,setProtein]=useState("");const[carbs,setCarbs]=useState("");const[fat,setFat]=useState("");
  const[result,setResult]=useState<ReturnType<typeof macroAllocation>|null>(null);const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[calories,protein,carbs,fat]);
  const calculate=()=>{setError("");try{setResult(macroAllocation(Number(calories),Number(protein),Number(carbs),Number(fat)));}catch(e){setResult(null);setError(e instanceof Error?e.message:"Check the entered values.");}};
  return <><CalcShell><div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
    <CalcInput label="User-entered calorie total (kcal/day)" min={1} value={calories} onChange={setCalories}/>
    <CalcInput label="Protein share (%)" min={0} max={100} value={protein} onChange={setProtein}/>
    <CalcInput label="Carbohydrate share (%)" min={0} max={100} value={carbs} onChange={setCarbs}/>
    <CalcInput label="Fat share (%)" min={0} max={100} value={fat} onChange={setFat}/>
  </div><p className="text-xs text-slate-500 mb-4">Choose the values yourself. The three percentages must total exactly 100.</p><CalcButton onClick={calculate} label="Calculate macro arithmetic"/><CalcError message={error}/></CalcShell>
  {result&&<ResultsShell><div className="text-center mb-6"><div className="text-sm text-slate-400 mb-1">Arithmetic distribution of entered calories</div><div className="text-3xl font-extrabold text-brand-600">{result.totalCalories.toLocaleString()} kcal/day</div></div>
    <div className="flex rounded-full overflow-hidden h-6 mb-6"><div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[0]}%`,background:"#8B5CF6"}}>P {result.split[0]}%</div><div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[1]}%`,background:"#3B82F6"}}>C {result.split[1]}%</div><div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[2]}%`,background:"#F59E0B"}}>F {result.split[2]}%</div></div>
    <div className="grid grid-cols-3 gap-4"><ResultCard label="Protein" value={`${result.protein} g`} sub={`${result.proteinCalories.toLocaleString()} kcal`} highlight/><ResultCard label="Carbohydrate" value={`${result.carbs} g`} sub={`${result.carbCalories.toLocaleString()} kcal`}/><ResultCard label="Fat" value={`${result.fat} g`} sub={`${result.fatCalories.toLocaleString()} kcal`}/></div>
    <p className="text-xs text-slate-500 mt-4">This tool allocates only the values you enter. It does not determine calorie needs or recommend percentages or gram targets. <a href="https://www.nal.usda.gov/programs/fnic" className="underline">USDA conversion factors</a>: protein 4 kcal/g, carbohydrate 4 kcal/g, fat 9 kcal/g.</p>
  </ResultsShell>}</>;
}
