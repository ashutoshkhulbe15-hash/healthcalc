"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

const SYMPTOMS=[{q:"Persistent fatigue or weakness",w:3},{q:"Pale skin, nail beds, or gums",w:3},{q:"Shortness of breath during normal activity",w:2},{q:"Dizziness or lightheadedness",w:2},{q:"Cold hands and feet",w:1},{q:"Brittle or spoon-shaped nails",w:2},{q:"Cravings for ice, dirt, or starch (pica)",w:3},{q:"Rapid or irregular heartbeat",w:2},{q:"Headaches",w:1},{q:"Heavy menstrual periods",w:2},{q:"Recent significant blood loss",w:3},{q:"Vegetarian or vegan diet",w:1}];

export function AnemiaCalc(){
  const[checked,setChecked]=useState<boolean[]>(Array(SYMPTOMS.length).fill(false));
  const[result,setResult]=useState<{score:number;count:number;level:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const score=checked.reduce((s,c,i)=>s+(c?SYMPTOMS[i].w:0),0);
    const count=checked.filter(Boolean).length;
    let level:string,status:"good"|"warning"|"danger";
    if(score<=3){level="Low risk — few or no anemia indicators";status="good";}
    else if(score<=8){level="Moderate risk — consider blood work";status="warning";}
    else{level="Higher risk — blood test recommended";status="danger";}
    setResult({score,count,level,status});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-6">Check any symptoms you&apos;re currently experiencing:</p>
      <div className="space-y-2.5 mb-6">
        {SYMPTOMS.map((s,i)=>(
          <label key={i} className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all ${checked[i]?"bg-brand-50 border border-brand-100":"bg-slate-50 border border-transparent hover:bg-slate-100"}`}>
            <input type="checkbox" checked={checked[i]} onChange={()=>{const c=[...checked];c[i]=!c[i];setChecked(c);}}
              className="w-[18px] h-[18px] accent-brand-600 rounded" />
            <span className="text-sm text-slate-700">{s.q}</span>
          </label>
        ))}
      </div>
      <button onClick={calculate} className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">Check My Risk</button>
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.level} />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <ResultCard label="Risk score" value={`${result.score}`} sub="Weighted score" highlight />
        <ResultCard label="Symptoms checked" value={`${result.count} of ${SYMPTOMS.length}`} />
      </div>
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        This is a symptom-based screening tool, not a blood test. Anemia can only be confirmed through a Complete Blood Count (CBC). If you scored moderate or higher, consider scheduling blood work with your healthcare provider.
      </div>
    </ResultsShell>}</>
  );
}
