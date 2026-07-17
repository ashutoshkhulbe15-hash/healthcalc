import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ProteinCalc } from "./ProteinCalc";
import { ProteinByGoalSVG, ProteinTimingSVG, ProteinSourcesSVG, ProteinMythsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Protein Intake Calculator — How Much Do I Need?",
  description: "Calculate daily protein needs by weight, activity, and goal. RDA 0.8g/kg is insufficient for active people. Research supports 1.6-2.2g/kg for muscle building.",
  alternates: { canonical: "/fitness/protein-intake-calculator" },
};

export default function Page() {
  const content = getArticleContent("14-protein-intake-calculator.md");
  const lastUpdated = getLastUpdated("14-protein-intake-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Protein Intake Calculator"
      description="Daily protein needs based on weight, activity level, and goals. Evidence-based recommendations for muscle gain, weight loss, and health."
      features={["🥩 Goal-based targets", "📊 Per-meal breakdown", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"Macro Calculator",desc:"Full macro split.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Calorie Deficit",desc:"Weight loss target.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
      ]}>
      <ProteinCalc />
      <QuickAnswer answer="Most active people need 0.7-1.0g protein per pound of bodyweight. For a 170 lb person, that is 119-170g daily. During weight loss, go higher (0.8-1.2g/lb) to preserve muscle. The RDA of 0.36g/lb is a bare minimum, not optimal." />
      <SplitArticle content={content} injections={{
        0: <ProteinByGoalSVG />,
        2: <ProteinTimingSVG />,
        4: <ProteinSourcesSVG />,
        5: <ProteinMythsSVG />,
      }} />
    </ToolPageShell>
  );
}
