import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CalorieDeficitCalc } from "./CalorieDeficitCalc";
import { DeficitMechanismSVG, DeficitSizeComparisonSVG, TDEEComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator for Weight Loss — How Many Calories to Lose Weight",
  description: "Calculate your optimal calorie deficit for sustainable weight loss. Choose your rate of loss (0.25-1 kg/week), get daily calorie target and timeline to goal weight.",
  alternates: { canonical: "/fitness/calorie-deficit-calculator" },
};

export default function Page() {
  const content = getArticleContent("08-calorie-deficit-calculator.md");
  return (
    <ToolPageShell category="fitness" title="Calorie Deficit Calculator"
      description="Calculate your ideal deficit for sustainable weight loss. Set your goal, see your timeline, and get a daily calorie target backed by research."
      features={["🎯 Personalized target", "📊 Timeline projection", "📈 Rate-of-loss options", "📖 2,500-word guide"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"Find your daily burn.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Split calories into macros.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Protein Calculator",desc:"Daily protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},
      ]}>
      <CalorieDeficitCalc />
      <QuickAnswer answer="A calorie deficit of 300-500 calories below your TDEE leads to steady fat loss of 0.5-1 lb per week. Enter your stats above to find your personal deficit target. Most people need 1,500-2,200 calories per day for sustainable weight loss." />
      <SplitArticle content={content} injections={{
        0: <DeficitMechanismSVG />,
        2: <TDEEComponentsSVG />,
        4: <DeficitSizeComparisonSVG />,
      }} />
    </ToolPageShell>
  );
}
