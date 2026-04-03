import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { IvfCalc } from "./IvfCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "IVF Due Date Calculator" };

export default function Page() {
  const content = getArticleContent("33-ivf-due-date-calculator.md");
  return (
    <ToolPageShell category="pregnancy" title="IVF Due Date Calculator" description="Evidence-based ivf due date calculator with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <IvfCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
