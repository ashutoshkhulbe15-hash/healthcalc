import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { TdeeCalc } from "./TdeeCalc";
import { TDEEFormulaFlowSVG, TDEEComponentsSVG, ActivityMultipliersSVG, TDEEGoalsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "TDEE Calculator — Mifflin-St Jeor Total Daily Energy Expenditure",
  description: "Calculate your TDEE using the Mifflin-St Jeor equation. Get BMR, maintenance calories, and targets for weight loss or muscle gain. Free, evidence-based, with 2,300-word guide.",
  alternates: { canonical: "/fitness/tdee-calculator" },
};

export default function Page() {
  const content = getArticleContent("05-tdee-calculator.md");
  return (
    <ToolPageShell category="fitness" title="TDEE Calculator"
      description="Find your Total Daily Energy Expenditure — the number of calories you burn per day. Based on the Mifflin-St Jeor equation."
      features={["🔬 Mifflin-St Jeor equation", "📊 BMR + TDEE results", "🎯 Cut/bulk/maintain targets", "📖 2,300-word guide"]}
      relatedTools={[
        {title:"Macro Calculator",desc:"Split calories into macros.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Calorie Deficit",desc:"Find your optimal deficit.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
        {title:"Protein Calculator",desc:"Daily protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},
      ]}>
      <TdeeCalc />
      <QuickAnswer answer="TDEE is the total calories you burn per day — BMR + activity. For a 30-year-old, 180cm, 85kg moderately active man, TDEE is about 2,821 calories. Eat below it to lose fat, above it to gain muscle, at it to maintain." />
      <SplitArticle content={content} injections={{
        0: <TDEEComponentsSVG />,
        1: <TDEEFormulaFlowSVG />,
        2: <ActivityMultipliersSVG />,
        3: <TDEEGoalsSVG />,
      }} />
    </ToolPageShell>
  );
}
