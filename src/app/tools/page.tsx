"use client";
import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, TOOLS, getCategoryBySlug } from "@/lib/data";

export default function ToolsPage() {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? TOOLS : TOOLS.filter((t) => t.category === activeCat);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #F0FDFA 0%, #ECFDF5 40%, #F0F9FF 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-10">
          <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 tracking-tight mb-3">All Health Tools</h1>
          <p className="text-[16px] text-slate-600 max-w-[520px]">34 free, evidence-based calculators and assessments. Each paired with an in-depth article.</p>
        </div>
        <div className="h-12" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          {/* Category filters */}
          <div className="flex gap-2 flex-wrap mb-8">
            <button onClick={() => setActiveCat("All")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCat === "All" ? "bg-brand-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
              All ({TOOLS.length})
            </button>
            {CATEGORIES.map((c) => {
              const count = TOOLS.filter(t => t.category === c.slug).length;
              return (
                <button key={c.slug} onClick={() => setActiveCat(c.slug)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCat === c.slug ? "bg-brand-600 text-white" : "bg-white border border-slate-200 text-slate-600 hover:border-brand-300"}`}>
                  {c.icon} {c.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Tools grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t) => {
              const cat = getCategoryBySlug(t.category);
              const href = t.live ? `/${t.category}/${t.slug}` : "#";
              return (
                <Link key={t.slug} href={href} className="no-underline group bg-white rounded-[14px] p-6 border border-slate-200 hover:border-opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative">
                  {t.popular && cat && (
                    <div className="absolute -top-px right-5 text-[10px] font-bold text-white px-2 py-0.5 rounded-b-md" style={{ background: cat.accent }}>POPULAR</div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: cat?.accent }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: cat?.accent }}>{cat?.name}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">{t.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3.5">{t.desc}</p>
                  <span className="text-[13px] font-bold text-brand-600">Calculator + Guide →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
