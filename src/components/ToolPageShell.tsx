import Link from "next/link";
import { MedicalDisclaimer } from "./MedicalDisclaimer";
import { BreadcrumbSchema } from "./Schema";

type CategoryInfo = {
  name: string;
  slug: string;
  emoji: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
};

const CATEGORY_MAP: Record<string, CategoryInfo> = {
  pregnancy: {
    name: "Pregnancy",
    slug: "pregnancy",
    emoji: "🤰",
    accent: "text-pink-700",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-500/20",
  },
  fitness: {
    name: "Fitness",
    slug: "fitness",
    emoji: "💪",
    accent: "text-violet-700",
    accentBg: "bg-violet-500/10",
    accentBorder: "border-violet-500/20",
  },
  "body-metrics": {
    name: "Body Metrics",
    slug: "body-metrics",
    emoji: "📐",
    accent: "text-emerald-700",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-500/20",
  },
  "mental-health": {
    name: "Mental Health",
    slug: "mental-health",
    emoji: "🧠",
    accent: "text-blue-700",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-500/20",
  },
  conditions: {
    name: "Conditions",
    slug: "conditions",
    emoji: "🩺",
    accent: "text-amber-700",
    accentBg: "bg-amber-500/10",
    accentBorder: "border-amber-500/20",
  },
};

type RelatedTool = {
  title: string;
  desc: string;
  href: string;
  category: string;
};

export function ToolPageShell({
  category,
  title,
  description,
  features,
  relatedTools,
  relatedHeading,
  children,
}: {
  category: string;
  title: string;
  description: string;
  features: string[];
  relatedTools: RelatedTool[];
  relatedHeading?: string;
  children: React.ReactNode;
}) {
  const cat = CATEGORY_MAP[category] || CATEGORY_MAP.pregnancy;

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: cat.name, url: `/#tools-section` },
        { name: title },
      ]} />
      {/* Banner */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #F0FDFA 0%, #ECFDF5 40%, #F0F9FF 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute -right-20 -top-16 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)]" />
        <div className="absolute -left-10 -bottom-20 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(236,72,153,0.05)_0%,transparent_70%)]" />

        <div className="relative max-w-[860px] mx-auto px-4 sm:px-6 pt-5 pb-8 md:pb-12">
          {/* Breadcrumb */}
          <div className="text-[13px] text-slate-500 flex gap-1.5 mb-5">
            <Link
              href="/"
              className="text-brand-600 font-medium no-underline hover:underline"
            >
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-brand-600 font-medium cursor-pointer hover:underline">
              {cat.name}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{title}</span>
          </div>

          {/* Category pill */}
          <div
            className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full ${cat.accentBg} border ${cat.accentBorder} mb-4`}
          >
            <span className="text-sm">{cat.emoji}</span>
            <span
              className={`text-xs font-bold ${cat.accent} uppercase tracking-wide`}
            >
              {cat.name}
            </span>
          </div>

          <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-3 max-w-[600px]">
            {title}
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-[560px] mb-6">
            {description}
          </p>

          {/* Feature chips */}
          <div className="flex gap-2.5 flex-wrap">
            {features.map((f) => (
              <div
                key={f}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/70 backdrop-blur border border-white/90 text-[13px] font-medium text-slate-700"
              >
                {f}
              </div>
            ))}
          </div>
        </div>
        {/* Smooth fade to body */}
        <div className="h-16" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      {/* Main content */}
      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-8">
          {children}

          {/* Related tools */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              {relatedHeading || "Related Tools"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedTools.map((t) => {
                const tCat = CATEGORY_MAP[t.category] || cat;
                return (
                  <Link
                    key={t.title}
                    href={t.href}
                    className="no-underline bg-white rounded-[14px] p-5 border border-slate-200 hover:border-brand-400 hover:-translate-y-0.5 hover:shadow-md transition-all"
                  >
                    <div
                      className={`text-[11px] font-semibold uppercase tracking-wider mb-1.5`}
                      style={{ color: tCat.accent.includes("pink") ? "#EC4899" : tCat.accent.includes("violet") ? "#8B5CF6" : tCat.accent.includes("emerald") ? "#10B981" : tCat.accent.includes("blue") ? "#3B82F6" : "#F59E0B" }}
                    >
                      {tCat.name}
                    </div>
                    <div className="text-[16px] font-bold text-slate-900 mb-1.5">
                      {t.title}
                    </div>
                    <div className="text-[13px] text-slate-500 leading-snug">
                      {t.desc}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
}
