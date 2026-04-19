import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Coffee During Pregnancy? Safety Guide",
  description: "Is coffee safe during pregnancy? Evidence-based guide with safety rating, nutritional info, preparation tips, and trimester-specific advice.",
  alternates: { canonical: "/pregnancy/safe-food/coffee" },
};

export default function Page() {
  const content = getArticleContent("food-coffee.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Coffee During Pregnancy?"
      description="Evidence-based safety guide for coffee during pregnancy. Includes nutritional info, preparation guidelines, and trimester-specific advice."
      features={["🍽️ Safety rating", "📊 Nutritional data", "🤰 Trimester guidance", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
