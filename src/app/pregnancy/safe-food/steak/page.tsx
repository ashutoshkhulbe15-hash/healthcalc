import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SteakTempSVG, MeatRisksSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Steak During Pregnancy? Safety Guide",
  description: "Is steak safe during pregnancy? Evidence-based guide with safety rating, nutritional info, preparation tips, and trimester-specific advice.",
  alternates: { canonical: "/pregnancy/safe-food/steak" },
};

export default function Page() {
  const content = getArticleContent("food-steak.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Steak During Pregnancy?"
      description="Evidence-based safety guide for steak during pregnancy. Includes nutritional info, preparation guidelines, and trimester-specific advice."
      features={["🍽️ Safety rating", "📊 Nutritional data", "🤰 Trimester guidance", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes, steak is safe during pregnancy — but only when cooked to at least 145°F (63°C) with a 3-minute rest. No rare or medium-rare. Use a meat thermometer to be sure." />
      <SplitArticle content={content} injections={{
        2: <SteakTempSVG />,
        3: <MeatRisksSVG />,
      }} />
    </ToolPageShell>
  );
}
