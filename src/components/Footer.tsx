import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 no-underline mb-3">
              <div className="w-[30px] h-[30px] rounded-lg bg-gradient-to-br from-brand-600 to-brand-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M2 13L6 7L10 11L16 4" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[17px] font-bold text-white">ProHealthIt</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
              Evidence-based health guides with interactive tools. Cited from WHO, NIH, and peer-reviewed research.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Categories</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/pregnancy" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Pregnancy</Link>
              <Link href="/fitness" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Fitness & Nutrition</Link>
              <Link href="/body-metrics" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Body Metrics</Link>
              <Link href="/mental-health" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Mental Health</Link>
              <Link href="/conditions" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Conditions</Link>
            </div>
          </div>

          {/* Popular Tools */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Popular Tools</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/fitness/tdee-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">TDEE Calculator</Link>
              <Link href="/body-metrics/bmi-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">BMI Calculator</Link>
              <Link href="/fitness/macro-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Macro Calculator</Link>
              <Link href="/pregnancy/due-date-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Due Date Calculator</Link>
              <Link href="/mental-health/stress-level-test" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Stress Level Test</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Resources</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/tools" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">All Tools</Link>
              <Link href="/pregnancy/safe-food" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Pregnancy Safe Food Guide</Link>
              <Link href="/guides/what-a1c-is-diabetic" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">A1C & Diabetes Guide</Link>
              <Link href="/guides/hcg-levels-by-week" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">HCG Levels by Week</Link>
              <Link href="/blog/protein-how-much-you-need" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Protein Guide</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Company</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Contact</Link>
              <Link href="/privacy" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Privacy Policy</Link>
              <Link href="/disclaimer" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Medical Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-[13px] text-slate-600">© 2026 ProHealthIt. All rights reserved.</span>
          <span className="text-xs text-slate-600">For informational purposes only. Not a substitute for medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
