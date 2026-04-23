import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CheeseSafetyMatrixSVG, ListeriaSVG, PasteurizationCheckSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Soft Cheese During Pregnancy? Pasteurized vs Unpasteurized",
  description: "Is soft cheese safe during pregnancy? Only if pasteurized. Brie, feta, goat cheese safety guide with Listeria risk explained.",
  alternates: { canonical: "/pregnancy/safe-food/soft-cheese" },
};

export default function Page() {
  const content = getArticleContent("food-soft-cheese.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Soft Cheese During Pregnancy?"
      description="Evidence-based guide to soft cheese safety. Which cheeses are safe, which to avoid, and how to check pasteurization."
      features={["🍽️ Safety matrix", "🦠 Listeria guide", "🧀 Cheese-by-cheese", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Soft cheese is safe during pregnancy ONLY if made from pasteurized milk. Most US store-bought soft cheese is pasteurized. Avoid artisanal, imported, or farmers market soft cheeses unless you can confirm pasteurization. Hard cheeses are always safe." />
      <SplitArticle content={content} injections={{
        2: <ListeriaSVG />,
        3: <PasteurizationCheckSVG />,
        4: <CheeseSafetyMatrixSVG />,
      }} />
    </ToolPageShell>
  );
}
