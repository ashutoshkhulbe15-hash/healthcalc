"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

const QS=[
  {q:"I feel emotionally drained from my work.",d:"exhaustion"},
  {q:"I feel used up at the end of the workday.",d:"exhaustion"},
  {q:"I feel tired when I get up and have to face another day on the job.",d:"exhaustion"},
  {q:"Working all day is really a strain for me.",d:"exhaustion"},
  {q:"I feel burned out from my work.",d:"exhaustion"},
  {q:"I have become less interested in my work since I started this job.",d:"cynicism"},
  {q:"I have become less enthusiastic about my work.",d:"cynicism"},
  {q:"I doubt the significance of my work.",d:"cynicism"},
  {q:"I just want to do my job and not be bothered.",d:"cynicism"},
  {q:"I feel confident that I am effective at getting things done.",d:"efficacy"},
  {q:"I feel I am making an effective contribution.",d:"efficacy"},
  {q:"In my opinion, I am good at my job.",d:"efficacy"},
];
const OPTS=["Never","Rarely","Sometimes","Often","Always"];

export function BurnoutCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(12).fill(null));
  const[result,setResult]=useState<{exhaust:number;cynicism:number;efficacy:number;total:number;level:string;status:"good"|"warning"|"danger"}|null>(null);

  const calculate=()=>{
    if(answers.some(a=>a===null))return;
    let exhaust=0,cynicism=0,efficacy=0;
    answers.forEach((a,i)=>{
      const v=a as number;
      if(QS[i].d==="exhaustion")exhaust+=v;
      else if(QS[i].d==="cynicism")cynicism+=v;
      else efficacy+=(4-v); // reversed
    });
    const total=exhaust+cynicism+efficacy;
    let level:string,status:"good"|"warning"|"danger";
    if(total<=12){level="Low burnout risk";status="good";}
    else if(total<=24){level="Moderate burnout risk";status="warning";}
    else{level="High burnout risk";status="danger";}
    setResult({exhaust,cynicism,efficacy,total,level,status});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-6">Rate how often you experience each statement:</p>
      <div className="space-y-4 mb-6">
        {QS.map((q,i)=>(
          <div key={i} className="p-4 bg-slate-50 rounded-xl">
            <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. {q.q}</div>
            <div className="flex gap-2 flex-wrap">
              {OPTS.map((o,j)=>(
                <button key={j} onClick={()=>{const a=[...answers];a[i]=j;setAnswers(a);}}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${answers[i]===j?"bg-brand-600 text-white":"bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={calculate} className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">
        Get My Results
      </button>
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.level} />
      <div className="grid grid-cols-3 gap-4 mb-5">
        <ResultCard label="Exhaustion" value={`${result.exhaust}/20`} sub="Emotional fatigue" />
        <ResultCard label="Cynicism" value={`${result.cynicism}/16`} sub="Detachment" />
        <ResultCard label="Inefficacy" value={`${result.efficacy}/12`} sub="Reduced accomplishment" />
      </div>
      <ResultCard label="Total Score" value={`${result.total}/48`} sub={result.level} highlight />
    </ResultsShell>}</>
  );
}
