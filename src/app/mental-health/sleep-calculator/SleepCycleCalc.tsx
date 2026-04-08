"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

const RECS:Record<string,{min:number;max:number;label:string}>={
  "child":    {min:9,max:11,label:"Children (6-13)"},
  "teen":     {min:8,max:10,label:"Teens (14-17)"},
  "adult":    {min:7,max:9, label:"Adults (18-64)"},
  "senior":   {min:7,max:8, label:"Older Adults (65+)"},
};

export function SleepCycleCalc(){
  const[wakeTime,setWakeTime]=useState("07:00");const[ageGroup,setAgeGroup]=useState("adult");
  const[result,setResult]=useState<{bedtimes:string[];ideal:string;cycles:number;rec:{min:number;max:number}}|null>(null);

  const calculate=()=>{
    const[h,m]=wakeTime.split(":").map(Number);
    const wakeMin=h*60+m;
    const rec=RECS[ageGroup];
    const bedtimes:string[]=[];
    for(let cycles=6;cycles>=3;cycles--){
      const sleepMin=cycles*90+15; // 15 min to fall asleep
      let bedMin=wakeMin-sleepMin;
      if(bedMin<0)bedMin+=1440;
      const bh=Math.floor(bedMin/60)%24;
      const bm=bedMin%60;
      bedtimes.push(`${String(bh).padStart(2,"0")}:${String(bm).padStart(2,"0")}`);
    }
    const idealCycles=Math.round(rec.min/1.5);
    const idealSleep=idealCycles*90+15;
    let idealBed=wakeMin-idealSleep;
    if(idealBed<0)idealBed+=1440;
    const ih=Math.floor(idealBed/60)%24;
    const im=idealBed%60;
    setResult({bedtimes,ideal:`${String(ih).padStart(2,"0")}:${String(im).padStart(2,"0")}`,cycles:idealCycles,rec});
  };

  return(
    <><CalcShell>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <CalcInput label="I need to wake up at" value={wakeTime} onChange={setWakeTime} type="time" />
        <CalcSelect label="Age group" value={ageGroup} onChange={setAgeGroup} options={[
          {value:"child",label:"Child (6-13)"},{value:"teen",label:"Teen (14-17)"},
          {value:"adult",label:"Adult (18-64)"},{value:"senior",label:"Older Adult (65+)"},
        ]} />
      </div>
      <CalcButton onClick={calculate} label="Calculate Bedtimes" />
    </CalcShell>
    {result&&<ResultsShell>
      <div className="text-center mb-6">
        <div className="text-sm text-slate-400 mb-1">Recommended bedtime</div>
        <div className="text-4xl font-extrabold text-brand-600">{result.ideal}</div>
        <div className="text-sm text-slate-400 mt-1">{result.cycles} sleep cycles × 90 min + 15 min to fall asleep</div>
      </div>
      <div className="text-sm font-semibold text-slate-700 mb-3">All bedtime options (by sleep cycles)</div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
        {result.bedtimes.map((t,i)=>{
          const cycles=6-i;const hrs=(cycles*90)/60;
          return <div key={i} className={`p-3.5 rounded-xl text-center ${cycles===result.cycles?"bg-brand-50 border border-brand-100":"bg-slate-50"}`}>
            <div className="text-2xl font-bold text-slate-900">{t}</div>
            <div className="text-xs text-slate-500">{cycles} cycles · {hrs}h sleep</div>
          </div>;
        })}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ResultCard label="Recommended sleep" value={`${result.rec.min}–${result.rec.max} hrs`} sub={RECS[ageGroup].label} />
        <ResultCard label="Sleep cycle" value="90 min" sub="Complete cycle avoids grogginess" />
      </div>
    </ResultsShell>}</>
  );
}
