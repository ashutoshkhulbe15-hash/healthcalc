import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { CholesterolCalc } from "./CholesterolCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cholesterol Ratio Calculator — TC/HDL, LDL/HDL & TG/HDL",
  description: "Calculate your cholesterol ratios from blood test results. Understand TC/HDL, LDL/HDL, triglyceride/HDL ratios and cardiovascular risk.",
  alternates: { canonical: "/conditions/cholesterol-ratio-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-cholesterol-ratio-calculator.md");
  return (
    <ToolPageShell category="conditions" title="Cholesterol Ratio Calculator"
      description="Calculate your cholesterol ratios from blood test results. Understand TC/HDL, LDL/HDL, triglyceride/HDL ratios and cardiovascular risk."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <CholesterolCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
