"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, StatusBadge } from "@/components/CalcUI";

const QS=["How often do you have difficulty concentrating on what people say to you, even when they are speaking directly?","How often do you leave your seat in meetings or situations where you are expected to remain seated?","How often do you have difficulty unwinding and relaxing when you have time to yourself?","When you're in a conversation, how often do you find yourself finishing other people's sentences?","How often do you put things off until the last minute?","How often do you depend on others to keep your life in order and attend to details?"];
const OPTS=["Never","Rarely","Sometimes","Often","Very Often"];

export function AdhdCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(6).fill(null));
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger"|"info"}|null>(null);

  const calculate=()=>{
    if(answers.some(a=>a===null))return;
    const score=answers.reduce((s,a)=>(s as number)+(a as number),0) as number;
    let level:string,status:"good"|"warning"|"danger"|"info";
    if(score<=6){level="Low likelihood of ADHD";status="good";}
    else if(score<=13){level="Moderate — consider professional evaluation";status="warning";}
    else{level="High — professional evaluation recommended";status="danger";}
    setResult({score,level,status});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-1">ASRS v1.1 Part A Screener (WHO)</p>
      <p className="text-xs text-slate-400 mb-6">Over the last 6 months, how often have you experienced each of the following:</p>
      <div className="space-y-4 mb-6">
        {QS.map((q,i)=>(
          <div key={i} className="p-4 bg-slate-50 rounded-xl">
            <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. {q}</div>
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
      <button onClick={calculate} className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">Get My Score</button>
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.level} />
      <div className="text-center mb-5">
        <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
        <div className="text-sm text-slate-400 mt-1">out of 24 (Part A Screener)</div>
      </div>
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-800">
        This is a screening tool only. It does not diagnose ADHD. A diagnosis requires comprehensive evaluation by a qualified healthcare professional.
      </div>
    </ResultsShell>}</>
  );
}
