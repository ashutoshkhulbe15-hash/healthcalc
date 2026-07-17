import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { LbmCalc } from "./LbmCalc";
import { LBMComponentsSVG, LBMUseCasesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Lean Body Mass Calculator — Boer Formula",
  description: "Calculate your lean body mass using the Boer formula or body fat percentage. Use LBM for precise protein targeting, metabolic rate estimation, and tracking body recomposition progress.",
  alternates: { canonical: "/fitness/lean-body-mass-calculator" },
};

export default function Page() {
  const content = getArticleContent("23-lean-body-mass-calculator.md");
  const lastUpdated = getLastUpdated("23-lean-body-mass-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Lean Body Mass Calculator"
      description="Calculate your lean body mass — everything that isn't fat. Use this for precise protein targeting and tracking body recomposition."
      features={["🔢 Boer formula", "📊 Body fat method", "💪 Protein targeting", "📈 Recomp tracking"]}
      relatedTools={[
        {title:"Body Fat Calculator",desc:"Navy method body fat estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Set macros from your LBM.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Total daily energy expenditure.",href:"/fitness/tdee-calculator",category:"fitness"},
      ]}>
      <LbmCalc />
      <QuickAnswer answer="Lean body mass = total weight minus fat. If you weigh 80 kg at 20% body fat, your LBM is 64 kg. Use LBM — not total weight — for precise protein targets (2.0-2.4g per kg LBM during a cut) and metabolic rate calculations." />
      <SplitArticle content={content} injections={{
        1: <LBMComponentsSVG />,
        3: <LBMUseCasesSVG />,
      }} />
    </ToolPageShell>
  );
}
