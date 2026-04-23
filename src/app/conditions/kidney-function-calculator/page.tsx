import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { KidneyCalc } from "./KidneyCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Kidney Function Calculator — CKD Stages with Action Recommendations",
  description: "Detailed kidney function assessment using CKD-EPI 2021. Get your CKD stage (G1-G5) with specific action recommendations per stage. Race-free equation.",
  alternates: { canonical: "/conditions/kidney-function-calculator" }, };

export default function Page() {
  const content = getArticleContent("31-kidney-function-calculator.md");
  return (
    <ToolPageShell category="conditions" title="Kidney Function Calculator" description="Evidence-based kidney function calculator with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <KidneyCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
