import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AnxietyCalc } from "./AnxietyCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "GAD-7 Anxiety Screening Questionnaire",
  description: "Use the seven-item GAD-7 questionnaire and see its score bands and limits.",
  alternates: { canonical: "/mental-health/anxiety-self-assessment" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "GAD-7 Anxiety Screening Questionnaire", description: "Use the seven-item GAD-7 questionnaire and see its score bands and limits.", url: "/mental-health/anxiety-self-assessment", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"GAD-7 Anxiety Screening Questionnaire", description:"Use the seven-item GAD-7 questionnaire and see its score bands and limits.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("22-anxiety-self-assessment.md");
  const lastUpdated = getLastUpdated("22-anxiety-self-assessment.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="GAD-7 Anxiety Screening Questionnaire"
      description="Use the seven-item GAD-7 and review its score bands and study-specific limitations. It is not a diagnosis."
      features={["Exact questionnaire", "Score bands", "Study population and limits"]}
      relatedTools={[
        {title:"Perceived Stress Scale information",desc:"PSS limitations and permission information.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Burnout guidance",desc:"WHO definition and work-related support guidance.",href:"/mental-health/burnout-quiz",category:"mental-health"},
        {title:"Sleep diary estimate",desc:"Arithmetic estimate from sleep diary inputs.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
      ]}>
      <AnxietyCalc />
      <QuickAnswer answer="The GAD-7 asks about seven symptoms over the last two weeks and produces a 0–21 screening score. The original study's accuracy results were measured in adult US primary-care patients and are not a universal estimate. A score is not a diagnosis." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
