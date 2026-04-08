import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { WhrCalc } from "./WhrCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator — WHO Cardiovascular Risk",
  description: "Calculate your waist-to-hip ratio and cardiovascular risk using WHO cutoffs. Why WHR may be more important than BMI.",
};

export default function Page() {
  const content = getArticleContent("tool-waist-to-hip-ratio-calculator.md");
  return (
    <ToolPageShell category="body-metrics" title="Waist-to-Hip Ratio Calculator"
      description="Calculate your waist-to-hip ratio and cardiovascular risk using WHO cutoffs. Why WHR may be more important than BMI."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <WhrCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
