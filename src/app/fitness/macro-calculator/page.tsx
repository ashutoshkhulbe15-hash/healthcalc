import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { MacroCalc } from "./MacroCalc";
import { MacroSplitsSVG, ProteinSourcesSVG, TDEEComponentsSVG, MacroMistakesSVG, ProteinNeedsByGoalSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Macro Calculator — Protein, Carbs & Fat Targets",
  description: "Calculate your daily macros for fat loss, muscle gain, or maintenance. Evidence-based protein, carb, and fat targets using Mifflin-St Jeor TDEE. Includes macro splits by goal and common mistakes.",
  alternates: { canonical: "/fitness/macro-calculator" },
};

export default function Page() {
  const content = getArticleContent("06-macro-calculator.md");
  const lastUpdated = getLastUpdated("06-macro-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Macro Calculator"
      description="Get personalized daily targets for protein, carbs, and fat based on your stats and goal. Whether you are cutting, bulking, or maintaining — the numbers start here."
      features={["🔢 Mifflin-St Jeor based", "🎯 Goal-specific splits", "💪 Protein optimization", "📊 Evidence-based ratios"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"Find your maintenance calories first.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Protein Intake Calculator",desc:"Detailed protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},
        {title:"Calorie Deficit Calculator",desc:"Set your deficit precisely.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
      ]}>
      <MacroCalc />
      <QuickAnswer answer="Protein first: 0.7–1.0g per pound of bodyweight for active people. Then split remaining calories between carbs and fat based on your goal — more carbs for performance and muscle gain, more fat for keto or appetite control. Hit protein daily; carbs and fat are flexible within ±10g." />
      <SplitArticle content={content} injections={{
        0: <TDEEComponentsSVG />,
        2: <MacroSplitsSVG />,
        3: <ProteinNeedsByGoalSVG />,
        4: <MacroMistakesSVG />,
        5: <ProteinSourcesSVG />,
      }} />
    </ToolPageShell>
  );
}
