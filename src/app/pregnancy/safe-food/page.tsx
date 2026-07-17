import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregnancy Safe Food Guide: Foods Checked",
  description: "Check if common foods are safe during pregnancy. Evidence-based safety ratings for seafood, dairy, meats, beverages, and more. ACOG and FDA sourced.",
  alternates: { canonical: "/pregnancy/safe-food" },
};

const FOODS = [
  { slug: "salmon", name: "Salmon", status: "safe" as const },
  { slug: "cod", name: "Cod", status: "safe" as const },
  { slug: "tuna", name: "Tuna", status: "caution" as const },
  { slug: "sushi", name: "Sushi / Raw Fish", status: "avoid" as const },
  { slug: "eggs", name: "Eggs", status: "caution" as const },
  { slug: "soft-cheese", name: "Soft Cheese (Brie, Feta)", status: "caution" as const },
  { slug: "steak", name: "Steak", status: "caution" as const },
  { slug: "peanut-butter", name: "Peanut Butter", status: "safe" as const },
  { slug: "pre-made-salads", name: "Pre-made Salads", status: "avoid" as const },
  { slug: "coffee", name: "Coffee", status: "caution" as const },
  { slug: "alcohol", name: "Alcohol", status: "avoid" as const },
];

const COLORS = {
  safe: "bg-green-50 border-green-200 text-green-700",
  caution: "bg-amber-50 border-amber-200 text-amber-700",
  avoid: "bg-red-50 border-red-200 text-red-700",
};
const LABELS = { safe: "✅ Safe", caution: "⚠️ Caution", avoid: "❌ Avoid" };

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
            <span>Safe Food Guide</span>
          </div>
          <h1 className="text-3xl md:text-[42px] font-extrabold text-slate-900 tracking-tight mb-3">Pregnancy Safe Food Guide</h1>
          <p className="text-[16px] text-slate-600 max-w-[560px] mb-4">Can I eat this while pregnant? Tap any food below for a detailed safety guide with nutritional info, preparation tips, and trimester-specific advice.</p>
          <Link href="/pregnancy/safe-food-checker" className="text-sm font-semibold text-brand-600 no-underline hover:underline">Or search foods with our interactive Safe Food Checker →</Link>
        </div>
        <div className="h-12" style={{ background: "linear-gradient(to bottom, transparent 0%, #F8FAFC 100%)" }} />
      </section>

      <div className="bg-slate-50 -mt-1">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/fish-seafood-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Fish &amp; Seafood During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Every species covered: FDA mercury categories, weekly limits, shrimp, crab, lobster, sardines, mackerel, smoked salmon, and safe cooking temperatures.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/meat-deli-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Meat &amp; Deli During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Deli meat, ham, bacon, pepperoni, hot dogs, jerky and liver: the 165°F rule, the nitrate truth, and the two exceptions heat cannot fix.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/drinks-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Drinks During Pregnancy →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Caffeine budgets, green tea and EGCG, chai, which herbal teas are safe, kombucha, soda, and why energy drinks are a clear avoid.</p>
            </div>
            <div className="rounded-xl border border-brand-200 bg-white p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-600 mb-1">In-depth guide</div>
              <Link href="/guides/everyday-foods-pregnancy" className="text-lg font-bold text-slate-900 no-underline hover:underline">Everyday Foods: Myths vs Facts →</Link>
              <p className="text-sm text-slate-600 mt-1 mb-0">Pineapple, papaya, honey, tofu, chocolate, spicy food, hummus and yogurt. Which fears are myths, and the few cautions that are real.</p>
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
