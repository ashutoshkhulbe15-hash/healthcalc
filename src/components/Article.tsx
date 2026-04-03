import React from "react";

export function ArticleSection({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-9">
      <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
        {icon && <span className="text-xl">{icon}</span>}
        {title}
      </h2>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 [&>p]:mb-4 [&>p:last-child]:mb-0 [&_strong]:text-slate-900 [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-500">
        {children}
      </div>
    </div>
  );
}

export function ArticleTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto my-5">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-slate-50">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3.5 py-2.5 text-left font-semibold text-slate-700 border-b-2 border-slate-200 whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-100">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-3.5 py-2.5 ${
                    j === 0 ? "font-semibold text-slate-900" : "text-slate-600"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FAQ({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="border-t border-slate-100">
      {items.map((faq, i) => (
        <div key={i} className="py-4 border-b border-slate-100">
          <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">
            {faq.q}
          </h3>
          <p className="text-[14.5px] text-slate-600 leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SourceList({
  sources,
}: {
  sources: { num: number; text: string; url?: string }[];
}) {
  return (
    <ol className="list-none p-0 space-y-1.5">
      {sources.map((s) => (
        <li key={s.num} className="text-[13.5px] text-slate-500">
          <span className="font-semibold text-brand-600">[{s.num}]</span>{" "}
          {s.url ? (
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 underline underline-offset-2 hover:text-brand-500"
            >
              {s.text}
            </a>
          ) : (
            s.text
          )}
        </li>
      ))}
    </ol>
  );
}

export function ArticleByline() {
  return (
    <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-100">
      Written by the ProHealthIt Editorial Team · Last updated: April 2026 ·
      Sources cited below
    </p>
  );
}
