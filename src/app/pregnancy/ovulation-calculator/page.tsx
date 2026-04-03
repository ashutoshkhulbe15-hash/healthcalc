import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { OvulationCalc } from "./OvulationCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ovulation Calculator — Track Your Fertility Window",
  description: "Predict your most fertile days based on your cycle length. Understand your ovulation timing and fertile window with our evidence-based calculator.",
};

export default function Page() {
  const content = getArticleContent("09-ovulation-calculator.md");
  return (
    <ToolPageShell
      category="pregnancy"
      title="Ovulation Calculator"
      description="Predict your most fertile days based on your cycle length. Find your ovulation day and the 6-day fertile window when conception is most likely."
      features={["📅 Cycle-based prediction", "🎯 6-day fertile window", "📊 Conception probability table", "📖 Evidence-based guide"]}
      relatedTools={[
        { title: "Due Date Calculator", desc: "Find your estimated delivery date.", href: "/pregnancy/due-date-calculator", category: "pregnancy" },
        { title: "HCG Doubling Time", desc: "Track early pregnancy hormone levels.", href: "/pregnancy/hcg-doubling-time-calculator", category: "pregnancy" },
        { title: "Weight Gain Calculator", desc: "Track pregnancy weight week by week.", href: "/pregnancy/weight-gain-calculator", category: "pregnancy" },
      ]}
      relatedHeading="Planning for Pregnancy"
    >
      <OvulationCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
