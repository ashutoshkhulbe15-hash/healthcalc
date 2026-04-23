import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HoneyMythSVG, HoneyVsSugarSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Honey During Pregnancy? Botulism Myth Debunked",
  description: "Honey is safe during pregnancy. The botulism risk applies to infants under 1 year, not adults. Science-based guide with nutritional comparison.",
  alternates: { canonical: "/pregnancy/safe-food/honey" },
};
export default function Page() {
  const content = getArticleContent("food-honey.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Honey During Pregnancy?"
      description="Evidence-based guide debunking the honey-pregnancy botulism myth. Why it is safe for you but not your baby after birth."
      features={["🍯 Safety confirmed","🔬 Myth debunked","📊 Nutritional data","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Coffee Guide",desc:"Caffeine limits.",href:"/pregnancy/safe-food/coffee",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — honey is safe for pregnant women. The botulism risk that makes honey dangerous for infants under 12 months does NOT apply to adults. Your mature digestive system destroys the spores. Every major medical authority confirms this." />
      <SplitArticle content={content} injections={{
        2: <HoneyMythSVG />,
        3: <HoneyVsSugarSVG />,
      }} />
    </ToolPageShell>
  );
}
