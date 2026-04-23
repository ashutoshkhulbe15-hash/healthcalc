import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { SleepCycleCalc } from "./SleepCycleCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sleep Calculator — How Much Sleep Do I Need?",
  description: "Calculate your ideal bedtime based on sleep cycles. Recommendations by age group, cycle timing, and wake-up optimization.",
  alternates: { canonical: "/mental-health/sleep-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-sleep-calculator.md");
  return (
    <ToolPageShell category="mental-health" title="Sleep Calculator"
      description="Calculate your ideal bedtime based on sleep cycles. Recommendations by age group, cycle timing, and wake-up optimization."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <SleepCycleCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
