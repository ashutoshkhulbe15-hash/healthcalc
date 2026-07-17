import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AlcoholRisksSVG, FASDAwarenessSVG, MocktailsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Drink Alcohol During Pregnancy?",
  description: "Every medical authority recommends zero alcohol during pregnancy. No safe threshold established. FASD is the leading preventable cause of intellectual disability.",
  alternates: { canonical: "/pregnancy/safe-food/alcohol" },
};

export default function Page() {
  const content = getArticleContent("food-alcohol.md");
  const lastUpdated = getLastUpdated("food-alcohol.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Drink Alcohol During Pregnancy?"
      description="Evidence-based guide on alcohol and pregnancy. Why there is no safe amount, FASD risks, and safe drink alternatives."
      features={["🚫 Zero safe amount", "⚠️ FASD prevention", "🍹 Safe alternatives", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="No — there is NO known safe amount of alcohol during pregnancy. Every major medical authority (ACOG, CDC, WHO, NHS, AAP) recommends complete abstinence for all 40 weeks. Fetal Alcohol Spectrum Disorders are 100% preventable." />
      <SplitArticle content={content} injections={{
        1: <AlcoholRisksSVG />,
        2: <FASDAwarenessSVG />,
        4: <MocktailsSVG />,
      }} />
    </ToolPageShell>
  );
}
