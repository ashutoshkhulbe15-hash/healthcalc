import React from "react";

/* ═══════════════════════════════════════════
   1. KEY FACTS GRID
   Usage: <KeyFacts items={[{value:"2-19", label:"Age range"}, ...]} />
   ═══════════════════════════════════════════ */
export function KeyFacts({ title, emoji, items }: { title: string; emoji?: string; items: { value: string; label: string }[] }) {
  return (
    <div className="my-6 bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-extrabold text-slate-800 mb-4 tracking-tight">{emoji && <span className="mr-1">{emoji}</span>}{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {items.map((item, i) => (
          <div key={i} className="bg-teal-50 border border-teal-100 rounded-xl p-4 text-center">
            <span className="block text-xl font-extrabold text-teal-700 mb-1 tracking-tight">{item.value}</span>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wide">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   2. TWO-COLUMN COMPARE (Yes/No, Safe/Unsafe)
   ═══════════════════════════════════════════ */
export function CompareColumns({ title, emoji, yesTitle, noTitle, yesItems, noItems }: {
  title: string; emoji?: string;
  yesTitle: string; noTitle: string;
  yesItems: string[]; noItems: string[];
}) {
  return (
    <div className="my-6 bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-extrabold text-slate-800 mb-4 tracking-tight">{emoji && <span className="mr-1">{emoji}</span>}{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h4 className="text-sm font-extrabold text-green-800 mb-3">{yesTitle}</h4>
          <ul className="space-y-0">
            {yesItems.map((item, i) => (
              <li key={i} className="text-[13.5px] text-slate-700 leading-relaxed py-2 pl-7 relative border-b border-dashed border-black/5 last:border-none">
                <span className="absolute left-1 text-green-600 font-extrabold">✓</span>{item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5">
          <h4 className="text-sm font-extrabold text-red-800 mb-3">{noTitle}</h4>
          <ul className="space-y-0">
            {noItems.map((item, i) => (
              <li key={i} className="text-[13.5px] text-slate-700 leading-relaxed py-2 pl-7 relative border-b border-dashed border-black/5 last:border-none">
                <span className="absolute left-1 text-red-600 font-extrabold">✕</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   3. NUMBERED STEPS
   ═══════════════════════════════════════════ */
export function Steps({ title, emoji, steps }: {
  title: string; emoji?: string;
  steps: { heading: string; text: string }[];
}) {
  return (
    <div className="my-6 bg-white border border-slate-200 rounded-2xl p-6">
      <h3 className="text-lg font-extrabold text-slate-800 mb-4 tracking-tight">{emoji && <span className="mr-1">{emoji}</span>}{title}</h3>
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4 py-4 border-b border-dashed border-slate-200 last:border-none last:pb-0">
          <div className="w-9 h-9 rounded-full bg-teal-700 text-white flex items-center justify-center font-extrabold text-sm shrink-0">{i + 1}</div>
          <div>
            <span className="block text-[15px] font-extrabold text-slate-800 mb-1">{step.heading}</span>
            <span className="text-[13.5px] text-slate-500 leading-relaxed">{step.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   4. WARNING CALLOUT
   ═══════════════════════════════════════════ */
export function WarningBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 bg-amber-50 border border-amber-200 border-l-4 border-l-amber-400 rounded-xl p-5">
      <h4 className="text-[14.5px] font-extrabold text-amber-800 mb-2">⚠️ {title}</h4>
      <div className="text-[13.5px] text-amber-900 leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   5. COLLAPSIBLE FAQ
   ═══════════════════════════════════════════ */
export function CollapsibleFAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="my-6 space-y-2.5">
      {items.map((item, i) => (
        <details key={i} className="group border border-slate-200 rounded-xl bg-white overflow-hidden" {...(i === 0 ? { open: true } : {})}>
          <summary className="px-5 py-4 text-[14px] font-bold text-slate-800 cursor-pointer list-none flex justify-between items-center gap-3 group-open:bg-teal-50">
            {item.q}
            <span className="text-xl text-teal-700 font-semibold shrink-0 group-open:hidden">+</span>
            <span className="text-xl text-teal-700 font-semibold shrink-0 hidden group-open:inline">−</span>
          </summary>
          <div className="px-5 pb-4 text-[13.5px] text-slate-500 leading-relaxed">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   6. CLEAN REFERENCE TABLE
   ═══════════════════════════════════════════ */
export function ReferenceTable({ title, emoji, headers, rows, highlightRow }: {
  title: string; emoji?: string;
  headers: string[];
  rows: (string | number)[][];
  highlightRow?: number;
}) {
  return (
    <div className="my-6 bg-white border border-slate-200 rounded-2xl p-6 overflow-x-auto">
      <h3 className="text-lg font-extrabold text-slate-800 mb-4 tracking-tight">{emoji && <span className="mr-1">{emoji}</span>}{title}</h3>
      <table className="w-full border-collapse text-[13.5px]">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className={`text-left bg-teal-50 px-3.5 py-3 text-[11.5px] font-extrabold tracking-wide uppercase text-teal-700 ${i === 0 ? "rounded-l-lg" : ""} ${i === headers.length - 1 ? "rounded-r-lg" : ""}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${highlightRow === i ? "bg-green-50 font-semibold" : ""}`}>
              {row.map((cell, j) => (
                <td key={j} className={`px-3.5 py-3 border-b border-dashed border-slate-100 text-slate-700 ${highlightRow === i ? "font-bold" : ""}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═══════════════════════════════════════════
   CONTENT BLOCK WRAPPER
   Each section in a white card
   ═══════════════════════════════════════════ */
export function ContentBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 bg-white border border-slate-200 rounded-2xl p-7">
      {children}
    </div>
  );
}
