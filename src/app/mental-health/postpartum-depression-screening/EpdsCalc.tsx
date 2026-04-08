"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

const QS=[
  {q:"I have been able to laugh and see the funny side of things",opts:["As much as I always could","Not quite so much now","Definitely not so much now","Not at all"]},
  {q:"I have looked forward with enjoyment to things",opts:["As much as I ever did","Rather less than I used to","Definitely less than I used to","Hardly at all"]},
  {q:"I have blamed myself unnecessarily when things went wrong",opts:["No, never","Not very often","Yes, some of the time","Yes, most of the time"],rev:true},
  {q:"I have been anxious or worried for no good reason",opts:["No, not at all","Hardly ever","Yes, sometimes","Yes, very often"],rev:true},
  {q:"I have felt scared or panicky for no very good reason",opts:["No, not at all","No, not much","Yes, sometimes","Yes, quite a lot"],rev:true},
  {q:"Things have been getting on top of me",opts:["No, I have been coping as well as ever","No, most of the time I have coped quite well","Yes, sometimes I haven't been coping as well as usual","Yes, most of the time I have not been able to cope at all"],rev:true},
  {q:"I have been so unhappy that I have had difficulty sleeping",opts:["No, not at all","Not very often","Yes, sometimes","Yes, most of the time"],rev:true},
  {q:"I have felt sad or miserable",opts:["No, not at all","Not very often","Yes, quite often","Yes, most of the time"],rev:true},
  {q:"I have been so unhappy that I have been crying",opts:["No, never","Only occasionally","Yes, quite often","Yes, most of the time"],rev:true},
  {q:"The thought of harming myself has occurred to me",opts:["Never","Hardly ever","Sometimes","Yes, quite often"],rev:true},
];

export function EpdsCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(10).fill(null));
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger";selfHarm:boolean}|null>(null);

  const calculate=()=>{
    if(answers.some(a=>a===null))return;
    const score=answers.reduce((s,a,i)=>{
      const v=QS[i].rev?(a as number):(3-(a as number));
      return(s as number)+v;
    },0) as number;
    const selfHarm=(answers[9]as number)>0;
    let level:string,status:"good"|"warning"|"danger";
    if(score<=8){level="Depression not likely";status="good";}
    else if(score<=12){level="Possible depression — monitor";status="warning";}
    else{level="Probable depression — seek support";status="danger";}
    setResult({score,level,status,selfHarm});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-6">In the past 7 days:</p>
      <div className="space-y-4 mb-6">
        {QS.map((q,i)=>(
          <div key={i} className={`p-4 rounded-xl ${i===9?"bg-rose-50 border border-rose-200":"bg-slate-50"}`}>
            <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. {q.q}</div>
            <div className="flex flex-col gap-1.5">
              {q.opts.map((o,j)=>(
                <button key={j} onClick={()=>{const a=[...answers];a[i]=j;setAnswers(a);}}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${answers[i]===j?"bg-brand-600 text-white":"bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
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
      {result.selfHarm&&(
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-5 text-sm text-red-800">
          <strong>Important:</strong> Your response to question 10 indicates thoughts of self-harm. Please reach out for support:
          <div className="mt-2 font-semibold">Postpartum Support International: 1-800-944-4773</div>
          <div className="font-semibold">Crisis Text Line: Text HOME to 741741</div>
        </div>
      )}
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
        <div className="text-sm text-slate-400 mt-1">out of 30 (EPDS)</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="0–8" value="Not likely" sub={result.score<=8?"← You":""} />
        <ResultCard label="9–11" value="Possible" sub={result.score>8&&result.score<=11?"← You":""} />
        <ResultCard label="12–13" value="Fairly high" sub={result.score>11&&result.score<=13?"← You":""} />
        <ResultCard label="≥14" value="Probable" sub={result.score>13?"← You":""} />
      </div>
    </ResultsShell>}</>
  );
}
