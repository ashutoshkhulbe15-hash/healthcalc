import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { IdealWeightCalc } from "./IdealWeightCalc";
import { IdealWeightFormulasSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator — 4 Formulas Compared",
  description: "Calculate ideal body weight using Devine, Robinson, Miller, and Hamwi formulas. See all four results side by side. Includes adjusted body weight calculation and formula origins.",
  alternates: { canonical: "/body-metrics/ideal-weight-calculator" },
};

export default function Page() {
  const content = getArticleContent("20-ideal-weight-calculator.md");
  const lastUpdated = getLastUpdated("20-ideal-weight-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Ideal Weight Calculator"
      description="Four validated formulas give you a range — not a single number. Because there is no single 'ideal weight.'"
      features={["📊 4 formulas compared", "🔢 Adjusted body weight", "📋 Formula origins", "⚖️ Range, not a target"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Body mass index assessment.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Lean Body Mass Calculator",desc:"What you weigh minus fat.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
      ]}>
      <IdealWeightCalc />
      <QuickAnswer answer="Four clinical formulas (Devine, Robinson, Miller, Hamwi) estimate ideal body weight from height and sex. They all give different numbers — the range across all four is more useful than any single result. These formulas don't account for muscle mass, frame size, or fitness level." />
      <SplitArticle content={content} injections={{
        1: <IdealWeightFormulasSVG />,
      }} />
    </ToolPageShell>
  );
}
