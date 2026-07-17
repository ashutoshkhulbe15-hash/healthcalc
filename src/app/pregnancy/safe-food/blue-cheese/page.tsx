import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Blue Cheese During Pregnancy?",
  description: "Pasteurized blue cheese is considered safe per CDC guidelines. Unpasteurized blue cheese should be avoided. Cooked blue cheese is safe regardless. Label checking guide.",
  alternates: { canonical: "/pregnancy/safe-food/blue-cheese" },
};

export default function Page() {
  const content = getArticleContent("food-blue-cheese.md");
  const lastUpdated = getLastUpdated("food-blue-cheese.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Blue Cheese During Pregnancy?"
      description="Evidence-based safety guide with sources cited from FDA, ACOG, CDC, and WHO."
      features={["📋 Safety assessment", "📊 Nutrition data", "🤰 Trimester guide", "❓ FAQ section"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search all pregnancy foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Complete eating guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
        {title:"Pregnancy Weight Gain",desc:"Track gestational weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
