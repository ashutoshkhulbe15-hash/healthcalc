import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { TunaMercuryLevelsSVG, TunaVsSalmonSVG, WeeklyFishLimitSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can You Eat Tuna While Pregnant? Mercury by Type",
  description: "Light tuna (skipjack): 2-3 servings/week. Albacore: 1 serving/week. Bigeye: avoid. Mercury levels by tuna type, FDA limits, and how much canned tuna is safe.",
  alternates: { canonical: "/pregnancy/safe-food/tuna" },
};

export default function Page() {
  const content = getArticleContent("food-tuna.md");
  const lastUpdated = getLastUpdated("food-tuna.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Tuna During Pregnancy?"
      description="Evidence-based guide to tuna safety during pregnancy. Mercury levels by type, safe serving limits, and better alternatives."
      features={["🍽️ Safety rating", "📊 Mercury data", "🤰 Trimester guidance", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Light canned tuna (skipjack) is safe 2-3 times per week during pregnancy. Avoid albacore/white tuna and bigeye tuna — they contain 3-5x more mercury. Salmon is a safer, higher-omega-3 alternative." />
      <SplitArticle content={content} injections={{
        1: <TunaMercuryLevelsSVG />,
        2: <WeeklyFishLimitSVG />,
        3: <TunaVsSalmonSVG />,
      }} />
    </ToolPageShell>
  );
}
