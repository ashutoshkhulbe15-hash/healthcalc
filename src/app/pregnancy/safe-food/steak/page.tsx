import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SteakTempSVG, MeatRisksSVG, SteakDonenessGuardSVG, SteakNutrientsPregnancySVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Steak During Pregnancy? Temperature Guide & Safety",
  description: "Steak is safe during pregnancy when cooked to 160°F internal temperature. No rare or medium-rare. Cooking temperatures, Toxoplasma risk, and nutritional benefits explained.",
  alternates: { canonical: "/pregnancy/safe-food/steak" },
};

export default function Page() {
  const content = getArticleContent("food-steak.md");
  const lastUpdated = getLastUpdated("food-steak.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Steak During Pregnancy?"
      description="Yes — well-done steak (160°F+) is safe and nutritionally excellent during pregnancy. No rare or medium-rare."
      features={["🌡️ Temperature guide", "⚠️ Toxoplasma risk", "🥩 Cooking methods", "📊 Nutrition data"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Steak is safe during pregnancy when cooked to 160°F (71°C) internal temperature — well-done, no pink center. Rare and medium-rare are not safe due to Toxoplasma gondii and E. coli risk. Use a meat thermometer; color alone is unreliable." />
      <SplitArticle content={content} injections={{
        1: <SteakDonenessGuardSVG />,
        2: <MeatRisksSVG />,
        3: <SteakTempSVG />,
        4: <SteakNutrientsPregnancySVG />,
      }} />
    </ToolPageShell>
  );
}
