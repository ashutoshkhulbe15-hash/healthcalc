import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
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
            <p className="text-sm text-slate-500 leading-relaxed max-w-[260px]">
              Evidence-based health guides with interactive tools. Cited from WHO, NIH, and peer-reviewed research.
            </p>
          </div>

          {/* Pregnancy & Fitness */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Pregnancy</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/pregnancy/weight-gain-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Weight Gain Tracker</Link>
              <Link href="/pregnancy/due-date-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Due Date Calculator</Link>
              <Link href="/pregnancy/ovulation-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Ovulation Calculator</Link>
              <Link href="/pregnancy/safe-food-checker" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Safe Food Checker</Link>
              <Link href="/pregnancy/hcg-doubling-time-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">HCG Tracker</Link>
            </div>
          </div>

          {/* Fitness & Body */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Nutrition & Fitness</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/fitness/tdee-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">TDEE & Calories</Link>
              <Link href="/fitness/macro-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Macro Guide</Link>
              <Link href="/fitness/protein-intake-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Protein Needs</Link>
              <Link href="/body-metrics/bmi-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">BMI Guide</Link>
              <Link href="/fitness/body-fat-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Body Composition</Link>
            </div>
          </div>

          {/* Mental Health & More */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Wellness & Conditions</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/mental-health/stress-level-test" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Stress Assessment</Link>
              <Link href="/mental-health/anxiety-self-assessment" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Anxiety Screening</Link>
              <Link href="/mental-health/sleep-quality-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Sleep Quality</Link>
              <Link href="/conditions/a1c-blood-sugar-converter" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">A1C & Blood Sugar</Link>
              <Link href="/conditions/gfr-calculator" className="text-sm text-slate-500 hover:text-brand-400 no-underline transition-colors">Kidney Health</Link>
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
