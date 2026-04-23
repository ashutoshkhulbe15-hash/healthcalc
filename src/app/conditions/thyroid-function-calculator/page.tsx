import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { ThyroidCalc } from "./ThyroidCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thyroid Function Calculator — TSH Interpretation Guide",
  description: "Interpret your TSH and Free T4 results. Normal ranges, pregnancy-adjusted values, and what subclinical results mean.",
  alternates: { canonical: "/conditions/thyroid-function-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-thyroid-function-calculator.md");
  return (
    <ToolPageShell category="conditions" title="Thyroid Function Calculator"
      description="Interpret your TSH and Free T4 results. Normal ranges, pregnancy-adjusted values, and what subclinical results mean."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <ThyroidCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
