import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ContractionCalc } from "./ContractionCalc";
import { ContractionRuleSVG, BraxtonVsRealSVG, FiveOneOneRuleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contraction Timer — Track the 5-1-1 Rule for Labor",
  description: "Time your contractions and compare against the 5-1-1 rule: every 5 minutes, 1 minute long, for 1 hour. Braxton Hicks vs real labor, when to go to the hospital, and labor stages explained.",
  alternates: { canonical: "/pregnancy/contraction-timer" },
};

export default function Page() {
  const content = getArticleContent("25-contraction-timer.md");
  const lastUpdated = getLastUpdated("25-contraction-timer.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Contraction Timer"
      description="Track contraction frequency, duration, and intensity. The timer compares your pattern against the ACOG 5-1-1 guideline for when to head to the hospital."
      features={["⏱️ Auto frequency tracking", "📊 5-1-1 rule comparison", "🤰 Braxton Hicks vs. real labor", "🏥 When to go to hospital"]}
      relatedTools={[
        {title:"Due Date Calculator",desc:"Find your estimated delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"HCG Levels by Week",desc:"Understand early pregnancy blood work.",href:"/guides/hcg-levels-by-week",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}>
      <ContractionCalc />
      <QuickAnswer answer="The 5-1-1 rule: contractions every 5 minutes, lasting 1 minute each, for 1 hour. This pattern typically indicates active labor for first-time mothers. Track your contractions for at least one hour to see if the pattern holds before heading to the hospital." />
      <SplitArticle content={content} injections={{
        1: <FiveOneOneRuleSVG />,
        3: <BraxtonVsRealSVG />,
        4: <ContractionRuleSVG />,
      }} />
    </ToolPageShell>
  );
}
