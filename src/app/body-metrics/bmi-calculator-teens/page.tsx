import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BmiTeensCalc } from "./BmiTeensCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI Calculator for Teenagers — CDC Percentile by Age & Gender",
  description: "Calculate BMI for teens ages 2-19 using CDC age-and-sex-specific percentile charts. Understand why adult BMI categories don't apply to growing adolescents.",
};

export default function Page() {
  const content = getArticleContent("15-bmi-calculator-teens.md");
  return (
    <ToolPageShell
      category="body-metrics"
      title="BMI Calculator for Teenagers"
      description="Calculate BMI for teens aged 2-19 using CDC growth charts. Results show age-and-sex-specific percentiles — not adult categories — because teen bodies are still developing."
      features={["📊 CDC percentile charts", "👦👧 Age & sex adjusted", "📈 Growth context", "📖 Parent-friendly guide"]}
      relatedTools={[
        { title: "BMI Calculator (Adults)", desc: "Standard BMI with WHO classification.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "Body Fat Calculator", desc: "Estimate body fat percentage.", href: "/fitness/body-fat-calculator", category: "fitness" },
        { title: "Protein Calculator", desc: "Daily protein needs by age.", href: "/fitness/protein-intake-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Body Metrics Tools"
    >
      <BmiTeensCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
