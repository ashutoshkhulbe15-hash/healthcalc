"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const NAV_LINKS = [
  {
    label: "Pregnancy",
    children: [
      { label: "Weight Gain Calculator", href: "/pregnancy/weight-gain-calculator" },
      { label: "Due Date Calculator", href: "/pregnancy/due-date-calculator" },
      { label: "Ovulation Calculator", href: "/pregnancy/ovulation-calculator" },
      { label: "HCG Doubling Time", href: "/pregnancy/hcg-doubling-time-calculator" },
      { label: "Safe Food Checker", href: "/pregnancy/safe-food-checker" },
      { label: "Contraction Timer", href: "/pregnancy/contraction-timer" },
      { label: "IVF Due Date", href: "/pregnancy/ivf-due-date-calculator" },
      { label: "Fetal Weight Percentile", href: "/pregnancy/fetal-weight-percentile" },
      { label: "Baby Growth Percentile", href: "/pregnancy/baby-growth-percentile" },
    ],
  },
  {
    label: "Fitness",
    children: [
      { label: "TDEE Calculator", href: "/fitness/tdee-calculator" },
      { label: "Macro Calculator", href: "/fitness/macro-calculator" },
      { label: "Calorie Deficit", href: "/fitness/calorie-deficit-calculator" },
      { label: "Body Fat Calculator", href: "/fitness/body-fat-calculator" },
      { label: "Protein Calculator", href: "/fitness/protein-intake-calculator" },
      { label: "One Rep Max", href: "/fitness/one-rep-max-calculator" },
      { label: "Lean Body Mass", href: "/fitness/lean-body-mass-calculator" },
      { label: "PCOS Macros", href: "/fitness/macro-calculator-pcos" },
    ],
  },
  {
    label: "Body Metrics",
    children: [
      { label: "BMI Calculator", href: "/body-metrics/bmi-calculator" },
      { label: "BMR Calculator", href: "/body-metrics/bmr-calculator" },
      { label: "Ideal Weight", href: "/body-metrics/ideal-weight-calculator" },
      { label: "BMI for Teens", href: "/body-metrics/bmi-calculator-teens" },
      { label: "Body Frame Size", href: "/body-metrics/body-frame-size-calculator" },
      { label: "Calories Women 50+", href: "/body-metrics/calorie-calculator-women-over-50" },
      { label: "TDEE for Teens", href: "/body-metrics/tdee-calculator-teens" },
      { label: "Protein for Seniors", href: "/body-metrics/protein-needs-seniors" },
    ],
  },
  {
    label: "Mental Health",
    children: [
      { label: "Stress Level Test", href: "/mental-health/stress-level-test" },
      { label: "Anxiety Assessment", href: "/mental-health/anxiety-self-assessment" },
      { label: "Burnout Quiz", href: "/mental-health/burnout-quiz" },
      { label: "Sleep Quality", href: "/mental-health/sleep-quality-calculator" },
      { label: "ADHD Screening", href: "/mental-health/adhd-self-assessment" },
    ],
  },
];

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <nav ref={navRef} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2.5 no-underline shrink-0">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 13L6 7L10 11L16 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[19px] font-bold text-slate-900 tracking-tight">ProHealthIt</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="relative">
              <button
                onClick={() => toggleMenu(item.label)}
                className={`px-3 py-2 text-[13px] font-medium transition-colors rounded-lg flex items-center gap-1 ${
                  openMenu === item.label ? "text-brand-600 bg-brand-50" : "text-slate-500 hover:text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
                <svg className={`w-3 h-3 opacity-50 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                  <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {openMenu === item.label && (
                <div className="absolute top-full left-0 mt-1.5 w-[230px] bg-white rounded-xl shadow-xl shadow-slate-200/60 border border-slate-200 py-1.5 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-[13px] text-slate-600 hover:text-brand-600 hover:bg-brand-50 no-underline transition-colors"
                      onClick={() => { setOpenMenu(null); }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/tools" className="ml-1 px-3 py-2 text-[13px] font-semibold text-brand-600 hover:text-brand-700 transition-colors no-underline rounded-lg hover:bg-brand-50">
            All Tools
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => { setMobileOpen(!mobileOpen); setOpenMenu(null); }}
          className="lg:hidden p-2 text-slate-500 hover:text-slate-700"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 max-h-[75vh] overflow-y-auto shadow-lg">
          {NAV_LINKS.map((item) => (
            <div key={item.label} className="mb-5">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">{item.label}</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block py-2 text-[13px] text-slate-600 hover:text-brand-600 no-underline"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link href="/tools" className="block py-2.5 text-[13px] font-bold text-brand-600 no-underline border-t border-slate-100 mt-2 pt-4"
            onClick={() => setMobileOpen(false)}>
            View All Tools →
          </Link>
        </div>
      )}
    </nav>
  );
}
