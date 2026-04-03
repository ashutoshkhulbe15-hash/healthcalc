"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, UnitToggle } from "@/components/CalcUI";

const GOALS = [
  { value: "lose", label: "Lose fat" }, { value: "maintain", label: "Maintain weight" }, { value: "gain", label: "Build muscle" },
];
const DIETS = [
  { value: "balanced", label: "Balanced (30/40/30)" }, { value: "highpro", label: "High Protein (40/30/30)" },
  { value: "keto", label: "Keto (25/5/70)" }, { value: "lowcarb", label: "Low Carb (30/25/45)" },
];
const SPLITS: Record<string, [number,number,number]> = {
  balanced: [30,40,30], highpro: [40,30,30], keto: [25,5,70], lowcarb: [30,25,45],
};
const ACTIVITY = [
  { value: "1.2", label: "Sedentary" }, { value: "1.375", label: "Lightly active" },
  { value: "1.55", label: "Moderately active" }, { value: "1.725", label: "Very active" },
];

export function MacroCalc() {
  const [unit, setUnit] = useState("metric");
  const [age, setAge] = useState(""); const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState(""); const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1.55");
  const [goal, setGoal] = useState("lose"); const [diet, setDiet] = useState("balanced");
  const [result, setResult] = useState<{ calories: number; protein: number; carbs: number; fat: number; split: [number,number,number] } | null>(null);

  const calculate = () => {
    const a=parseInt(age), w=parseFloat(weight), h=parseFloat(height);
    if (!a||!w||!h) return;
    const wkg=unit==="metric"?w:w*0.4536, hcm=unit==="metric"?h:h*2.54;
    const bmr=gender==="male"?10*wkg+6.25*hcm-5*a+5:10*wkg+6.25*hcm-5*a-161;
    const tdee=bmr*parseFloat(activity);
    const cal=goal==="lose"?tdee-500:goal==="gain"?tdee+300:tdee;
    const sp=SPLITS[diet];
    const protein=Math.round((cal*sp[0]/100)/4);
    const carbs=Math.round((cal*sp[1]/100)/4);
    const fat=Math.round((cal*sp[2]/100)/9);
    setResult({ calories: Math.round(cal), protein, carbs, fat, split: sp });
  };

  return (
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Age" value={age} onChange={setAge} placeholder="30" />
          <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
          <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
          <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
          <CalcSelect label="Activity level" value={activity} onChange={setActivity} options={ACTIVITY} />
          <CalcSelect label="Goal" value={goal} onChange={setGoal} options={GOALS} />
          <div className="sm:col-span-2"><CalcSelect label="Diet approach" value={diet} onChange={setDiet} options={DIETS} /></div>
        </div>
        <CalcButton onClick={calculate} label="Calculate Macros" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Daily calorie target</div>
            <div className="text-3xl font-extrabold text-brand-600">{result.calories.toLocaleString()} cal</div>
          </div>
          {/* Visual macro bar */}
          <div className="flex rounded-full overflow-hidden h-6 mb-6">
            <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[0]}%`,background:"#8B5CF6"}}>P {result.split[0]}%</div>
            <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[1]}%`,background:"#3B82F6"}}>C {result.split[1]}%</div>
            <div className="flex items-center justify-center text-[11px] font-bold text-white" style={{width:`${result.split[2]}%`,background:"#F59E0B"}}>F {result.split[2]}%</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ResultCard label="Protein" value={`${result.protein}g`} sub={`${result.protein*4} cal · ${result.split[0]}%`} highlight />
            <ResultCard label="Carbs" value={`${result.carbs}g`} sub={`${result.carbs*4} cal · ${result.split[1]}%`} />
            <ResultCard label="Fat" value={`${result.fat}g`} sub={`${result.fat*9} cal · ${result.split[2]}%`} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
