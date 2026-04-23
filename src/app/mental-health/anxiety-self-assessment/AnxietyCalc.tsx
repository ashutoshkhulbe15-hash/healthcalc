"use client";
import { useState } from "react";
import { CalcShell, ResultsShell, ResultCard, StatusBadge } from "@/components/CalcUI";

const QS=["Feeling nervous, anxious, or on edge","Not being able to stop or control worrying","Worrying too much about different things","Trouble relaxing","Being so restless that it's hard to sit still","Becoming easily annoyed or irritable","Feeling afraid, as if something awful might happen"];
const OPTS=["Not at all","Several days","More than half the days","Nearly every day"];

export function AnxietyCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(7).fill(null));
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger"|"info"}|null>(null);

  const calculate=()=>{
    if(answers.some(a=>a===null))return;
    const score=answers.reduce((s,a)=>(s as number)+(a as number),0) as number;
    let level:string,status:"good"|"warning"|"danger"|"info";
    if(score<=4){level="Minimal anxiety";status="good";}
    else if(score<=9){level="Mild anxiety";status="info";}
    else if(score<=14){level="Moderate anxiety";status="warning";}
    else{level="Severe anxiety";status="danger";}
    setResult({score,level,status});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-6">Over the last 2 weeks, how often have you been bothered by:</p>
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
      <button onClick={calculate} className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">
        Get My Score
      </button>
    </CalcShell>
    {result&&<ResultsShell>
      <StatusBadge status={result.status} text={result.level} />
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
        <div className="text-sm text-slate-400 mt-1">out of 21 (GAD-7)</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Minimal" value="0–4" sub={result.score<=4?"← You":""} />
        <ResultCard label="Mild" value="5–9" sub={result.score>4&&result.score<=9?"← You":""} />
        <ResultCard label="Moderate" value="10–14" sub={result.score>9&&result.score<=14?"← You":""} />
        <ResultCard label="Severe" value="15–21" sub={result.score>14?"← You":""} />
      </div>
    </ResultsShell>}</>
  );
}
