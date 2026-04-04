import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregnancy Safe Food Guide — Is It Safe to Eat During Pregnancy?",
  description: "Check if 50+ foods are safe during pregnancy. Evidence-based safety ratings for seafood, dairy, meats, beverages, and more. ACOG and FDA sourced.",
};

const FOODS = [
  { slug: "salmon", name: "Salmon", status: "safe" as const },
  { slug: "shrimp", name: "Shrimp", status: "safe" as const },
  { slug: "crab", name: "Crab & Lobster", status: "safe" as const },
  { slug: "sardines", name: "Sardines", status: "safe" as const },
  { slug: "cod", name: "Cod", status: "safe" as const },
  { slug: "tilapia", name: "Tilapia", status: "safe" as const },
  { slug: "catfish", name: "Catfish", status: "safe" as const },
  { slug: "prawns", name: "Prawns", status: "safe" as const },
  { slug: "tuna", name: "Tuna", status: "caution" as const },
  { slug: "mackerel", name: "Mackerel", status: "caution" as const },
  { slug: "oysters", name: "Oysters", status: "caution" as const },
  { slug: "sushi", name: "Sushi / Raw Fish", status: "avoid" as const },
  { slug: "smoked-salmon", name: "Smoked Salmon", status: "avoid" as const },
  { slug: "eggs", name: "Eggs", status: "caution" as const },
  { slug: "cream-cheese", name: "Cream Cheese", status: "safe" as const },
  { slug: "yogurt", name: "Yogurt", status: "safe" as const },
  { slug: "mozzarella", name: "Mozzarella", status: "safe" as const },
  { slug: "parmesan", name: "Parmesan", status: "safe" as const },
  { slug: "soft-cheese", name: "Soft Cheese (Brie, Feta)", status: "caution" as const },
  { slug: "goat-cheese", name: "Goat Cheese", status: "caution" as const },
  { slug: "ricotta", name: "Ricotta", status: "caution" as const },
  { slug: "ice-cream", name: "Ice Cream", status: "caution" as const },
  { slug: "steak", name: "Steak", status: "caution" as const },
  { slug: "bacon", name: "Bacon", status: "caution" as const },
  { slug: "ham", name: "Ham", status: "caution" as const },
  { slug: "deli-meats", name: "Deli Meats / Cold Cuts", status: "caution" as const },
  { slug: "hot-dogs", name: "Hot Dogs", status: "caution" as const },
  { slug: "pepperoni", name: "Pepperoni", status: "caution" as const },
  { slug: "liver", name: "Liver", status: "avoid" as const },
  { slug: "honey", name: "Honey", status: "safe" as const },
  { slug: "pineapple", name: "Pineapple", status: "safe" as const },
  { slug: "peanut-butter", name: "Peanut Butter", status: "safe" as const },
  { slug: "tofu", name: "Tofu & Edamame", status: "safe" as const },
  { slug: "hummus", name: "Hummus", status: "caution" as const },
  { slug: "papaya", name: "Papaya", status: "caution" as const },
  { slug: "mayonnaise", name: "Mayonnaise", status: "safe" as const },
  { slug: "chocolate", name: "Chocolate", status: "caution" as const },
  { slug: "spicy-food", name: "Spicy Food", status: "safe" as const },
  { slug: "sprouts", name: "Sprouts", status: "avoid" as const },
  { slug: "pre-made-salads", name: "Pre-made Salads", status: "avoid" as const },
  { slug: "coffee", name: "Coffee", status: "caution" as const },
  { slug: "green-tea", name: "Green Tea", status: "caution" as const },
  { slug: "herbal-tea", name: "Herbal Tea", status: "caution" as const },
  { slug: "soda", name: "Soda", status: "caution" as const },
  { slug: "alcohol", name: "Alcohol", status: "avoid" as const },
  { slug: "kombucha", name: "Kombucha", status: "avoid" as const },
  { slug: "energy-drinks", name: "Energy Drinks", status: "avoid" as const },
  { slug: "unpasteurized-juice", name: "Unpasteurized Juice", status: "avoid" as const },
  { slug: "protein-powder", name: "Protein Powder", status: "caution" as const },
  { slug: "artificial-sweeteners", name: "Artificial Sweeteners", status: "caution" as const },
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
