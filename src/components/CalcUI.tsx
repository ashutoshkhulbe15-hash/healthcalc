"use client";
import React from "react";

// ── Input Field ──
export function CalcInput({
  label, value, onChange, placeholder, type = "number", min, max, step,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
  type?: string; min?: number; max?: number; step?: number;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder} min={min} max={max} step={step}
        className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 rounded-lg text-[15px] focus:border-brand-500 focus:outline-none transition-colors" />
    </div>
  );
}

// ── Select Dropdown ──
export function CalcSelect({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-slate-600 mb-1.5">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 border-[1.5px] border-slate-200 rounded-lg text-[15px] focus:border-brand-500 focus:outline-none transition-colors bg-white">
        {options.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

// ── Unit Toggle ──
export function UnitToggle({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-1 bg-slate-100 rounded-lg p-0.5 w-fit mb-6">
      {[{ v: "metric", l: "Metric (kg/cm)" }, { v: "imperial", l: "Imperial (lbs/in)" }].map((u) => (
        <button key={u.v} onClick={() => onChange(u.v)}
          className={`px-4 py-1.5 rounded-md text-[13px] font-medium transition-all ${value === u.v ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}>
          {u.l}
        </button>
      ))}
    </div>
  );
}

// ── Calculate Button ──
export function CalcButton({ onClick, label = "Calculate" }: { onClick: () => void; label?: string }) {
  return (
    <button onClick={onClick}
      className="px-8 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all active:translate-y-0">
      {label}
    </button>
  );
}

// ── Result Card ──
export function ResultCard({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`rounded-[10px] p-3.5 ${highlight ? "bg-brand-50 border border-brand-100" : "bg-slate-50"}`}>
      <div className="text-xs text-slate-400 font-medium mb-1">{label}</div>
      <div className={`text-xl font-bold ${highlight ? "text-brand-600" : "text-slate-900"}`}>{value}</div>
      {sub && <div className="text-xs text-slate-500 mt-0.5">{sub}</div>}
    </div>
  );
}

// ── Status Badge ──
export function StatusBadge({ status, text }: { status: "good" | "warning" | "danger" | "info"; text: string }) {
  const colors = {
    good: "bg-green-500", warning: "bg-amber-500", danger: "bg-red-500", info: "bg-blue-500",
  };
  const textColors = {
    good: "text-brand-600", warning: "text-amber-700", danger: "text-red-600", info: "text-blue-700",
  };
  return (
    <div className="flex items-center gap-2 mb-5">
      <div className={`w-2 h-2 rounded-full ${colors[status]}`} />
      <span className={`text-sm font-semibold ${textColors[status]}`}>{text}</span>
    </div>
  );
}

// ── Gauge Bar ──
export function GaugeBar({ value, rangeMin, rangeMax, label, unit = "" }: {
  value: number; rangeMin: number; rangeMax: number; label: string; unit?: string;
}) {
  const total = rangeMax * 1.8;
  const pct = Math.min(100, Math.max(0, (value / total) * 100));
  const rMinPct = (rangeMin / total) * 100;
  const rMaxPct = (rangeMax / total) * 100;
  const inRange = value >= rangeMin && value <= rangeMax;
  return (
    <div className="mb-3">
      <div className="flex justify-between text-[13px] text-slate-500 mb-1">
        <span>{label}</span>
        <span className={`font-semibold ${inRange ? "text-brand-600" : "text-red-500"}`}>{value.toFixed(1)}{unit}</span>
      </div>
      <div className="relative h-2.5 bg-slate-200 rounded-full">
        <div className="absolute h-full bg-green-100 rounded-full" style={{ left: `${rMinPct}%`, width: `${rMaxPct - rMinPct}%` }} />
        <div className={`absolute -top-[3px] w-4 h-4 rounded-full border-[3px] border-white shadow -translate-x-1/2 ${inRange ? "bg-brand-600" : "bg-red-500"}`}
          style={{ left: `${pct}%` }} />
      </div>
      <div className="flex justify-between text-[11px] text-slate-400 mt-0.5">
        <span>{rangeMin.toFixed(1)}{unit}</span><span>{rangeMax.toFixed(1)}{unit}</span>
      </div>
    </div>
  );
}

// ── Calculator Shell ──
export function CalcShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 md:p-9 mb-8 shadow-sm">
      {children}
    </div>
  );
}

// ── Results Shell ──
export function ResultsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-7 md:p-9 mb-8 shadow-sm">
      {children}
    </div>
  );
}
