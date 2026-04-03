import type { Metadata } from "next";
import { PregnancyWeightGainCalc } from "./PregnancyWeightGainCalc";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator — Free Week-by-Week Tracker",
  description:
    "Track your pregnancy weight gain week by week based on IOM guidelines. Visual trajectory chart, BMI-adjusted ranges, and twin pregnancy support.",
};

export default function Page() {
  const content = getArticleContent("01-pregnancy-weight-gain-calculator.md");

  return (
    <ToolPageShell
      category="pregnancy"
      title="Pregnancy Weight Gain Calculator"
      description="Track your weight gain week by week against IOM guidelines. Get visual charts, personalized ranges based on your BMI, and a complete evidence-based guide."
      features={[
        "📈 Visual trajectory chart",
        "📋 IOM 2009 guidelines",
        "👶 Twin support",
        "📖 2,000-word guide",
      ]}
      relatedTools={[
        { title: "Due Date Calculator", desc: "Estimated delivery date from LMP or conception.", href: "/pregnancy/due-date-calculator", category: "pregnancy" },
        { title: "Fetal Weight Percentile", desc: "Track baby's growth against WHO standards.", href: "#", category: "pregnancy" },
        { title: "HCG Doubling Time", desc: "Monitor early pregnancy HCG levels.", href: "/pregnancy/hcg-doubling-time-calculator", category: "pregnancy" },
      ]}
      relatedHeading="Continue Your Pregnancy Journey"
    >
      <PregnancyWeightGainCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
