import Link from "next/link";
import { MedicalDisclaimer } from "./MedicalDisclaimer";
import { BreadcrumbSchema } from "./Schema";

type RelatedTool = { title: string; desc: string; href: string; category: string };

const CAT_COLORS: Record<string, string> = {
  "body-metrics": "#10B981",
  fitness: "#8B5CF6",
  pregnancy: "#EC4899",
  "mental-health": "#3B82F6",
  conditions: "#F59E0B",
};

export function BlogPageShell({
  title,
  subtitle,
  readTime,
  category,
  categoryLabel,
  relatedTools,
  children,
}: {
  title: string;
  subtitle: string;
  readTime: string;
  category: string;
  categoryLabel: string;
  relatedTools: RelatedTool[];
  children: React.ReactNode;
}) {
  const accent = CAT_COLORS[category] || "#0F766E";

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "/" },
        { name: "Blog", url: "/#tools-section" },
        { name: title },
      ]} />
      {/* Banner */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #F0FDFA 0%, #ECFDF5 40%, #F0F9FF 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="relative max-w-[760px] mx-auto px-4 sm:px-6 pt-5 pb-8 md:pb-12">
          <div className="text-[13px] text-slate-500 flex gap-1.5 mb-5">
            <Link href="/" className="text-brand-600 font-medium no-underline hover:underline">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/#tools-section" className="text-brand-600 font-medium no-underline hover:underline">Blog</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{title}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wide" style={{ color: accent }}>{categoryLabel}</span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs text-slate-400">{readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-[1.15] tracking-tight mb-3 max-w-[640px]">
            {title}
          </h1>
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-[560px]">
            {subtitle}
          </p>
        </div>
        <div className="h-16" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      {/* Content */}
      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-8">
          {children}

          {/* Related tools */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Try These Tools</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedTools.map((t) => (
                <Link key={t.title} href={t.href}
                  className="no-underline bg-white rounded-[14px] p-5 border border-slate-200 hover:border-brand-400 hover:-translate-y-0.5 hover:shadow-md transition-all">
                  <div className="text-[11px] font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: CAT_COLORS[t.category] || "#0F766E" }}>{t.category.replace("-", " ")}</div>
                  <div className="text-[16px] font-bold text-slate-900 mb-1.5">{t.title}</div>
                  <div className="text-[13px] text-slate-500 leading-snug">{t.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          <MedicalDisclaimer />
        </div>
      </div>
    </>
  );
}
