"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

export function SleepCalc(){
  const[bedtime,setBedtime]=useState("23:00");const[waketime,setWaketime]=useState("07:00");
  const[latency,setLatency]=useState("15");const[disturbances,setDisturbances]=useState("1");
  const[quality,setQuality]=useState("2");const[medication,setMedication]=useState("0");
  const[daytime,setDaytime]=useState("1");
  const[result,setResult]=useState<{score:number;duration:number;efficiency:number;level:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    const[bh,bm]=bedtime.split(":").map(Number);const[wh,wm]=waketime.split(":").map(Number);
    const bedMin=bh*60+bm,wakeMin=wh*60+wm;
    const timeInBed=(wakeMin-bedMin)/60;
    const lat=parseInt(latency)||0;
    const sleepDur=timeInBed-(lat/60);
    const efficiency=Math.round((sleepDur/timeInBed)*100);

    const s1=parseInt(quality);
    const s2=lat<=15?0:lat<=30?1:lat<=60?2:3;
    const s3=sleepDur>7?0:sleepDur>6?1:sleepDur>5?2:3;
    const s4=efficiency>=85?0:efficiency>=75?1:efficiency>=65?2:3;
    const s5=parseInt(disturbances);
    const s6=parseInt(medication);
    const s7=parseInt(daytime);
    const score=s1+s2+s3+s4+s5+s6+s7;

    let level:string,status:"good"|"warning"|"danger";
    if(score<=5){level="Good sleep quality";status="good";}
    else if(score<=10){level="Moderate sleep issues";status="warning";}
    else{level="Poor sleep quality";status="danger";}
    setResult({score,duration:Math.round(sleepDur*10)/10,efficiency,level,status});
  };

  return(
    <>
      <CalcShell>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="Bedtime" value={bedtime} onChange={setBedtime} type="time" />
          <CalcInput label="Wake time" value={waketime} onChange={setWaketime} type="time" />
          <CalcInput label="Minutes to fall asleep" value={latency} onChange={setLatency} placeholder="15" />
          <CalcSelect label="Subjective sleep quality" value={quality} onChange={setQuality}
            options={[{value:"0",label:"Very good"},{value:"1",label:"Fairly good"},{value:"2",label:"Fairly bad"},{value:"3",label:"Very bad"}]} />
          <CalcSelect label="Sleep disturbances" value={disturbances} onChange={setDisturbances}
            options={[{value:"0",label:"None"},{value:"1",label:"Less than once/week"},{value:"2",label:"Once or twice/week"},{value:"3",label:"Three+ times/week"}]} />
          <CalcSelect label="Sleep medication use" value={medication} onChange={setMedication}
            options={[{value:"0",label:"None"},{value:"1",label:"Less than once/week"},{value:"2",label:"Once or twice/week"},{value:"3",label:"Three+ times/week"}]} />
          <div className="sm:col-span-2">
            <CalcSelect label="Daytime dysfunction" value={daytime} onChange={setDaytime}
              options={[{value:"0",label:"No problem"},{value:"1",label:"Slight problem"},{value:"2",label:"Somewhat of a problem"},{value:"3",label:"Very big problem"}]} />
          </div>
        </div>
        <CalcButton onClick={calculate} label="Assess My Sleep" />
      </CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.status} text={result.level} />
          <div className="text-center mb-6">
            <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
            <div className="text-sm text-slate-400 mt-1">PSQI score (0–21, lower is better)</div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="PSQI Score" value={`${result.score}/21`} sub={result.score<=5?"Good":"Needs improvement"} highlight />
            <ResultCard label="Sleep duration" value={`${result.duration} hrs`} sub={result.duration>=7?"Adequate":"Below recommended"} />
            <ResultCard label="Sleep efficiency" value={`${result.efficiency}%`} sub={result.efficiency>=85?"Good":"Below 85%"} />
            <ResultCard label="Threshold" value="≤ 5" sub="Good sleep quality" />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
