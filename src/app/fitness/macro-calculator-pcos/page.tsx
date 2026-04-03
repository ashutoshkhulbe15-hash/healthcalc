import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { PcosCalc } from "./PcosCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Macro Calculator for PCOS" };

export default function Page() {
  const content = getArticleContent("32-macro-calculator-pcos.md");
  return (
    <ToolPageShell category="fitness" title="Macro Calculator for PCOS" description="Evidence-based macro calculator for pcos with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <PcosCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
