import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SushiSafeUnsafeSVG, RawFishRisksSVG, SushiOrderingGuideSVG, CookedVsRawSushiSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Eat Sushi While Pregnant? Raw vs Cooked Guide",
  description: "Raw fish sushi is not safe during pregnancy. Cooked sushi (shrimp tempura, California roll, eel, vegetable rolls) is considered safe per FDA guidelines. Complete safe vs. unsafe sushi list.",
  alternates: { canonical: "/pregnancy/safe-food/sushi" },
};

export default function Page() {
  const content = getArticleContent("food-sushi.md");
  const lastUpdated = getLastUpdated("food-sushi.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Sushi During Pregnancy?"
      description="Raw fish sushi — avoid. Cooked sushi (shrimp tempura, California roll, eel, vegetable) — considered safe per FDA guidelines. The full breakdown."
      features={["🍣 Safe vs. unsafe list", "🦐 Cooked options", "⚠️ Raw fish risks", "📋 Restaurant tips"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Salmon Safety",desc:"Cooking temp and mercury.",href:"/pregnancy/safe-food/salmon",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Evidence-based eating guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Raw fish sushi (sashimi, raw tuna rolls, poke) should be avoided during pregnancy per FDA guidelines. Cooked sushi — shrimp tempura rolls, California rolls, eel, vegetable rolls, cooked salmon rolls — is considered safe when fish reaches 145°F. &quot;Sushi-grade&quot; is not a safety guarantee." />
      <SplitArticle content={content} injections={{
        0: <CookedVsRawSushiSVG />,
        2: <RawFishRisksSVG />,
        3: <SushiSafeUnsafeSVG />,
        5: <SushiOrderingGuideSVG />,
      }} />
    </ToolPageShell>
  );
}
