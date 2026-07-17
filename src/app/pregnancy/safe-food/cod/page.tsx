import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CodNutrientsSVG, FishMercuryRankSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Cod During Pregnancy? Safety Guide",
  description: "Cod is FDA best choice — very low mercury (0.011 ppm). 20g protein per serving. Mild flavor, well-tolerated. Cook to 145°F. Up to 12 oz per week.",
  alternates: { canonical: "/pregnancy/safe-food/cod" },
};
export default function Page() {
  const content = getArticleContent("food-cod.md");
  const lastUpdated = getLastUpdated("food-cod.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Cod During Pregnancy?"
      description="Evidence-based cod safety guide. One of the best dietary sources of iodine for fetal thyroid development, with low mercury per FDA data."
      features={["🐟 FDA best choice","🧪 High iodine","📊 Mercury data","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Shrimp Guide",desc:"Another iodine source.",href:"/guides/fish-seafood-pregnancy",category:"pregnancy"},
        {title:"Salmon Guide",desc:"Higher omega-3 option.",href:"/pregnancy/safe-food/salmon",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — cod is classified by the FDA as a 'best choice' fish for pregnancy. Low mercury (0.111 ppm per FDA data), excellent source of iodine (66% DV per serving) critical for fetal thyroid development. Cook to 145°F, enjoy 2-3 servings per week." />
      <SplitArticle content={content} injections={{ 1: <FishMercuryRankSVG />, 3: <CodNutrientsSVG /> }} />
    </ToolPageShell>
  );
}
