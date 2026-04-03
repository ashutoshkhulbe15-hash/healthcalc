import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { FetalWeightCalc } from "./FetalWeightCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fetal Weight Percentile Calculator — Track Baby's Growth",
  description: "Track your baby's estimated weight against WHO growth standards. Understand percentiles, what SGA and LGA mean, and when to talk to your provider.",
};

export default function Page() {
  const content = getArticleContent("10-fetal-weight-percentile-calculator.md");
  return (
    <ToolPageShell
      category="pregnancy"
      title="Fetal Weight Percentile Calculator"
      description="Compare your baby's estimated weight to WHO growth standards week by week. Understand what percentiles mean and whether your baby's growth is on track."
      features={["📊 WHO growth standards", "📈 Percentile curves", "⚖️ Week-by-week tracking", "📖 Complete growth guide"]}
      relatedTools={[
        { title: "Weight Gain Calculator", desc: "Track your own weight gain by week.", href: "/pregnancy/weight-gain-calculator", category: "pregnancy" },
        { title: "Due Date Calculator", desc: "Find your estimated delivery date.", href: "/pregnancy/due-date-calculator", category: "pregnancy" },
        { title: "HCG Doubling Time", desc: "Monitor early pregnancy levels.", href: "/pregnancy/hcg-doubling-time-calculator", category: "pregnancy" },
      ]}
      relatedHeading="More Pregnancy Tools"
    >
      <FetalWeightCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
