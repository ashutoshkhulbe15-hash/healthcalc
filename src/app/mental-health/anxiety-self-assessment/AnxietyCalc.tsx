"use client";
import { useState, useEffect } from "react";
import { CalcShell, CalcError, CalcButton, ResultsShell, ResultCard } from "@/components/CalcUI";

const QS=["Feeling nervous, anxious, or on edge","Not being able to stop or control worrying","Worrying too much about different things","Trouble relaxing","Being so restless that it's hard to sit still","Becoming easily annoyed or irritable","Feeling afraid, as if something awful might happen"];
const OPTS=["Not at all","Several days","More than half the days","Nearly every day"];

export function AnxietyCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(7).fill(null));
  const[result,setResult]=useState<{score:number;level:string}|null>(null);

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[answers]);
  const calculate=()=>{
    setError("");
    if(answers.some(a=>a===null)){setResult(null);setError("Check all required inputs and the allowed ranges before calculating.");return;}
    const score=answers.reduce((s,a)=>(s as number)+(a as number),0) as number;
    let level:string;
    if(score<=4) level="Minimal score band";
    else if(score<=9) level="Mild score band";
    else if(score<=14) level="Moderate score band";
    else level="Severe score band";
    setResult({score,level});
  };

  return(
    <><CalcShell>
      <p className="text-sm text-slate-500 mb-6">Over the last 2 weeks, how often have you been bothered by:</p>
      <div className="space-y-4 mb-6">
        {QS.map((q,i)=>(
          <div role="group" aria-label={`${i+1}. ${q}`} key={i} className="p-4 bg-slate-50 rounded-xl">
            <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. {q}</div>
            <div className="flex gap-2 flex-wrap">
              {OPTS.map((o,j)=>(
                <button type="button" aria-pressed={answers[i]===j} key={j} onClick={()=>{const a=[...answers];a[i]=j;setAnswers(a);}}
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
    {result&&<><ResultsShell>
      <p className="text-center text-sm font-semibold text-slate-700 mb-3">GAD-7: {result.level}</p>
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
        <div className="text-sm text-slate-400 mt-1">out of 21 (GAD-7)</div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <ResultCard label="Minimal band" value="0–4" />
        <ResultCard label="Mild band" value="5–9" />
        <ResultCard label="Moderate band" value="10–14" />
        <ResultCard label="Severe band" value="15–21" />
      </div>
    </ResultsShell>
    <p className="text-xs text-slate-500 mt-3">The score and band are not a diagnosis. <a href="https://www.nih.gov/node/19876" className="underline">NIH instrument record</a> · <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410326" className="underline">Original validation study and its sample</a></p>
    </>}</>
  );
}
