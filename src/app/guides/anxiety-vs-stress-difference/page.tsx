import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { StressVsAnxietyComparisonSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anxiety vs Stress — How to Tell the Difference",
  description: "Stress is a response to an external trigger that resolves when the stressor ends. Anxiety persists without a clear trigger. The distinction determines what helps. Self-assessment links included.",
  alternates: { canonical: "/guides/anxiety-vs-stress-difference" },
};

export default function Page() {
  const content = getArticleContent("guide-anxiety-vs-stress.md");
  const lastUpdated = getLastUpdated("guide-anxiety-vs-stress.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-anxiety-vs-stress.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Anxiety vs Stress" subtitle="They feel similar — but the cause, duration, and treatment are fundamentally different." readTime="7 min read" category="mental-health" categoryLabel="Mental Health" url="/guides/anxiety-vs-stress-difference"
      relatedTools={[
        {title:"Anxiety Assessment (GAD-7)",desc:"Validated anxiety screening.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
        {title:"Stress Level Test (PSS-10)",desc:"Perceived Stress Scale.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Burnout Quiz",desc:"When stress becomes burnout.",href:"/mental-health/burnout-quiz",category:"mental-health"},
      ]}>
      <QuickAnswer answer="Stress is caused by an identifiable external trigger and resolves when the stressor ends. Anxiety persists even after the trigger is gone — or exists without a clear trigger at all. If you feel better when the situation resolves, that was stress. If the dread continues regardless, that is anxiety." />
      <SplitArticle content={content} injections={{
        1: <StressVsAnxietyComparisonSVG />,
      }} />
    </BlogPageShell>
  );
}
