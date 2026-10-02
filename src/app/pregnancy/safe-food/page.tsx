import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregnancy Food Guidance: Source-Linked Pages",
  description: "Read source-based pregnancy food guidance. Preparation, type and regional recommendations can change the advice.",
  alternates: { canonical: "/pregnancy/safe-food" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Pregnancy Food Guidance: Source-Linked Pages", description: "Read source-based pregnancy food guidance. Preparation, type and regional recommendations can change the advice.", url: "/pregnancy/safe-food", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Pregnancy Food Guidance: Source-Linked Pages", description:"Read source-linked guidance. Preparation, food type and regional recommendations can change the advice.", images:["/og-image.png"]},
};

const FOODS = [
  { slug: "salmon", name: "Salmon", status: "caution" as const },
  { slug: "cod", name: "Cod", status: "caution" as const },
  { slug: "tuna", name: "Tuna (type matters)", status: "caution" as const },
  { slug: "sushi", name: "Sushi (preparation matters)", status: "caution" as const },
  { slug: "eggs", name: "Eggs (preparation matters)", status: "caution" as const },
  { slug: "soft-cheese", name: "Soft Cheese (type and preparation)", status: "caution" as const },
  { slug: "steak", name: "Steak (cut and temperature)", status: "caution" as const },
  { slug: "peanut-butter", name: "Peanut Butter", status: "caution" as const },
  { slug: "pre-made-salads", name: "Pre-made Deli Salads", status: "caution" as const },
  { slug: "coffee", name: "Coffee (count total caffeine)", status: "caution" as const },
  { slug: "alcohol", name: "Alcohol", status: "caution" as const },
];

const COLORS = {
  safe: "bg-green-50 border-green-200 text-green-700",
  caution: "bg-amber-50 border-amber-200 text-amber-700",
  avoid: "bg-red-50 border-red-200 text-red-700",
};
const LABELS = { safe: "Source guide", caution: "Read guidance", avoid: "Read guidance" };

export default function SafeFoodIndex() {
  return (
    <>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(145deg, #F0FDFA 0%, #ECFDF5 40%, #F0F9FF 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(#0F766E 1px, transparent 1px), linear-gradient(90deg, #0F766E 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-6">
          <div className="text-[13px] text-slate-500 flex gap-1.5 mb-5">
            <Link href="/" className="text-brand-600 font-medium no-underline hover:underline">Home</Link>
            <span className="text-slate-300">/</span>
            <Link href="/pregnancy" className="text-brand-600 font-medium no-underline hover:underline">Pregnancy</Link>
            <span className="text-slate-300">/</span>
            <span>Food Guidance</span>
          </div>
          <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 tracking-tight mb-3">Pregnancy Food Guidance</h1>
          <p className="text-[16px] text-slate-600 max-w-[560px] mb-4">Select a food for source links and guidance on its preparation, type and regional scope. A listing is not a safety rating for every product or serving.</p>
          <Link href="/pregnancy/safe-food-checker" className="text-sm font-semibold text-brand-600 no-underline hover:underline">Search the reviewed food pages →</Link>
        </div>
        <div className="h-12" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/fish-seafood-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Fish &amp; Seafood During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Use the current FDA/EPA chart for categories by species and read the cooking guidance.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/meat-deli-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Meat &amp; Deli During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Distinguish raw meat from ready-to-eat deli products and read the cooking or reheating instruction for each category.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/drinks-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Drinks During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">ACOG caffeine guidance, CDC alcohol guidance and CDC juice-safety advice.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/everyday-foods-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Everyday Food Handling →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Source-linked guidance on produce, sprouts, juice, dairy and eggs.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {FOODS.map((f) => (
              <Link key={f.slug} href={`/pregnancy/safe-food/${f.slug}`}
                className={`no-underline flex items-center justify-between p-4 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md ${COLORS[f.status]}`}>
                <span className="font-semibold text-sm">{f.name}</span>
                <span className="text-xs font-bold whitespace-nowrap">{LABELS[f.status]}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
