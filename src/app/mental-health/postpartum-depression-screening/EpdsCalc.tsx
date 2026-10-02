"use client";
import { epdsScore } from "@/lib/health-math";
import { useState, useEffect } from "react";
import { CalcShell, ResultsShell, StatusBadge, CalcButton, CalcError } from "@/components/CalcUI";

const QS=[
  {q:"I have been able to laugh and see the funny side of things",opts:["As much as I always could","Not quite so much now","Definitely not so much now","Not at all"]},
  {q:"I have looked forward with enjoyment to things",opts:["As much as I ever did","Rather less than I used to","Definitely less than I used to","Hardly at all"]},
  {q:"I have blamed myself unnecessarily when things went wrong",opts:["No, never","Not very often","Yes, some of the time","Yes, most of the time"],},
  {q:"I have been anxious or worried for no good reason",opts:["No, not at all","Hardly ever","Yes, sometimes","Yes, very often"],},
  {q:"I have felt scared or panicky for no very good reason",opts:["No, not at all","No, not much","Yes, sometimes","Yes, quite a lot"],},
  {q:"Things have been getting on top of me",opts:["No, I have been coping as well as ever","No, most of the time I have coped quite well","Yes, sometimes I haven't been coping as well as usual","Yes, most of the time I have not been able to cope at all"],},
  {q:"I have been so unhappy that I have had difficulty sleeping",opts:["No, not at all","Not very often","Yes, sometimes","Yes, most of the time"],},
  {q:"I have felt sad or miserable",opts:["No, not at all","Not very often","Yes, quite often","Yes, most of the time"],},
  {q:"I have been so unhappy that I have been crying",opts:["No, never","Only occasionally","Yes, quite often","Yes, most of the time"],},
  {q:"The thought of harming myself has occurred to me",opts:["Never","Hardly ever","Sometimes","Yes, quite often"],},
];

export function EpdsCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(10).fill(null));
  const[result,setResult]=useState<{score:number;level:string;status:"good"|"warning"|"danger"|"info";selfHarm:boolean}|null>(null);

  const[error,setError]=useState("");
  useEffect(()=>{setResult(null);},[answers]);
  const calculate=()=>{
    setError("");
    if(answers.some(a=>a===null)){setError("Please answer all ten questions.");return;}
    const {score,selfHarm}=epdsScore(answers as number[]);
    let level:string,status:"good"|"warning"|"danger"|"info";
    if(selfHarm){level="Please seek prompt support for thoughts of self-harm";status="danger";}
    else if(score>=13){level="Follow-up with a healthcare professional recommended";status="warning";}
    else{level="Below the COPE follow-up threshold; concerns still deserve support";status="info";}
    setResult({score,level,status,selfHarm});
  };

  return(
    <><CalcShell>
      {answers[9]!==null && answers[9]!>0 && <div role="alert" className="p-4 bg-red-50 text-red-800 mb-4">Thoughts of self-harm deserve prompt support. Contact a healthcare professional now; use local emergency services if you cannot stay safe. A low total does not remove this concern.</div>}
      <p className="text-sm text-slate-500 mb-6">In the past 7 days:</p>
      <div className="space-y-4 mb-6">
        {QS.map((q,i)=>(
          <div role="group" aria-label={`${i+1}. ${q.q}`} key={i} className={`p-4 rounded-xl ${i===9?"bg-rose-50 border border-rose-200":"bg-slate-50"}`}>
            <div className="text-sm font-medium text-slate-700 mb-3">{i+1}. {q.q}</div>
            <div className="flex flex-col gap-1.5">
              {q.opts.map((o,j)=>(
                <button type="button" aria-pressed={answers[i]===j} key={j} onClick={()=>{const a=[...answers];a[i]=j;setAnswers(a);}}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all ${answers[i]===j?"bg-brand-600 text-white":"bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
                  {o}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <CalcButton onClick={calculate} label="Get My Score"/><CalcError message={error}/>
    </CalcShell>
    {result&&<><ResultsShell>
      <StatusBadge status={result.status} text={result.level} />
      {result.selfHarm&&(
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl mb-5 text-sm text-red-800">
          <strong>Seek support now:</strong> Tell a healthcare professional or trusted person about these thoughts. If you might act on them or cannot stay safe, contact local emergency services or go to an emergency department. Do not wait for this total score. In the US, call or text 988; elsewhere use your local crisis service.
        </div>
      )}
      <div className="text-center mb-6">
        <div className="text-5xl font-extrabold text-brand-600">{result.score}</div>
        <div className="text-sm text-slate-400 mt-1">out of 30 (EPDS)</div>
      </div>
      <p className="text-sm text-slate-600">COPE uses 13 or more as a flag for clinical follow-up. A lower score does not rule out depression or anxiety. Any positive response to question 10 needs prompt safety assessment, regardless of the total.</p>
      <a className="text-brand-700 underline" href="https://www.cope.org.au/health-professionals/screening-and-assessment-tools/using-the-epds-as-a-screening-tool">Scoring and follow-up guidance (COPE)</a>
    </ResultsShell>
        <p className="text-xs text-slate-400 mt-3 italic">The EPDS is a validated screening instrument, not a diagnostic tool. Scores indicate possible symptom levels per published criteria. Only a qualified healthcare provider can diagnose postpartum depression.</p></>}
  </>
  );
}
