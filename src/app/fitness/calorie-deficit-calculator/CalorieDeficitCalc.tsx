"use client";
import { useEffect, useState } from "react";
import { CalcInput, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard } from "@/components/CalcUI";

export function CalorieDeficitCalc() {
  const [maintenance, setMaintenance] = useState("");
  const [comparison, setComparison] = useState("");
  const [result, setResult] = useState<{ remaining: number; difference: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => setResult(null), [maintenance, comparison]);

  const calculate = () => {
    setError("");
    const m = Number(maintenance);
    const c = Number(comparison);
    if (!maintenance.trim() || !comparison.trim() || !Number.isFinite(m) || !Number.isFinite(c) || m <= 0 || c < 0 || c > m) {
      setResult(null);
      setError("Enter a maintenance estimate above zero and a comparison amount from zero up to that estimate.");
      return;
    }
    setResult({ remaining: m - c, difference: c });
  };

  return (
    <>
      <CalcShell>
        <p className="mb-4 text-sm text-slate-600">Arithmetic only. Use values you obtained elsewhere; this tool does not estimate your needs or recommend an intake or calorie difference.</p>
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <CalcInput label="Your maintenance estimate (cal/day)" value={maintenance} onChange={setMaintenance} placeholder="e.g. 2,000" />
          <CalcInput label="Amount to subtract (cal/day)" min={0} value={comparison} onChange={setComparison} placeholder="e.g. 300" />
        </div>
        <CalcButton onClick={calculate} label="Calculate difference" />
        <CalcError message={error} />
      </CalcShell>
      {result && (
        <ResultsShell>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <ResultCard label="Entered comparison amount" value={`${result.difference.toLocaleString()} cal/day`} />
            <ResultCard label="Subtraction result" value={`${result.remaining.toLocaleString()} cal/day`} highlight />
          </div>
          <p className="mt-4 text-sm text-slate-600">This result only reflects the numbers entered. It is not a suggested calorie intake, safety threshold, or prediction of weight change.</p>
        </ResultsShell>
      )}
    </>
  );
}
