"use client";
import { useEffect, useState } from "react";
import { CalcInput, CalcSelect, CalcButton, CalcShell, CalcError, ResultsShell, ResultCard } from "@/components/CalcUI";
import { ckdEpi2021Creatinine } from "@/lib/health-math";

export function KidneyCalc() {
  const [creatinine, setCreatinine] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState<"male" | "female">("male");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  useEffect(() => setResult(null), [creatinine, age, sex]);
  const calculate = () => {
    setError("");
    try {
      setResult(Math.round(ckdEpi2021Creatinine(Number(creatinine), Number(age), sex)));
    } catch (e) {
      setResult(null);
      setError((e as Error).message);
    }
  };

  return (
    <>
      <CalcShell>
        <p className="mb-4 text-sm text-slate-600">Adult CKD-EPI 2021 creatinine equation. The source equation expects standardized serum creatinine reported in mg/dL. This tool does not classify CKD or recommend treatment.</p>
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <CalcInput label="Standardized serum creatinine (mg/dL)" value={creatinine} onChange={setCreatinine} placeholder="e.g. 1.2" step={0.01} />
          <CalcInput label="Age (18 years or older)" min={18} max={120} step={1} value={age} onChange={setAge} placeholder="e.g. 60" />
          <CalcSelect label="Sex coefficient used by equation" value={sex} onChange={v => setSex(v as "male" | "female")} options={[{ value: "male", label: "Male coefficient" }, { value: "female", label: "Female coefficient" }]} />
        </div>
        <CalcButton onClick={calculate} label="Calculate eGFR estimate" />
        <CalcError message={error} />
      </CalcShell>
      {result !== null && (
        <ResultsShell>
          <ResultCard label="Estimated GFR (CKD-EPI 2021 creatinine)" value={`${result} mL/min/1.73 m²`} highlight />
          <p className="mt-4 text-sm text-slate-600">Estimate only. It does not diagnose CKD, assign a stage, or establish a treatment step. Review it with a clinician alongside the original laboratory report and other findings.</p>
        </ResultsShell>
      )}
    </>
  );
}
