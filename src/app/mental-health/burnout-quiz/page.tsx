import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BurnoutCalc } from "./BurnoutCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Burnout Quiz — Am I Burned Out? Free Work Exhaustion Assessment", description: "Assess your burnout risk across three dimensions: emotional exhaustion, cynicism, and professional efficacy. 12 questions with instant scoring and actionable insights.",
  alternates: { canonical: "/mental-health/burnout-quiz" }, };

export default function Page() {
  const content = getArticleContent("21-burnout-quiz.md");
  return (
    <ToolPageShell category="mental-health" title="Burnout Quiz"
      description="Assess your burnout risk across three dimensions — emotional exhaustion, cynicism, and professional efficacy. Based on established burnout research."
      features={["🧠 3-dimension assessment","📊 12 questions","💡 Actionable insights","📖 Burnout science guide"]}
      relatedTools={[
        {title:"Stress Level Test",desc:"PSS-10 stress assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"Burnout affects sleep.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
        {title:"Anxiety Assessment",desc:"GAD-7 anxiety screening.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
      ]}
      relatedHeading="Related Wellness Tools">
      <BurnoutCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
