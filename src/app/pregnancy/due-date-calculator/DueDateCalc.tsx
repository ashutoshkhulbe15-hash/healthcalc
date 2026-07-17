"use client";
import { useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

function addDays(date: Date, days: number) {
  const r = new Date(date);
  r.setDate(r.getDate() + days);
  return r;
}
function fmt(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
function weeksBetween(a: Date, b: Date) {
  const diff = Math.abs(b.getTime() - a.getTime());
  const weeks = Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
  const days = Math.floor((diff % (7 * 24 * 60 * 60 * 1000)) / (86400000));
  return { weeks, days };
}

export function DueDateCalc() {
  const [method, setMethod] = useState("lmp");
  const [dateVal, setDateVal] = useState("");
  const [embryoType, setEmbryoType] = useState("5");
  const [result, setResult] = useState<{ edd: Date; conception: Date; current: { weeks: number; days: number }; trimester: string; progress: number } | null>(null);

  const calculate = () => {
    if (!dateVal) return;
    const input = new Date(dateVal);
    const today = new Date();
    let edd: Date, conception: Date;

    if (method === "lmp") {
      edd = addDays(input, 280);
      conception = addDays(input, 14);
    } else if (method === "conception") {
      edd = addDays(input, 266);
      conception = input;
    } else {
      const daysToAdd = embryoType === "5" ? 263 : 265;
      edd = addDays(input, daysToAdd);
      conception = addDays(input, embryoType === "5" ? -5 : -3);
    }

    const lmpDate = method === "lmp" ? input : addDays(conception, -14);
    const ga = weeksBetween(lmpDate, today);
    const trimester = ga.weeks < 13 ? "First Trimester" : ga.weeks < 27 ? "Second Trimester" : "Third Trimester";
    const progress = Math.min(100, Math.round((ga.weeks / 40) * 100));
    setResult({ edd, conception, current: ga, trimester, progress });
  };

  return (
    <>
      <CalcShell>
        <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5 w-fit mb-6">
          {[{ v: "lmp", l: "Last Period" }, { v: "conception", l: "Conception" }, { v: "ivf", l: "IVF Transfer" }].map((m) => (
            <button key={m.v} onClick={() => setMethod(m.v)}
              className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${method === m.v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>
              {m.l}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label={method === "lmp" ? "First day of last period" : method === "conception" ? "Conception date" : "IVF transfer date"}
            value={dateVal} onChange={setDateVal} type="date" />
          {method === "ivf" && (
            <CalcSelect label="Embryo type" value={embryoType} onChange={setEmbryoType}
              options={[{ value: "5", label: "5-day blastocyst" }, { value: "3", label: "3-day embryo" }]} />
          )}
        </div>
        <CalcButton onClick={calculate} label="Calculate Due Date" />
      </CalcShell>

      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Your estimated due date is</div>
            <div className="text-3xl font-extrabold text-brand-600">{fmt(result.edd)}</div>
          </div>
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Week 0</span><span>{result.trimester}</span><span>Week 40</span>
            </div>
            <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
              <div className="absolute h-full bg-gradient-to-r from-brand-400 to-brand-600 rounded-full transition-all" style={{ width: `${result.progress}%` }} />
            </div>
            <div className="text-center text-sm font-semibold text-slate-700 mt-2">
              {result.current.weeks} weeks, {result.current.days} days pregnant ({result.progress}%)
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Due date" value={result.edd.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} highlight />
            <ResultCard label="Gestational age" value={`${result.current.weeks}w ${result.current.days}d`} />
            <ResultCard label="Trimester" value={result.trimester} />
            <ResultCard label="Estimated conception" value={result.conception.toLocaleDateString("en-US", { month: "short", day: "numeric" })} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
