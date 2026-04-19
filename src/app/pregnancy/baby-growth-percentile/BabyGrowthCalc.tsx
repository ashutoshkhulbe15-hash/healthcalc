"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

// Simplified WHO medians for weight (kg) by month, male/female
const WHO_WEIGHT:Record<string,Record<number,[number,number,number]>>={
  male:{0:[2.5,3.3,4.2],3:[5.0,6.4,7.8],6:[6.4,7.9,9.5],9:[7.4,8.9,10.5],12:[7.8,9.6,11.5],18:[8.8,10.9,13.0],24:[9.7,12.2,14.7],36:[11.3,14.3,17.7],48:[12.7,16.3,20.9],60:[14.1,18.3,23.8]},
  female:{0:[2.4,3.2,4.0],3:[4.6,5.8,7.1],6:[5.8,7.3,8.8],9:[6.7,8.2,9.8],12:[7.0,8.9,10.8],18:[8.0,10.2,12.4],24:[8.9,11.5,14.1],36:[10.6,13.9,17.2],48:[12.0,16.0,20.5],60:[13.5,18.0,23.3]},
};

function getClosestMonth(months:number):number{
  const keys=[0,3,6,9,12,18,24,36,48,60];
  return keys.reduce((prev,curr)=>Math.abs(curr-months)<Math.abs(prev-months)?curr:prev);
}

export function BabyGrowthCalc(){
  const[gender,setGender]=useState("male");const[ageMonths,setAgeMonths]=useState("");const[weight,setWeight]=useState("");
  const[result,setResult]=useState<{percentile:number;category:string;status:"good"|"warning"|"danger";p3:number;p50:number;p97:number}|null>(null);

  const calculate=()=>{
    const m=parseInt(ageMonths),w=parseFloat(weight);if(m===undefined||!w||m<0||m>60)return;
    const closest=getClosestMonth(m);
    const data=WHO_WEIGHT[gender][closest];if(!data)return;
    const[p3,p50,p97]=data;
    let pct:number;
    if(w<=p3)pct=Math.max(1,Math.round((w/p3)*3));
    else if(w<=p50)pct=3+Math.round(((w-p3)/(p50-p3))*47);
    else if(w<=p97)pct=50+Math.round(((w-p50)/(p97-p50))*47);
    else pct=Math.min(99,97+Math.round(((w-p97)/(p97*0.1))*2));

    let cat:string,status:"good"|"warning"|"danger";
    if(pct<3){cat="Below normal range";status="danger";}
    else if(pct<15){cat="Lower end of normal";status="warning";}
    else if(pct<=85){cat="Normal range";status="good";}
    else if(pct<=97){cat="Upper end of normal";status="warning";}
    else{cat="Above normal range";status="danger";}
    setResult({percentile:pct,category:cat,status,p3,p50,p97});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5">
        <CalcSelect label="Gender" value={gender} onChange={setGender} options={[{value:"male",label:"Male"},{value:"female",label:"Female"}]} />
        <CalcInput label="Age (months, 0-60)" value={ageMonths} onChange={setAgeMonths} placeholder="e.g. 12" min={0} max={60} />
        <CalcInput label="Weight (kg)" value={weight} onChange={setWeight} placeholder="e.g. 9.5" step={0.1} />
      </div>
      <CalcButton onClick={calculate} label="Check Growth Percentile" />
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={`${result.percentile}th percentile — ${result.category}`} />
      <div className="mb-6 p-4 bg-slate-50 rounded-xl">
        <div className="relative h-4 bg-slate-200 rounded-full overflow-hidden">
          <div className="absolute left-[3%] w-[94%] h-full bg-green-100 rounded-full" />
          <div className="absolute -top-0.5 w-5 h-5 rounded-full bg-brand-600 border-[3px] border-white shadow -translate-x-1/2"
            style={{left:`${result.percentile}%`}} />
        </div>
        <div className="flex justify-between text-[10px] text-slate-400 mt-1">
          <span>3rd</span><span>50th</span><span>97th</span>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Percentile" value={`${result.percentile}th`} highlight />
        <ResultCard label="3rd percentile" value={`${result.p3} kg`} />
        <ResultCard label="50th (median)" value={`${result.p50} kg`} />
        <ResultCard label="97th percentile" value={`${result.p97} kg`} />
      </div>
    </ResultsShell>}</>
  );
}
