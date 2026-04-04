"use client";
import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, TOOLS, getCategoryBySlug } from "@/lib/data";

export default function HomePage() {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? TOOLS : TOOLS.filter((t) => t.category === activeCat);

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-white">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="absolute -right-[120px] -top-[80px] w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)" }} />
        <div className="absolute -left-[60px] -bottom-[100px] w-[300px] h-[300px] rounded-full" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.04) 0%, transparent 70%)" }} />

        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-20 md:py-28">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-[13px] font-semibold text-brand-600 mb-6">
            ✦ Evidence-based health guides — free, no signup
          </div>
          <h1 className="text-4xl md:text-[62px] font-extrabold text-slate-900 leading-[1.08] tracking-tight mb-5 max-w-[680px]">
            Your health numbers,{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-500 bg-clip-text text-transparent">
              finally explained
            </span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed max-w-[520px] mb-9">
            In-depth health guides paired with interactive tools. Every topic comes with expert-level articles, visual results, and citations from WHO, NIH, and peer-reviewed research.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/tools" className="no-underline px-6 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">
              Explore All Tools →
            </Link>
            <Link href="/tools" className="no-underline px-6 py-3 rounded-[10px] border-[1.5px] border-slate-200 bg-white text-slate-700 text-[15px] font-semibold hover:border-brand-600 transition-all">
              Browse Categories
            </Link>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="bg-slate-900">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-7 flex justify-between flex-wrap gap-5">
          {[
            { num: "118", label: "Health Pages", icon: "📖" },
            { num: "238K", label: "Words of Research", icon: "🔬" },
            { num: "WHO/NIH", label: "Cited Sources", icon: "🏛️" },
            { num: "40", label: "Interactive Tools", icon: "📊" },
            { num: "< 2s", label: "Load Time", icon: "⚡" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 flex-1 min-w-[160px]">
              <span className="text-[22px]">{s.icon}</span>
              <div>
                <div className="text-lg font-extrabold text-white tracking-tight">{s.num}</div>
                <div className="text-xs text-slate-400 font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-extrabold text-slate-900 tracking-tight mb-2">Browse by Category</h2>
            <p className="text-[15px] text-slate-500 max-w-[480px] mx-auto">Every category covers both the tools and the knowledge to understand your results.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {CATEGORIES.map((c) => (
              <button key={c.slug} onClick={() => { setActiveCat(activeCat === c.slug ? "All" : c.slug); document.getElementById("tools-section")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`text-left rounded-2xl p-5 border-[1.5px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${activeCat === c.slug ? "border-opacity-50" : "bg-white border-slate-200 hover:border-opacity-50"}`}
                style={{ background: activeCat === c.slug ? c.accentLight : undefined, borderColor: activeCat === c.slug ? c.accent + "50" : undefined }}>
                <div className="text-[32px] mb-2.5">{c.icon}</div>
                <div className="text-[16px] font-bold text-slate-900 mb-1">{c.name}</div>
                <div className="text-[13px] text-slate-500 leading-snug mb-2">{c.desc}</div>
                <div className="text-xs font-semibold" style={{ color: c.accent }}>{c.tools} tools →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED TOOL ─── */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-pink-50 text-xs font-bold text-pink-700 uppercase tracking-wider mb-4">Featured Guide</div>
              <h2 className="text-[30px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-4">Pregnancy Weight Gain: Your Complete Guide</h2>
              <p className="text-[16px] text-slate-500 leading-relaxed mb-5">
                Understand healthy pregnancy weight gain week by week with IOM guidelines. Read our evidence-based guide, then use the interactive tracker to see where you stand with visual charts and personalized ranges.
              </p>
              <div className="flex gap-4 mb-6 flex-wrap">
                {["📖 Evidence-based guide", "📈 Interactive tracker", "👶 Twin support"].map((f) => (
                  <span key={f} className="text-[13px] text-slate-600 font-medium">{f}</span>
                ))}
              </div>
              <Link href="/pregnancy/weight-gain-calculator" className="no-underline inline-block px-7 py-3 rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-600/30 transition-all">
                Read the Guide →
              </Link>
            </div>
            {/* Preview */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Preview</div>
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                {[{ l: "Weight gain", v: "7.0 kg" }, { l: "Target range", v: "5.0–7.0 kg" }, { l: "BMI Category", v: "Normal" }, { l: "Week", v: "24" }].map((m) => (
                  <div key={m.l} className="bg-white rounded-[10px] p-3 border border-slate-200">
                    <div className="text-[11px] text-slate-400">{m.l}</div>
                    <div className="text-[17px] font-bold text-slate-900 mt-0.5">{m.v}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-[10px] p-3.5 border border-slate-200">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Week 24 progress</span>
                  <span className="text-brand-600 font-semibold">On track ✓</span>
                </div>
                <div className="relative h-2 bg-slate-200 rounded-full">
                  <div className="absolute left-[36%] w-[28%] h-full bg-green-100 rounded-full" />
                  <div className="absolute left-[62%] -top-1 w-4 h-4 rounded-full bg-brand-600 border-[3px] border-white shadow -translate-x-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL TOPICS ─── */}
      <section id="tools-section" className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="flex justify-between items-center mb-7">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
                {activeCat === "All" ? "All Calculators & Tools" : `${getCategoryBySlug(activeCat)?.name} Guides`}
              </h2>
              <p className="text-sm text-slate-400">{filtered.length} tools available — each with an in-depth guide</p>
            </div>
            {activeCat !== "All" && (
              <button onClick={() => setActiveCat("All")} className="text-[13px] text-brand-600 bg-brand-50 border border-brand-100 rounded-lg px-4 py-2 font-semibold hover:bg-brand-100 transition-colors">
                Show all ×
              </button>
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((t) => {
              const cat = getCategoryBySlug(t.category);
              const href = t.live ? `/${t.category}/${t.slug}` : "#";
              return (
                <Link key={t.slug} href={href} className="no-underline group bg-white rounded-[14px] p-6 border border-slate-200 hover:border-opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50 transition-all relative"
                  style={{ ["--accent" as string]: cat?.accent }}>
                  {t.popular && cat && (
                    <div className="absolute -top-px right-5 text-[10px] font-bold text-white px-2 py-0.5 rounded-b-md" style={{ background: cat.accent }}>POPULAR</div>
                  )}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: cat?.accent }} />
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: cat?.accent }}>{cat?.name}</span>
                  </div>
                  <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">{t.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-3.5">{t.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-bold text-brand-600">{t.live ? "Calculator + Guide →" : "Coming soon"}</span>
                    <div className="flex gap-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-50 text-brand-600 font-semibold">Tool</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 font-semibold">Tool</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-slate-900">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-extrabold text-white tracking-tight mb-2">Not just a number. A complete picture.</h2>
            <p className="text-[15px] text-slate-400 max-w-[460px] mx-auto">Most calculator sites give you a result and leave. We give you understanding.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", icon: "✏️", title: "Enter your data", desc: "Simple inputs with metric/imperial support. No signup, no accounts." },
              { step: "02", icon: "📊", title: "See visual results", desc: "Color-coded gauges, trajectory charts, comparison graphics." },
              { step: "03", icon: "📖", title: "Read the full context", desc: "A 2,000-word evidence-based article explains what your results mean." },
              { step: "04", icon: "🔗", title: "Continue your journey", desc: "Related tools link together. TDEE → macros → protein — one flow." },
            ].map((s) => (
              <div key={s.step} className="bg-white/[0.04] rounded-[14px] p-6 border border-white/[0.08]">
                <div className="flex items-center gap-2.5 mb-3.5">
                  <span className="text-[22px]">{s.icon}</span>
                  <span className="text-[28px] font-extrabold text-white/10 font-mono">{s.step}</span>
                </div>
                <h3 className="text-[16px] font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[26px] font-extrabold text-slate-900 tracking-tight mb-3">Built on published science, not guesswork</h2>
              <p className="text-[15px] text-slate-500 leading-relaxed mb-5">
                Every calculator uses established, peer-reviewed formulas — Mifflin-St Jeor for TDEE, IOM guidelines for pregnancy, WHO growth standards for child development. We cite the exact equation and the original paper on every page.
              </p>
              <p className="text-[15px] text-slate-500 leading-relaxed">
                Our articles pull information exclusively from authoritative sources: WHO, NIH, ACOG, Mayo Clinic, and PubMed studies. Every key claim is cross-referenced against at least two major medical references.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { logo: "WHO", label: "World Health Organization", desc: "Growth standards, BMI" },
                { logo: "NIH", label: "National Institutes of Health", desc: "Nutritional guidelines" },
                { logo: "IOM", label: "Natl Academy of Medicine", desc: "Pregnancy weight gain" },
                { logo: "ACOG", label: "American College OB-GYN", desc: "Reproductive health" },
              ].map((s) => (
                <div key={s.logo} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="text-lg font-extrabold text-brand-600 font-mono mb-1">{s.logo}</div>
                  <div className="text-[13px] font-semibold text-slate-700 mb-0.5">{s.label}</div>
                  <div className="text-xs text-slate-400">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-20 text-center">
          <h2 className="text-[30px] font-extrabold text-slate-900 tracking-tight mb-3">Ready to understand your numbers?</h2>
          <p className="text-[16px] text-slate-500 max-w-[440px] mx-auto mb-7">Pick a calculator, get your results, and read the science behind them. Free, forever.</p>
          <Link href="/tools" className="no-underline inline-block px-8 py-3.5 rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white text-[16px] font-bold hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/30 transition-all">
            Explore All Calculators & Guides →
          </Link>
        </div>
      </section>
    </>
  );
}
