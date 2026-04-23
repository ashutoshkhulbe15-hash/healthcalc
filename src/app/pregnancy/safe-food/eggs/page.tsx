import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { EggNutrientsSVG, EggCookingSafetySVG, ListeriaSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Eggs During Pregnancy? Cooking Safety Guide",
  description: "Eggs are safe and nutritious during pregnancy when fully cooked. No runny yolks. Choline, protein, and nutrient data. Evidence-based guide.",
  alternates: { canonical: "/pregnancy/safe-food/eggs" },
};

export default function Page() {
  const content = getArticleContent("food-eggs.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Eggs During Pregnancy?"
      description="Evidence-based safety guide for eggs during pregnancy. Cooking methods, nutritional benefits, and Salmonella prevention."
      features={["🍽️ Safety rating", "📊 Nutrient data", "🌡️ Cooking guide", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Nutrition Guide",desc:"Full pregnancy nutrition.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — eggs are safe and highly nutritious during pregnancy when fully cooked (firm whites AND yolk). No runny yolks, soft-boiled, or raw eggs. One egg provides 147mg choline — critical for baby's brain development." />
      <SplitArticle content={content} injections={{
        1: <EggNutrientsSVG />,
        2: <EggCookingSafetySVG />,
        3: <ListeriaSVG />,
      }} />
    </ToolPageShell>
  );
}
