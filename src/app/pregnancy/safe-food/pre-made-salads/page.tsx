import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SaladRiskVsSafeSVG, SafeSaladTipsSVG, ListeriaGrowthChartSVG, SafeSaladBuildSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Pre-Made Salads During Pregnancy?",
  description: "Pre-made and deli salads are not safe during pregnancy due to Listeria risk. Homemade salads are safe. Why cold storage doesn't stop Listeria, and how to build safe salads at home.",
  alternates: { canonical: "/pregnancy/safe-food/pre-made-salads" },
};

export default function Page() {
  const content = getArticleContent("food-pre-made-salads.md");
  const lastUpdated = getLastUpdated("food-pre-made-salads.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Pre-Made Salads During Pregnancy?"
      description="Pre-made deli salads carry Listeria risk during pregnancy. Homemade salads from fresh washed ingredients are safe."
      features={["🥗 Listeria risk", "🏠 Safe home prep", "📋 Safe ingredients", "🤰 Trimester guide"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Evidence-based eating guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Pre-made salads from delis, salad bars, and grocery store packaging should be avoided during pregnancy — Listeria grows in cold storage and multiplies even in refrigerated pre-made salads. Make salads fresh at home from thoroughly washed whole produce and eat immediately." />
      <SplitArticle content={content} injections={{
        1: <ListeriaGrowthChartSVG />,
        2: <SaladRiskVsSafeSVG />,
        3: <SafeSaladBuildSVG />,
        4: <SafeSaladTipsSVG />,
      }} />
    </ToolPageShell>
  );
}
