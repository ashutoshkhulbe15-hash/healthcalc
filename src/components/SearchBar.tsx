"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type SearchItem = { title: string; href: string; category: string; keywords: string };

const SEARCH_DATA: SearchItem[] = [
  // Pregnancy tools
  { title: "Pregnancy Weight Gain Calculator", href: "/pregnancy/weight-gain-calculator", category: "Pregnancy", keywords: "pregnancy weight gain iom" },
  { title: "Due Date Calculator", href: "/pregnancy/due-date-calculator", category: "Pregnancy", keywords: "due date edd naegele delivery" },
  { title: "Ovulation Calculator", href: "/pregnancy/ovulation-calculator", category: "Pregnancy", keywords: "ovulation fertile window cycle period" },
  { title: "HCG Doubling Time Calculator", href: "/pregnancy/hcg-doubling-time-calculator", category: "Pregnancy", keywords: "hcg doubling beta hormone" },
  { title: "Contraction Timer", href: "/pregnancy/contraction-timer", category: "Pregnancy", keywords: "contraction timer 511 labor braxton hicks" },
  { title: "Safe Food Checker", href: "/pregnancy/safe-food-checker", category: "Pregnancy", keywords: "safe food pregnancy eat avoid" },
  { title: "Fetal Weight Percentile", href: "/pregnancy/fetal-weight-percentile", category: "Pregnancy", keywords: "fetal weight baby size percentile" },
  { title: "Baby Growth Percentile", href: "/pregnancy/baby-growth-percentile", category: "Pregnancy", keywords: "baby growth chart who cdc percentile" },
  // Fitness tools
  { title: "TDEE Calculator", href: "/fitness/tdee-calculator", category: "Fitness", keywords: "tdee total daily energy expenditure calories maintenance" },
  { title: "Macro Calculator", href: "/fitness/macro-calculator", category: "Fitness", keywords: "macros protein carbs fat ratio diet" },
  { title: "Calorie Deficit Calculator", href: "/fitness/calorie-deficit-calculator", category: "Fitness", keywords: "calorie deficit weight loss how many calories" },
  { title: "Body Fat Calculator", href: "/fitness/body-fat-calculator", category: "Fitness", keywords: "body fat navy method percentage" },
  { title: "Protein Intake Calculator", href: "/fitness/protein-intake-calculator", category: "Fitness", keywords: "protein how much need daily grams" },
  { title: "One Rep Max Calculator", href: "/fitness/one-rep-max-calculator", category: "Fitness", keywords: "one rep max 1rm strength" },
  // Body Metrics
  { title: "BMI Calculator", href: "/body-metrics/bmi-calculator", category: "Body Metrics", keywords: "bmi body mass index weight height" },
  { title: "BMI Calculator for Teens", href: "/body-metrics/bmi-calculator-teens", category: "Body Metrics", keywords: "bmi teens teenager cdc percentile adolescent" },
  { title: "BMR Calculator", href: "/body-metrics/bmr-calculator", category: "Body Metrics", keywords: "bmr basal metabolic rate resting" },
  { title: "Ideal Weight Calculator", href: "/body-metrics/ideal-weight-calculator", category: "Body Metrics", keywords: "ideal weight devine robinson miller hamwi" },
  { title: "Waist-to-Hip Ratio", href: "/body-metrics/waist-to-hip-ratio-calculator", category: "Body Metrics", keywords: "waist hip ratio cardiovascular risk who" },
  // Mental Health
  { title: "Anxiety Self-Assessment (GAD-7)", href: "/mental-health/anxiety-self-assessment", category: "Mental Health", keywords: "anxiety gad7 screening test generalized worry" },
  { title: "Stress Level Test (PSS-10)", href: "/mental-health/stress-level-test", category: "Mental Health", keywords: "stress level test pss perceived" },
  { title: "Burnout Quiz", href: "/mental-health/burnout-quiz", category: "Mental Health", keywords: "burnout quiz maslach exhaustion cynicism" },
  { title: "ADHD Self-Assessment (ASRS)", href: "/mental-health/adhd-self-assessment", category: "Mental Health", keywords: "adhd asrs screening adult attention deficit" },
  { title: "Sleep Quality Calculator", href: "/mental-health/sleep-quality-calculator", category: "Mental Health", keywords: "sleep quality psqi pittsburgh insomnia" },
  { title: "Sleep Calculator", href: "/mental-health/sleep-calculator", category: "Mental Health", keywords: "sleep calculator bedtime wake cycles" },
  { title: "Postpartum Depression (EPDS)", href: "/mental-health/postpartum-depression-screening", category: "Mental Health", keywords: "postpartum depression epds edinburgh screening ppd" },
  // Conditions
  { title: "A1C Blood Sugar Converter", href: "/conditions/a1c-blood-sugar-converter", category: "Conditions", keywords: "a1c hba1c blood sugar glucose diabetes conversion" },
  { title: "GFR Calculator", href: "/conditions/gfr-calculator", category: "Conditions", keywords: "gfr kidney function ckd epi creatinine" },
  { title: "Cholesterol Ratio Calculator", href: "/conditions/cholesterol-ratio-calculator", category: "Conditions", keywords: "cholesterol ratio hdl ldl triglycerides heart" },
  { title: "Vitamin D Calculator", href: "/conditions/vitamin-d-calculator", category: "Conditions", keywords: "vitamin d level supplement deficiency" },
  { title: "Thyroid Function Calculator", href: "/conditions/thyroid-function-calculator", category: "Conditions", keywords: "thyroid tsh function hypo hyper" },
  // Guides
  { title: "HCG Levels by Week", href: "/guides/hcg-levels-by-week", category: "Guide", keywords: "hcg levels week normal range doubling pregnancy blood test" },
  { title: "Blood Sugar Levels by Age", href: "/guides/blood-sugar-levels-by-age", category: "Guide", keywords: "blood sugar levels age normal range fasting glucose" },
  { title: "Normal GFR by Age", href: "/guides/normal-gfr-by-age", category: "Guide", keywords: "gfr age normal kidney function stages" },
  { title: "Anxiety vs Stress", href: "/guides/anxiety-vs-stress-difference", category: "Guide", keywords: "anxiety vs stress difference tell apart" },
  // Safe Foods (top ones)
  { title: "Coffee During Pregnancy", href: "/pregnancy/safe-food/coffee", category: "Safe Food", keywords: "coffee caffeine pregnancy safe limit 200mg" },
  { title: "Sushi During Pregnancy", href: "/pregnancy/safe-food/sushi", category: "Safe Food", keywords: "sushi raw fish cooked pregnancy safe" },
  { title: "Salmon During Pregnancy", href: "/pregnancy/safe-food/salmon", category: "Safe Food", keywords: "salmon fish pregnancy dha omega mercury" },
  { title: "Soft Cheese During Pregnancy", href: "/pregnancy/safe-food/soft-cheese", category: "Safe Food", keywords: "soft cheese brie feta pasteurized listeria pregnancy" },
  { title: "Steak During Pregnancy", href: "/pregnancy/safe-food/steak", category: "Safe Food", keywords: "steak beef pregnancy temperature well done" },
  { title: "Pregnancy Safe Food Guide", href: "/pregnancy/safe-food", category: "Safe Food", keywords: "safe food pregnancy guide all foods list" },
];

const CAT_COLORS: Record<string, string> = {
  Pregnancy: "#EC4899",
  Fitness: "#8B5CF6",
  "Body Metrics": "#10B981",
  "Mental Health": "#3B82F6",
  Conditions: "#F59E0B",
  Guide: "#0F766E",
  "Safe Food": "#EC4899",
};

export function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results = query.trim().length >= 2
    ? SEARCH_DATA.filter((item) => {
        const q = query.toLowerCase();
        return item.title.toLowerCase().includes(q) || item.keywords.toLowerCase().includes(q);
      }).slice(0, 8)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedIdx(-1);
  }, [query]);

  const navigate = (href: string) => {
    setOpen(false);
    setQuery("");
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIdx >= 0 && results[selectedIdx]) {
        navigate(results[selectedIdx].href);
      } else if (results.length > 0) {
        navigate(results[0].href);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  };

  return (
    <div ref={wrapRef} className="relative ml-1">
      {open ? (
        <div>
          <div className="flex items-center gap-1">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" className="absolute left-2.5 pointer-events-none">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search tools & guides..."
              className="w-[220px] h-8 pl-8 pr-8 text-[13px] border border-slate-300 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 bg-white"
              autoFocus
            />
            <button
              type="button"
              onClick={() => { setOpen(false); setQuery(""); }}
              className="absolute right-1.5 p-1 text-slate-300 hover:text-slate-500"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Dropdown results */}
          {query.trim().length >= 2 && (
            <div className="absolute top-full left-0 mt-1.5 w-[320px] bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-200 py-1 z-50 max-h-[400px] overflow-y-auto">
              {results.length > 0 ? (
                results.map((item, i) => (
                  <button
                    key={item.href}
                    onClick={() => navigate(item.href)}
                    className={`w-full text-left px-4 py-2.5 flex items-start gap-3 transition-colors ${
                      i === selectedIdx ? "bg-brand-50" : "hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider mt-0.5 shrink-0 w-[70px]"
                      style={{ color: CAT_COLORS[item.category] || "#64748B" }}
                    >
                      {item.category}
                    </span>
                    <span className="text-[13px] text-slate-700 font-medium leading-snug">{item.title}</span>
                  </button>
                ))
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-[13px] text-slate-400">No results for &ldquo;{query}&rdquo;</p>
                  <a href="/tools" className="text-[12px] text-brand-600 no-underline hover:underline mt-1 block">Browse all tools →</a>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
          aria-label="Search tools"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      )}
    </div>
  );
}
