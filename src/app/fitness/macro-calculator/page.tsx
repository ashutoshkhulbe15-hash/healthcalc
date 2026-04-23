import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { MacroCalc } from "./MacroCalc";
import { MacroSplitsSVG, ProteinSourcesSVG, TDEEComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Macro Calculator — Free Protein, Carbs & Fat Calculator by Goal",
  description: "Calculate your daily macros for weight loss, muscle building, keto, or maintenance. Personalized protein, carbs, and fat targets based on your TDEE and goals.",
  alternates: { canonical: "/fitness/macro-calculator" },
};

export default function Page() {
  const content = getArticleContent("06-macro-calculator.md");
  return (
    <ToolPageShell category="fitness" title="Macro Calculator"
      description="Personalized macro splits for keto, PCOS, balanced, and more. Get your protein, carbs, and fat targets."
      features={["🎯 Goal-based splits", "📊 Visual breakdown", "🥩 Protein priority", "📖 Evidence-based guide"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"Find your daily burn first.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Protein Calculator",desc:"Detailed protein needs.",href:"/fitness/protein-intake-calculator",category:"fitness"},
        {title:"Calorie Deficit",desc:"Set your deficit target.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
      ]}>
      <MacroCalc />
      <QuickAnswer answer="Start with protein (0.7-1g per lb bodyweight), then split remaining calories between carbs and fat based on your goal. For fat loss: 35% protein, 35% carbs, 30% fat. For muscle gain: 30/45/25. For keto: 25/5/70." />
      <SplitArticle content={content} injections={{
        0: <MacroSplitsSVG />,
        2: <ProteinSourcesSVG />,
        5: <TDEEComponentsSVG />,
      }} />
    </ToolPageShell>
  );
}
