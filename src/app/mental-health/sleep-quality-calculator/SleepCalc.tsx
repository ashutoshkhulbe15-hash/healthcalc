"use client";
import { useState, useEffect } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard, CalcError } from "@/components/CalcUI";
import { sleepEstimate } from "@/lib/health-math";
export function SleepCalc(){
 const [bedtime,setBedtime]=useState("23:00"),[waketime,setWaketime]=useState("07:00"),[latency,setLatency]=useState("15"),[awake,setAwake]=useState("0");
 const [result,setResult]=useState<ReturnType<typeof sleepEstimate>|null>(null),[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[bedtime,waketime,latency,awake]);
 const calculate=()=>{try{setError("");setResult(sleepEstimate(bedtime,waketime,Number(latency),Number(awake)));}catch(e){setResult(null);setError((e as Error).message);}};
 return <><CalcShell><p className="text-sm text-slate-600 mb-5">Estimate sleep for one sleep period under 24 hours. This is a diary calculation, not the Pittsburgh Sleep Quality Index (PSQI) or a diagnostic screen.</p><div className="grid sm:grid-cols-2 gap-5 mb-5"><CalcInput label="Bedtime" value={bedtime} onChange={setBedtime} type="time"/><CalcInput label="Wake time" value={waketime} onChange={setWaketime} type="time"/><CalcInput label="Minutes to fall asleep" value={latency} onChange={setLatency} min={0}/><CalcInput label="Minutes awake after falling asleep" value={awake} onChange={setAwake} min={0}/></div><CalcButton onClick={calculate} label="Estimate Sleep"/><CalcError message={error}/></CalcShell>
 {result&&<ResultsShell><div className="grid sm:grid-cols-3 gap-4"><ResultCard label="Time in bed" value={`${result.timeInBed.toFixed(2)} hours`}/><ResultCard label="Estimated sleep" value={`${result.duration.toFixed(2)} hours`} highlight/><ResultCard label="Estimated efficiency" value={`${result.efficiency.toFixed(1)}%`}/></div><p className="text-sm mt-4 text-slate-600">Efficiency = estimated sleep ÷ time in bed. Accuracy depends on your recall; these numbers do not determine sleep quality or rule out a sleep disorder.</p></ResultsShell>}</>;
}
