"use client";
import { useState, useEffect } from "react";
import { CalcShell, CalcError, CalcButton, ResultsShell, StatusBadge } from "@/components/CalcUI";

const QS=[
  "been upset because of something that happened unexpectedly?",
  "felt unable to control the important things in your life?",
  "felt nervous and stressed?",
  "felt confident about your ability to handle personal problems?",
  "felt that things were going your way?",
  "found that you could not cope with all the things you had to do?",
  "been able to control irritations in your life?",
  "felt that you were on top of things?",
  "been angered because of things that were outside your control?",
  "felt difficulties were piling up so high that you could not overcome them?",
];
const REVERSED=[3,4,6,7]; // 0-indexed
const OPTS=["Never","Almost Never","Sometimes","Fairly Often","Very Often"];

export function StressCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(10).fill(null));
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger"|"info"}|null>(null);

  const setAnswer=(i:number,v:number)=>{const a=[...answers];a[i]=v;setAnswers(a);};
  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[answers]);
  const calculate=()=>{
    setError("");
    if(answers.some(a=>a===null)){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const score=answers.reduce((s,a,i)=>{
      const val=REVERSED.includes(i)?4-(a as number):(a as number);
      return (s as number)+val;
    },0) as number;
    const level="Perceived stress score — no diagnostic cutoff",status="info" as const;
    setResult({score,level,status});
  };

  return(
    <>
      <CalcShell>
        <p className="text-sm text-slate-500 mb-6">In the last month, how often have you...</p>
        <div className="space-y-5 mb-6">
          {QS.map((q,i)=>(
            <div role="group" aria-label={`${i+1}. ${q}`} key={i} className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. ...{q}</div>
              <div className="flex gap-2 flex-wrap">
                {OPTS.map((o,j)=>(
                  <button type="button" aria-pressed={answers[i]===j} key={j} onClick={()=>setAnswer(i,j)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${answers[i]===j?"bg-brand-600 text-white":"bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <CalcButton onClick={calculate} label="Get My Score"/>
      <CalcError message={error}/></CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.status} text={result.level} />
          <div className="text-center mb-6">
            <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
            <div className="text-sm text-slate-400 mt-1">out of 40</div>
          </div>
          <p className="text-sm text-slate-600">Higher totals represent more perceived stress, but the PSS has no diagnostic cutoffs. A custom low/moderate/high band is not a clinical classification.</p>
          <a href="https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/scales/index.html" className="underline text-brand-700">Cohen laboratory: PSS instructions and limitations</a>
        </ResultsShell>
      )}
    </>
  );
}
