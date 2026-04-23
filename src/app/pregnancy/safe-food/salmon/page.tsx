import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SalmonNutrientsSVG, SalmonCookTempSVG, FishMercuryRankSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Salmon During Pregnancy? Safety, Nutrients & Cooking Guide",
  description: "Salmon is one of the best foods during pregnancy — high omega-3, low mercury. Cooking temp, wild vs farmed, and how much to eat per week.",
  alternates: { canonical: "/pregnancy/safe-food/salmon" },
};

export default function Page() {
  const content = getArticleContent("food-salmon.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Salmon During Pregnancy?"
      description="Evidence-based safety guide for salmon. Nutritional benefits, safe cooking temperatures, wild vs farmed, and weekly serving limits."
      features={["🍽️ Safety rating", "🧠 Omega-3 data", "🌡️ Cooking guide", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Nutrition Guide",desc:"Full pregnancy nutrition.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — salmon is one of the BEST foods during pregnancy. High in omega-3 DHA for baby's brain development, low in mercury, and rich in protein and vitamin D. Cook to 145°F (63°C). Eat 2-3 servings per week. No raw/sashimi." />
      <SplitArticle content={content} injections={{
        1: <SalmonNutrientsSVG />,
        2: <SalmonCookTempSVG />,
        4: <FishMercuryRankSVG />,
      }} />
    </ToolPageShell>
  );
}
