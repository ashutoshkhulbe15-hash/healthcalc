"use client";
import { useState, useEffect } from "react";
import { CalcShell, CalcError, CalcButton, ResultsShell, ResultCard } from "@/components/CalcUI";

const QS=["Feeling nervous, anxious, or on edge","Not being able to stop or control worrying","Worrying too much about different things","Trouble relaxing","Being so restless that it is hard to sit still","Becoming easily annoyed or irritable","Feeling afraid as if something awful might happen"];
const OPTS=["Not at all","Several days","More than half the days","Nearly every day"];

export function AnxietyCalc(){
  const[answers,setAnswers]=useState<(number|null)[]>(Array(7).fill(null));
  const[result,setResult]=useState<{score:number;level:string}|null>(null);
  const[difficulty,setDifficulty]=useState<string|null>(null);
  const DIFFICULTY=["Not difficult at all","Somewhat difficult","Very difficult","Extremely difficult"];

  const [error,setError]=useState("");
  useEffect(()=>{setResult(null);},[answers,difficulty]);
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
      <p className="text-xs text-slate-500 mb-4"><a href="https://portal.niehs.nih.gov/dr2/unmanaged/files/gad_7_508.pdf" className="underline">NIH-hosted GAD-7 form</a> — independent website implementation. Developed by Robert L. Spitzer, Janet B. W. Williams, Kurt Kroenke and colleagues. <a className="underline" href="https://manual.jointcommission.org/pub/BHCInstruments/RomInstr00054/instructions_PHQ.pdf">Original instruction manual: attribution and reproduction terms (page 8)</a>.</p>
      {answers.some(a => a !== null && a > 0) && <div role="group" aria-label="Unscored functional difficulty" className="p-4 bg-slate-50 rounded-xl mb-6">
        <p className="text-sm font-medium text-slate-700 mb-3">If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?</p>
        <p className="text-xs text-slate-500 mb-3">Optional context; this response is not added to the 0–21 total.</p>
        <div className="flex gap-2 flex-wrap">{DIFFICULTY.map(o => <button type="button" key={o} aria-pressed={difficulty === o} onClick={() => setDifficulty(o)} className={`px-3 py-1.5 rounded-lg text-xs font-medium ${difficulty === o ? "bg-brand-600 text-white" : "bg-white border border-slate-200 text-slate-600"}`}>{o}</button>)}</div>
      </div>}
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
    {difficulty && answers.some(a => a !== null && a > 0) && <p className="text-sm text-slate-600 mt-4">Unscored difficulty response: {difficulty}</p>}
    </ResultsShell>
    <p className="text-xs text-slate-500 mt-3">The score and band are not a diagnosis. <a href="https://portal.niehs.nih.gov/dr2/unmanaged/files/gad_7_508.pdf" className="underline">NIH-hosted questionnaire</a> · <a href="https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410326" className="underline">Original validation study and its sample</a></p>
    </>}</>
  );
}
