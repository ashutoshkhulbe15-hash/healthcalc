"use client";
import { contractionMetrics } from "@/lib/health-math";
import { useState } from "react";
import { CalcShell, ResultCard } from "@/components/CalcUI";

type Entry={start:number;end:number|null};

export function ContractionCalc(){
  const[entries,setEntries]=useState<Entry[]>([]);
  const[active,setActive]=useState(false);

  const startC=()=>{const start=performance.now();setEntries(current=>[...current,{start,end:null}]);setActive(true);};
  const stopC=()=>{
    const end=performance.now();
    setEntries(current=>current.map((entry,index)=>index===current.length-1?{...entry,end}:entry));setActive(false);
  };
  const reset=()=>{setEntries([]);setActive(false);};

  const {completed,averageDuration:avgDur,averageInterval:avgInt}=contractionMetrics(entries);
  const fmtTime=(s:number)=>`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`;
  return(
    <><CalcShell>
      <p className="text-sm text-slate-600 mb-4">This timer records times; it cannot tell whether labor has begun. Follow your maternity team’s instructions. Do not wait for a timer result before contacting them with concerns.</p><div className="text-center">
        <div className="text-6xl font-extrabold text-brand-600 mb-2 font-mono">
          {active&&entries.length?"Timing...":"Ready"}
        </div>
        <div className="flex gap-3 justify-center mb-6">
          {!active?
            <button type="button" onClick={startC} className="px-8 py-3 rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white text-lg font-bold">
              {entries.length===0?"Start First Contraction":"Start Contraction"}
            </button>:
            <button type="button" onClick={stopC} className="px-8 py-3 rounded-xl bg-red-500 text-white text-lg font-bold">
              Contraction Ended
            </button>
          }
          {entries.length>0&&<button type="button" onClick={reset} className="px-6 py-3 rounded-xl border border-slate-200 text-slate-500 font-medium">Reset</button>}
        </div>
        {completed.length>0&&(
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            <ResultCard label="Average duration" value={fmtTime(avgDur)} sub="Recorded contractions" />
            <ResultCard label="Average start-to-start" value={avgInt>0?fmtTime(avgInt):"—"} sub="Between recorded starts" />
            <ResultCard label="Completed entries" value={`${completed.length}`} sub="Time records only" />
          </div>
        )}
      </div>
      {completed.length>0&&(
        <div className="mt-5">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">History</div>
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {completed.map((e,i)=>(
              <div key={i} className="flex justify-between text-sm bg-slate-50 rounded-lg px-3 py-2">
                <span className="text-slate-500">#{i+1}</span>
                <span>Duration: {fmtTime(((e.end as number)-e.start)/1000)}</span>
                <span className="text-slate-400">{i>0?`Start-to-start: ${fmtTime((e.start-completed[i-1].start)/1000)}`:""}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </CalcShell></>
  );
}
