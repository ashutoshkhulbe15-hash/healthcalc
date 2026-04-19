import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { VitaminDCalc } from "./VitaminDCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vitamin D Calculator — Daily IU by Body Weight & Level",
  description: "Calculate your daily vitamin D needs based on body weight, current level, skin tone, and sun exposure. Endocrine Society guidelines.",
  alternates: { canonical: "/conditions/vitamin-d-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-vitamin-d-calculator.md");
  return (
    <ToolPageShell category="conditions" title="Vitamin D Calculator"
      description="Calculate your daily vitamin D needs based on body weight, current level, skin tone, and sun exposure. Endocrine Society guidelines."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <VitaminDCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
