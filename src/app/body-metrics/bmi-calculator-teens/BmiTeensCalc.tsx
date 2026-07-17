"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge, UnitToggle } from "@/components/CalcUI";

// Simplified CDC percentile approximation using BMI z-score ranges by age
function getTeenPercentile(bmi:number,age:number,gender:string):{percentile:number;category:string;status:"good"|"warning"|"danger"}{
  // Approximate median BMI by age (CDC reference, simplified)
  const medians:Record<string,Record<number,number>>={
    male:{2:16.5,3:16.0,4:15.7,5:15.5,6:15.4,7:15.5,8:15.8,9:16.2,10:16.6,11:17.2,12:17.8,13:18.5,14:19.2,15:19.9,16:20.5,17:21.1,18:21.7,19:22.2},
    female:{2:16.3,3:15.8,4:15.4,5:15.2,6:15.2,7:15.4,8:15.8,9:16.3,10:16.9,11:17.5,12:18.2,13:18.9,14:19.5,15:20.0,16:20.4,17:20.7,18:21.0,19:21.3},
  };
  const m=medians[gender]?.[Math.round(age)]||18;
  const ratio=bmi/m;
  let pct:number;
  if(ratio<0.85)pct=Math.round(ratio*10);
  else if(ratio<1)pct=Math.round(15+((ratio-0.85)/0.15)*35);
  else if(ratio<1.15)pct=Math.round(50+((ratio-1)/0.15)*35);
  else pct=Math.min(99,Math.round(85+((ratio-1.15)/0.25)*14));

  let category:string,status:"good"|"warning"|"danger";
  if(pct<5){category="Underweight";status="warning";}
  else if(pct<85){category="Healthy weight";status="good";}
  else if(pct<95){category="Overweight";status="warning";}
  else{category="Obese";status="danger";}
  return{percentile:pct,category,status};
}

export function BmiTeensCalc(){
  const[unit,setUnit]=useState("metric");const[age,setAge]=useState("");const[gender,setGender]=useState("male");
  const[weight,setWeight]=useState("");const[height,setHeight]=useState("");
  const[result,setResult]=useState<{bmi:number;percentile:number;category:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const a=parseFloat(age),w=parseFloat(weight),h=parseFloat(height);
    if(!a||!w||!h||a<2||a>19)return;
    const wkg=unit==="metric"?w:w*0.4536,hm=unit==="metric"?h/100:h*0.0254;
    const bmi=wkg/(hm*hm);
    const{percentile,category,status}=getTeenPercentile(bmi,a,gender);
    setResult({bmi:Math.round(bmi*10)/10,percentile,category,status});
  };

  return(
    <>
      <CalcShell>
        <UnitToggle value={unit} onChange={setUnit} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Age (2-19 years)" value={age} onChange={setAge} placeholder="e.g. 14" min={2} max={19} />
          <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
          <CalcInput label={`Weight (${unit==="metric"?"kg":"lbs"})`} value={weight} onChange={setWeight} />
          <CalcInput label={`Height (${unit==="metric"?"cm":"inches"})`} value={height} onChange={setHeight} />
        </div>
        <CalcButton onClick={calculate} label="Calculate Teen BMI" />
      </CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.status} text={`${result.percentile}th percentile — ${result.category}`} />
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">BMI-for-age Percentile</div>
            <div className="relative h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="absolute left-[5%] w-[80%] h-full bg-green-100 rounded-full" />
              <div className="absolute left-[85%] w-[10%] h-full bg-amber-100 rounded-full" />
              <div className="absolute -top-0.5 w-5 h-5 rounded-full bg-brand-600 border-[3px] border-white shadow -translate-x-1/2"
                style={{left:`${result.percentile}%`}} />
            </div>
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>Underweight (&lt;5th)</span><span>Healthy (5th–85th)</span><span>Overweight</span><span>Obese</span>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="BMI" value={`${result.bmi}`} highlight />
            <ResultCard label="Percentile" value={`${result.percentile}th`} sub="CDC growth chart" />
            <ResultCard label="Category" value={result.category} />
            <ResultCard label="Chart used" value="CDC BMI-for-age" sub="Ages 2-19" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
