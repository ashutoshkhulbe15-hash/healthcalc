import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SaladRiskVsSafeSVG, SafeSaladTipsSVG, ListeriaSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Pre-Made Salads During Pregnancy? Listeria Risk Explained",
  description: "Pre-made and deli salads carry Listeria risk during pregnancy. Why homemade is safer, which salads to avoid, and how to make safe alternatives.",
  alternates: { canonical: "/pregnancy/safe-food/pre-made-salads" },
};

export default function Page() {
  const content = getArticleContent("food-pre-made-salads.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Pre-Made Salads During Pregnancy?"
      description="Evidence-based guide on pre-made salad safety. Listeria risks, deli salad bar dangers, and safe homemade alternatives."
      features={["🥗 Risk assessment", "🦠 Listeria guide", "✅ Safe alternatives", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Avoid pre-made, pre-packaged salads from delis and salad bars during pregnancy. Listeria can grow even at refrigerator temperatures. Make fresh salads at home from thoroughly washed ingredients and eat immediately — same nutrition, zero risk." />
      <SplitArticle content={content} injections={{
        1: <ListeriaSVG />,
        2: <SaladRiskVsSafeSVG />,
        3: <SafeSaladTipsSVG />,
      }} />
    </ToolPageShell>
  );
}
