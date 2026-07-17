import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SalmonNutrientsSVG, SalmonCookTempSVG, FishMercuryRankSVG, SalmonDHAComparisonSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Salmon During Pregnancy? DHA & Safety",
  description: "Salmon is one of the best foods during pregnancy — low mercury, high DHA, rich protein. FDA recommends 2-3 servings per week. Cooking temperature, wild vs. farmed, and trimester guidance.",
  alternates: { canonical: "/pregnancy/safe-food/salmon" },
};

export default function Page() {
  const content = getArticleContent("food-salmon.md");
  const lastUpdated = getLastUpdated("food-salmon.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Salmon During Pregnancy?"
      description="Salmon is actively recommended during pregnancy by FDA and ACOG — low mercury, highest DHA of any common food. Cook to 145°F, eat 2-3 servings per week."
      features={["🐟 Low mercury fish", "🧠 DHA for brain development", "🌡️ Cooking guide", "📊 Nutrition data"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Sushi Safety",desc:"Raw vs. cooked guide.",href:"/pregnancy/safe-food/sushi",category:"pregnancy"},
        {title:"Pregnancy Weight Gain",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Cooked salmon is considered safe and actively recommended during pregnancy — 2-3 servings per week per FDA guidelines. Salmon has among the lowest mercury levels of any fish (0.022 ppm) and is the richest common food source of DHA for fetal brain development. Cook to 145°F. Avoid raw salmon (sashimi, poke, lox)." />
      <SplitArticle content={content} injections={{
        1: <SalmonDHAComparisonSVG />,
        2: <FishMercuryRankSVG />,
        3: <SalmonCookTempSVG />,
        4: <SalmonNutrientsSVG />,
      }} />
    </ToolPageShell>
  );
}
