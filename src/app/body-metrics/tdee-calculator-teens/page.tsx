import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { TdeeTeensCalc } from "./TdeeTeensCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "TDEE Calculator for Teens" };

export default function Page() {
  const content = getArticleContent("29-tdee-calculator-teens.md");
  return (
    <ToolPageShell category="body-metrics" title="TDEE Calculator for Teens" description="Evidence-based tdee calculator for teens with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <TdeeTeensCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
