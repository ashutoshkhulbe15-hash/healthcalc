import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CalorieDeficitCalc } from "./CalorieDeficitCalc";
import { KeyFacts, ReferenceTable, Steps, WarningBox } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator for Weight Loss",
  description: "Free online calorie deficit calculator. Get your daily calorie target and goal date for weight loss, choose your rate of loss, and see safe deficit ranges.",
  alternates: { canonical: "/fitness/calorie-deficit-calculator" },
};

export default function Page() {
  const content = getArticleContent("08-calorie-deficit-calculator.md");
  const lastUpdated = getLastUpdated("08-calorie-deficit-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Calorie Deficit Calculator"
      description="Calculate your ideal deficit for sustainable weight loss. Set your goal, see your goal date, and get a daily calorie target backed by research."
      features={["🎯 Personalized target", "📅 Goal date projection", "📈 Rate-of-loss options", "📖 Evidence-based guide"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"Find your daily burn.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Split calories into macros.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Protein Calculator",desc:"Daily protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},
      ]}>
      <CalorieDeficitCalc />
      <QuickAnswer answer="A calorie deficit of 300-500 calories below your TDEE leads to steady fat loss of 0.5-1 lb per week. Enter your stats above to get your personal deficit target and projected goal date. Most people land between 1,500 and 2,200 calories per day for sustainable weight loss. Never eat below your BMR without medical supervision." />
      <SplitArticle content={content} injections={{
        0: <KeyFacts title="Calorie Deficit Basics" emoji="🔢" items={[
          { value: "3,500 cal", label: "Roughly equals 1 lb of body fat" },
          { value: "300-500", label: "Daily deficit for steady, sustainable loss" },
          { value: "0.5-1%", label: "Of body weight per week is the safe rate" },
          { value: "1.6-2.2 g/kg", label: "Protein to preserve muscle in a deficit" },
        ]} />,
        1: <Steps title="How to Use the Calculator" emoji="🧮" steps={[
          { heading: "Enter your stats", text: "Age, sex, height, weight, and activity level. The tool estimates your TDEE, the calories you burn per day." },
          { heading: "Choose your rate of loss", text: "From 0.25 kg/week (conservative) up to 1 kg/week (aggressive, short-term only)." },
          { heading: "Get your daily target", text: "The calculator subtracts the matching deficit from your TDEE." },
          { heading: "See your goal date", text: "It projects when you would reach your target weight at that pace." },
          { heading: "Track for two weeks, then adjust", text: "Use real results to fine-tune, rather than reacting to daily scale noise." },
        ]} />,
        2: <ReferenceTable title="Deficit Size Comparison" emoji="⚖️"
          headers={["Deficit", "Daily", "Weekly Loss", "Sustainability"]}
          rows={[
            ["Conservative", "200-300 cal", "~0.2-0.3 kg", "Excellent"],
            ["Moderate", "300-500 cal", "~0.3-0.5 kg", "Good"],
            ["Aggressive", "500-750 cal", "~0.5-0.75 kg", "Fair"],
            ["Very aggressive", "750-1,000+ cal", "~0.75-1+ kg", "Poor"],
          ]}
          highlightRow={1}
        />,
        3: <WarningBox title="Why Aggressive Deficits Backfire">
          <p>Large deficits trigger metabolic adaptation (your TDEE falls), accelerate muscle loss, and disrupt hunger and stress hormones, making the deficit harder to sustain and rebound more likely.</p>
          <p>Biggest Loser contestants who lost weight extremely fast still had resting metabolic rates suppressed by about 500 calories a day six years later. Slow and steady preserves both muscle and metabolism.</p>
        </WarningBox>,
      }} />
    </ToolPageShell>
  );
}
