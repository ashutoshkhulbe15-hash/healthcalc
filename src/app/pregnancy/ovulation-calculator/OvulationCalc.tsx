"use client";
import { useState } from "react";
import { CalcInput, CalcButton, CalcShell, ResultsShell, ResultCard } from "@/components/CalcUI";

function addDays(d: Date, n: number) { const r = new Date(d); r.setDate(r.getDate() + n); return r; }
function fmtShort(d: Date) { return d.toLocaleDateString("en-US", { month: "short", day: "numeric" }); }

export function OvulationCalc() {
  const [lmpDate, setLmpDate] = useState("");
  const [cycleLen, setCycleLen] = useState("28");
  const [result, setResult] = useState<{ ovulation: Date; windowStart: Date; windowEnd: Date; bestDays: Date[]; nextPeriod: Date } | null>(null);

  const calculate = () => {
    if (!lmpDate) return;
    const lmp = new Date(lmpDate);
    const cl = parseInt(cycleLen) || 28;
    const ovDay = addDays(lmp, cl - 14);
    const wStart = addDays(ovDay, -5);
    const wEnd = ovDay;
    const best = [addDays(ovDay, -2), addDays(ovDay, -1), ovDay];
    const nextP = addDays(lmp, cl);
    setResult({ ovulation: ovDay, windowStart: wStart, windowEnd: wEnd, bestDays: best, nextPeriod: nextP });
  };

  return (
    <>
      <CalcShell>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
          <CalcInput label="First day of last period" value={lmpDate} onChange={setLmpDate} type="date" />
          <CalcInput label="Average cycle length (days)" value={cycleLen} onChange={setCycleLen} placeholder="28" min={21} max={45} />
        </div>
        <CalcButton onClick={calculate} label="Find My Fertile Window" />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="text-center mb-6">
            <div className="text-sm text-slate-400 mb-1">Estimated ovulation date</div>
            <div className="text-3xl font-extrabold text-brand-600">{fmtShort(result.ovulation)}</div>
          </div>
          {/* Visual timeline */}
          <div className="mb-6 p-4 bg-slate-50 rounded-xl">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Fertile Window</div>
            <div className="flex gap-1.5">
              {Array.from({ length: 7 }, (_, i) => {
                const day = addDays(result.windowStart, i);
                const isOv = day.toDateString() === result.ovulation.toDateString();
                const isBest = result.bestDays.some(b => b.toDateString() === day.toDateString());
                return (
                  <div key={i} className={`flex-1 rounded-lg p-2 text-center ${isOv ? "bg-brand-600 text-white" : isBest ? "bg-brand-100 text-brand-700" : "bg-white text-slate-500 border border-slate-200"}`}>
                    <div className="text-[10px] font-medium">{day.toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div className="text-lg font-bold">{day.getDate()}</div>
                    <div className="text-[10px]">{isOv ? "Ovulation" : isBest ? "High" : "Fertile"}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard label="Ovulation day" value={fmtShort(result.ovulation)} highlight />
            <ResultCard label="Fertile window" value={`${fmtShort(result.windowStart)} – ${fmtShort(result.windowEnd)}`} />
            <ResultCard label="Best days" value={result.bestDays.map(d => fmtShort(d)).join(", ")} sub="Highest probability" />
            <ResultCard label="Next period" value={fmtShort(result.nextPeriod)} />
          </div>
        </ResultsShell>
      )}
    </>
  );
}
