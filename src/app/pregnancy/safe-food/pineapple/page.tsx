import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PineappleMythSVG, PineappleNutrientsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Pineapple During Pregnancy? Bromelain Myth Explained",
  description: "Pineapple is safe during pregnancy. The bromelain miscarriage myth is false — you would need 7-10 whole pineapples for any effect. Nutrients and benefits explained.",
  alternates: { canonical: "/pregnancy/safe-food/pineapple" },
};
export default function Page() {
  const content = getArticleContent("food-pineapple.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Pineapple During Pregnancy?"
      description="Evidence-based guide debunking the pineapple-miscarriage myth. Bromelain science, nutritional benefits, and safe serving sizes."
      features={["🍍 Myth debunked","🔬 Bromelain science","📊 Nutrient data","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Honey Guide",desc:"Another myth debunked.",href:"/pregnancy/safe-food/honey",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — pineapple is completely safe during pregnancy. The miscarriage myth is based on bromelain enzyme, but you would need to eat 7-10 whole pineapples in one sitting for any effect. Normal servings are perfectly safe and nutritious (131% DV vitamin C per cup)." />
      <SplitArticle content={content} injections={{
        2: <PineappleMythSVG />,
        3: <PineappleNutrientsSVG />,
      }} />
    </ToolPageShell>
  );
}
