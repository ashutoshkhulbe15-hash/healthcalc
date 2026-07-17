import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CaffeineLimitSVG, CaffeineAlternativesSVG, CaffeineBudgetExamplesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Can I Drink Coffee During Pregnancy? Caffeine Guide",
  description: "ACOG recommends a maximum of 200mg caffeine per day during pregnancy — about one 12oz home-brewed cup. Caffeine content by drink, daily budget examples, and safer alternatives.",
  alternates: { canonical: "/pregnancy/safe-food/coffee" },
};

export default function Page() {
  const content = getArticleContent("food-coffee.md");
  const lastUpdated = getLastUpdated("food-coffee.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Drink Coffee During Pregnancy?"
      description="Coffee is compatible with pregnancy within the ACOG-recommended 200mg daily caffeine limit. Learn exact caffeine amounts by drink, how to budget your daily intake, and when to switch to decaf."
      features={["☕ Caffeine limits", "📊 Drink-by-drink amounts", "💡 Budget examples", "🤰 Trimester guide"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Herbal Tea Safety",desc:"Which teas are safe.",href:"/guides/drinks-pregnancy",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Evidence-based eating guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="ACOG guidelines allow up to 200mg caffeine per day during pregnancy — roughly one 12-ounce cup of home-brewed coffee. A Starbucks grande (310mg) exceeds the limit in a single cup. Track all sources: tea, chocolate, and soda count toward the daily total." />
      <SplitArticle content={content} injections={{
        1: <CaffeineLimitSVG />,
        2: <CaffeineBudgetExamplesSVG />,
        4: <CaffeineAlternativesSVG />,
      }} />
    </ToolPageShell>
  );
}
