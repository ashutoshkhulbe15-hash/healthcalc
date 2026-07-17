"use client";
import { useState } from "react";
import { CalcShell, ResultCard } from "@/components/CalcUI";

type Entry={start:number;end:number|null};

export function ContractionCalc(){
  const[entries,setEntries]=useState<Entry[]>([]);
  const[active,setActive]=useState(false);

  const startC=()=>{setEntries([...entries,{start:Date.now(),end:null}]);setActive(true);};
  const stopC=()=>{
    const updated=[...entries];
    updated[updated.length-1].end=Date.now();
    setEntries(updated);setActive(false);
  };
  const reset=()=>{setEntries([]);setActive(false);};

  const completed=entries.filter(e=>e.end!==null);
  const durations=completed.map(e=>((e.end as number)-e.start)/1000);
  const intervals=completed.slice(1).map((e,i)=>(e.start-(completed[i].end as number))/1000);
  const avgDur=durations.length?durations.reduce((a,b)=>a+b,0)/durations.length:0;
  const avgInt=intervals.length?intervals.reduce((a,b)=>a+b,0)/intervals.length:0;
  const fmtTime=(s:number)=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
  const is511=avgInt>0&&avgInt<=300&&avgDur>=60&&completed.length>=6;

  return(
    <><CalcShell>
      <div className="text-center">
        <div className="text-6xl font-extrabold text-brand-600 mb-2 font-mono">
          {active&&entries.length?"Timing...":"Ready"}
        </div>
        <div className="flex gap-3 justify-center mb-6">
          {!active?
            <button onClick={startC} className="px-8 py-3 rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white text-lg font-bold">
              {entries.length===0?"Start First Contraction":"Start Contraction"}
            </button>:
            <button onClick={stopC} className="px-8 py-3 rounded-xl bg-red-500 text-white text-lg font-bold">
              Contraction Ended
            </button>
          }
          {entries.length>0&&<button onClick={reset} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-500 font-medium">Reset</button>}
        </div>
        {completed.length>0&&(
          <div className="grid grid-cols-3 gap-4 mb-4">
            <ResultCard label="Avg duration" value={fmtTime(avgDur)} sub={avgDur>=60?"1+ min ✓":"Under 1 min"} />
            <ResultCard label="Avg interval" value={avgInt>0?fmtTime(avgInt):"—"} sub={avgInt>0&&avgInt<=300?"5 min or less ✓":"Waiting for data"} />
            <ResultCard label="Contractions" value={`${completed.length}`} sub={is511?"5-1-1 met! 🏥":"Keep timing"} highlight={is511} />
          </div>
        )}
        {is511&&<div className="p-4 bg-pink-50 border border-pink-200 rounded-xl text-sm text-pink-800 font-medium">
          🏥 Your contractions match the 5-1-1 pattern (5 min apart, 1 min long, for 1 hour). Consider calling your provider or heading to your hospital/birth center.
        </div>}
      </div>
      {completed.length>0&&(
        <div className="mt-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">History</div>
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {completed.map((e,i)=>(
              <div key={i} className="flex justify-between text-sm bg-slate-50 rounded-lg px-3 py-2">
                <span className="text-slate-500">#{i+1}</span>
                <span>Duration: {fmtTime(((e.end as number)-e.start)/1000)}</span>
                <span className="text-slate-400">{i>0?`Gap: ${fmtTime((e.start-(completed[i-1].end as number))/1000)}`:""}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </CalcShell></>
  );
}
