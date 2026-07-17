import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AnxietyCalc } from "./AnxietyCalc";
import { AnxietyScoresSVG, GAD7SeverityScaleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anxiety Self-Assessment (GAD-7) — Anxiety Screening Tool",
  description: "Take the validated GAD-7 generalized anxiety screening. Score interpretation, severity levels, and when to seek professional help. Published by Spitzer et al. in Archives of Internal Medicine.",
  alternates: { canonical: "/mental-health/anxiety-self-assessment" },
};

export default function Page() {
  const content = getArticleContent("22-anxiety-self-assessment.md");
  const lastUpdated = getLastUpdated("22-anxiety-self-assessment.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Anxiety Self-Assessment (GAD-7)"
      description="The GAD-7 is the most widely used clinical anxiety screening tool worldwide. It measures generalized anxiety severity over the past 2 weeks — screening, not diagnosis."
      features={["📋 GAD-7 validated tool", "📊 Severity interpretation", "🧠 Anxiety neuroscience", "🔍 When to seek help"]}
      relatedTools={[
        {title:"Stress Level Test",desc:"Perceived Stress Scale (PSS-10).",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Burnout Quiz",desc:"Burnout vs. stress distinction.",href:"/mental-health/burnout-quiz",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"How sleep affects anxiety.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
      ]}>
      <AnxietyCalc />
      <QuickAnswer answer="The GAD-7 screens for generalized anxiety disorder severity. Scores: 0-4 minimal, 5-9 mild, 10-14 moderate, 15-21 severe. Scores of 10+ have 89% sensitivity for GAD and warrant professional evaluation. This is a screening tool — not a diagnosis." />
      <SplitArticle content={content} injections={{
        1: <GAD7SeverityScaleSVG />,
        3: <AnxietyScoresSVG />,
      }} />
    </ToolPageShell>
  );
}
