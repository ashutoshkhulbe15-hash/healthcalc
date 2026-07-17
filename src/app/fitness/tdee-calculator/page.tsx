import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { TDEEFormulaFlowSVG, ActivityMultipliersSVG, TDEEGoalsSVG, TDEEComponentsBreakdownSVG, CalibrationMethodSVG, DeficitSurplusRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "TDEE Calculator — Mifflin-St Jeor Formula",
  description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation. Find your maintenance calories, then set fat loss or muscle gain targets. Includes 2-week calibration method.",
  alternates: { canonical: "/fitness/tdee-calculator" },
};

export default function Page() {
  const content = getArticleContent("05-tdee-calculator.md");
  const lastUpdated = getLastUpdated("05-tdee-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="TDEE Calculator"
      description="Calculate your Total Daily Energy Expenditure — the number of calories your body burns each day. Set accurate targets for fat loss, muscle gain, or maintenance."
      features={["🔢 Mifflin-St Jeor formula", "📊 Activity level guide", "🎯 Cut / maintain / bulk targets", "📈 2-week calibration method"]}
      relatedTools={[
        {title:"Macro Calculator",desc:"Split your TDEE into protein, carbs, fat.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Calorie Deficit Calculator",desc:"Precise deficit for your goal date.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
        {title:"BMR Calculator",desc:"Your resting metabolic rate.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},
      ]}>
      <QuickAnswer answer="Your TDEE is the total calories you burn per day — BMR + digestion + daily movement + exercise. Eat below it to lose fat, above it to gain muscle, at it to maintain. Most people who 'eat at their TDEE' and don't maintain are overestimating their activity level by one tier." />
      <SplitArticle content={content} injections={{
        0: <TDEEComponentsBreakdownSVG />,
        1: <ActivityMultipliersSVG />,
        2: <TDEEFormulaFlowSVG />,
        3: <DeficitSurplusRangesSVG />,
        4: <CalibrationMethodSVG />,
        5: <TDEEGoalsSVG />,
      }} />
    </ToolPageShell>
  );
}
