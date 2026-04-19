import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SushiSafeUnsafeSVG, RawFishRisksSVG, SushiOrderingGuideSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Sushi During Pregnancy? Raw vs Cooked Guide",
  description: "Raw fish sushi is not safe during pregnancy. But cooked sushi rolls are fine. Which rolls are safe, what to order, and why raw fish is risky.",
  alternates: { canonical: "/pregnancy/safe-food/sushi" },
};

export default function Page() {
  const content = getArticleContent("food-sushi.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Sushi During Pregnancy?"
      description="Evidence-based sushi safety guide. Which rolls are safe, which to avoid, and how to order at a restaurant while pregnant."
      features={["🍣 Roll-by-roll guide", "🦠 Raw fish risks", "✅ Safe alternatives", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Salmon Guide",desc:"Is salmon safe?",href:"/pregnancy/safe-food/salmon",category:"pregnancy"},
        {title:"Tuna Guide",desc:"Mercury levels in tuna.",href:"/pregnancy/safe-food/tuna",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Raw fish sushi is NOT safe during pregnancy. But cooked sushi (California roll, shrimp tempura, eel, veggie rolls) is perfectly safe. The risk is raw/undercooked fish — not sushi rice, nori, or soy sauce." />
      <SplitArticle content={content} injections={{
        2: <SushiSafeUnsafeSVG />,
        3: <RawFishRisksSVG />,
        4: <SushiOrderingGuideSVG />,
      }} />
    </ToolPageShell>
  );
}
