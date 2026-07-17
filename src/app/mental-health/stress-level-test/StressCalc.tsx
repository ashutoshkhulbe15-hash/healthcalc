"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

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
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger"}|null>(null);

  const setAnswer=(i:number,v:number)=>{const a=[...answers];a[i]=v;setAnswers(a);};
  const calculate=()=>{
    if(answers.some(a=>a===null))return;
    const score=answers.reduce((s,a,i)=>{
      const val=REVERSED.includes(i)?4-(a as number):(a as number);
      return (s as number)+val;
    },0) as number;
    let level:string,status:"good"|"warning"|"danger";
    if(score<=13){level="Low stress";status="good";}
    else if(score<=26){level="Moderate stress";status="warning";}
    else{level="High perceived stress";status="danger";}
    setResult({score,level,status});
  };

  return(
    <>
      <CalcShell>
        <p className="text-sm text-slate-500 mb-6">In the last month, how often have you...</p>
        <div className="space-y-5 mb-6">
          {QS.map((q,i)=>(
            <div key={i} className="p-4 bg-slate-50 rounded-xl">
              <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. ...{q}</div>
              <div className="flex gap-2 flex-wrap">
                {OPTS.map((o,j)=>(
                  <button key={j} onClick={()=>setAnswer(i,j)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${answers[i]===j?"bg-brand-600 text-white":"bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={calculate} className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">
          Get My Score
        </button>
      </CalcShell>
      {result&&(
        <ResultsShell>
          <StatusBadge status={result.status} text={result.level} />
          <div className="text-center mb-6">
            <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
            <div className="text-sm text-slate-400 mt-1">out of 40</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <ResultCard label="Low stress" value="0–13" sub={result.score<=13?"← You are here":""} />
            <ResultCard label="Moderate" value="14–26" sub={result.score>13&&result.score<=26?"← You are here":""} />
            <ResultCard label="High stress" value="27–40" sub={result.score>26?"← You are here":""} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
