import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ShrimpNutrientsSVG, ShrimpCookingSVG, FishMercuryRankSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Shrimp During Pregnancy? Mercury, Nutrients & Safety",
  description: "Shrimp is one of the safest seafood choices during pregnancy. Low mercury, high protein, rich in iodine. Cooking guide and weekly limits.",
  alternates: { canonical: "/pregnancy/safe-food/shrimp" },
};
export default function Page() {
  const content = getArticleContent("food-shrimp.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Shrimp During Pregnancy?"
      description="Evidence-based shrimp safety guide. Mercury levels, nutritional benefits, safe cooking methods, and serving limits."
      features={["🦐 Safety rating","📊 Nutrient data","🌡️ Cooking guide","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Salmon Guide",desc:"Another great fish option.",href:"/pregnancy/safe-food/salmon",category:"pregnancy"},
        {title:"Tuna Guide",desc:"Mercury comparison.",href:"/pregnancy/safe-food/tuna",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — shrimp is one of the safest seafood choices during pregnancy. Very low mercury (FDA 'best choice' category), high protein, and the richest source of iodine. Cook to 145°F until opaque. Eat 2-3 servings per week. No raw shrimp." />
      <SplitArticle content={content} injections={{
        2: <ShrimpCookingSVG />,
        3: <ShrimpNutrientsSVG />,
        4: <FishMercuryRankSVG />,
      }} />
    </ToolPageShell>
  );
}
