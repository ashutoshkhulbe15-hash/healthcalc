import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { HcgCalc } from "./HcgCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "HCG Doubling Time Calculator — Normal Ranges & What Slow Rise Means",
  description: "Calculate your HCG doubling time from two beta-hCG blood tests. Normal doubling ranges by week, what slow or declining HCG means, when to worry. Evidence-based guide.",
  alternates: { canonical: "/pregnancy/hcg-doubling-time-calculator" },
};

export default function Page() {
  const content = getArticleContent("03-hcg-doubling-time-calculator.md");
  return (
    <ToolPageShell
      category="pregnancy"
      title="HCG Doubling Time Calculator"
      description="Enter two HCG blood test results to calculate your doubling time. See if your levels are rising at a healthy rate with evidence-based interpretation."
      features={["🧪 Two-value comparison", "📊 Normal range interpretation", "📅 Week-by-week reference", "📖 Complete guide"]}
      relatedTools={[
        { title: "Due Date Calculator", desc: "Find your estimated delivery date.", href: "/pregnancy/due-date-calculator", category: "pregnancy" },
        { title: "Weight Gain Calculator", desc: "Track weight gain by trimester.", href: "/pregnancy/weight-gain-calculator", category: "pregnancy" },
        { title: "BMI Calculator", desc: "Check your BMI category.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
      ]}
      relatedHeading="More Pregnancy Tools"
    >
      <HcgCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
