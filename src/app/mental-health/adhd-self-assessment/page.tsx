import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { AdhdCalc } from "./AdhdCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "ADHD Self-Assessment" };

export default function Page() {
  const content = getArticleContent("26-adhd-self-assessment.md");
  return (
    <ToolPageShell category="mental-health" title="ADHD Self-Assessment" description="Evidence-based adhd self-assessment with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <AdhdCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
