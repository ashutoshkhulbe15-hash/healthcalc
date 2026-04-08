import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { SeniorProteinCalc } from "./SeniorProteinCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Protein Calculator for Seniors 65+ — Prevent Sarcopenia & Muscle Loss",
  description: "Calculate daily protein needs for adults 65 and older. Goal-based ranges for sarcopenia prevention, per-meal targets, and leucine threshold guidance." };

export default function Page() {
  const content = getArticleContent("30-protein-needs-seniors.md");
  return (
    <ToolPageShell category="body-metrics" title="Protein Needs for Seniors" description="Evidence-based protein needs for seniors with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <SeniorProteinCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
