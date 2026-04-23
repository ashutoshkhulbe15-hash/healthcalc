import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CaffeineLimitSVG, CaffeineAlternativesSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Drink Coffee During Pregnancy? Caffeine Limit Guide",
  description: "Coffee is safe during pregnancy under 200mg caffeine/day (one 12oz cup). Caffeine content by drink, safe limits, and alternatives. ACOG guidelines.",
  alternates: { canonical: "/pregnancy/safe-food/coffee" },
};

export default function Page() {
  const content = getArticleContent("food-coffee.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Drink Coffee During Pregnancy?"
      description="Evidence-based caffeine guide. Daily limits, caffeine content by drink, safe alternatives, and trimester-specific considerations."
      features={["☕ Caffeine limits", "📊 Drink comparison", "🔄 Safe swaps", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Green Tea Guide",desc:"Is green tea safe?",href:"/pregnancy/safe-food/green-tea",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Yes — coffee is safe during pregnancy if you stay under 200mg caffeine per day. That's about one 12oz cup of home-brewed coffee. Watch out: a Starbucks Grande has 310mg (over the limit in one cup). ACOG, WHO, and NHS all agree on the 200mg limit." />
      <SplitArticle content={content} injections={{
        2: <CaffeineLimitSVG />,
        4: <CaffeineAlternativesSVG />,
      }} />
    </ToolPageShell>
  );
}
