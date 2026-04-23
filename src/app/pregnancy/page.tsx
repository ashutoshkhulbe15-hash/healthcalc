import Link from "next/link";
import type { Metadata } from "next";
import { TOOLS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pregnancy — Health Guides & Tools",
  description: "Pregnancy health guides and tools — from trying to conceive through postpartum. Evidence-based resources for every stage.",
  alternates: { canonical: "/pregnancy" },
};

export default function CategoryPage() {
  const tools = TOOLS.filter((t) => t.category === "pregnancy" && t.live);

  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #F0FDFA 0%, #ECFDF5 40%, #F0F9FF 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-6">
          <div className="text-[13px] text-slate-500 flex gap-1.5 mb-5">
            <Link href="/" className="text-brand-600 font-medium no-underline hover:underline">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">Pregnancy</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🤰</span>
            <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 tracking-tight">Pregnancy</h1>
          </div>
          <p className="text-[16px] text-slate-600 max-w-[560px]">Pregnancy health guides and tools — from trying to conceive through postpartum. Evidence-based resources for every stage.</p>
        </div>
        <div className="h-12" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <p className="text-sm text-slate-400 mb-6">{tools.length} guides available</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((t) => (
              <Link key={t.slug} href={`/pregnancy/${t.slug}`}
                className="no-underline bg-white rounded-[14px] p-6 border border-slate-200 hover:border-opacity-60 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/50 transition-all">
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 leading-snug">{t.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-3">{t.desc}</p>
                <span className="text-[13px] font-bold text-brand-600">Calculator + Guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
