import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { AnxietyCalc } from "./AnxietyCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "GAD-7 Anxiety Test Online — Free Anxiety Self-Assessment", description: "Take the GAD-7 anxiety screening questionnaire used by healthcare providers. 7 questions, instant scoring (minimal to severe), with clinical interpretation guide." };

export default function Page() {
  const content = getArticleContent("22-anxiety-self-assessment.md");
  return (
    <ToolPageShell category="mental-health" title="Anxiety Self-Assessment (GAD-7)"
      description="Take the GAD-7 — a clinically validated 7-question anxiety screening tool used by healthcare providers worldwide."
      features={["🧠 GAD-7 validated scale","📊 4-level scoring","🏥 Clinically used","📖 Anxiety guide"]}
      relatedTools={[
        {title:"Stress Level Test",desc:"PSS-10 stress assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Burnout Quiz",desc:"Workplace burnout screening.",href:"/mental-health/burnout-quiz",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"Anxiety affects sleep quality.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
      ]}
      relatedHeading="Related Wellness Tools">
      <AnxietyCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
