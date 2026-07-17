import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { StressCalc } from "./StressCalc";
import { StressScoresSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Stress Level Test — Perceived Stress Scale (PSS-10)", description: "Take the validated PSS-10 stress assessment developed by Sheldon Cohen. Measures perceived stress over the past month. Score interpretation, five stress levels, and evidence-based management strategies.", alternates: { canonical: "/mental-health/stress-level-test" } };
export default function Page() { const content = getArticleContent("11-stress-level-test.md");
  const lastUpdated = getLastUpdated("11-stress-level-test.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Stress Level Test (PSS-10)" description="The Perceived Stress Scale (PSS-10) is a validated screening tool published by Cohen et al. (1983). It measures perceived stress — it does not diagnose any condition." features={["📋 PSS-10 validated tool","📊 Score interpretation","🔬 Published research","📖 Evidence-based guide"]} relatedTools={[{title:"Anxiety Assessment",desc:"GAD-7 screening.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},{title:"Burnout Quiz",desc:"Maslach framework.",href:"/mental-health/burnout-quiz",category:"mental-health"},{title:"Sleep Quality",desc:"PSQI assessment.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]}>
    <StressCalc />
    <QuickAnswer answer="The PSS-10 is a validated screening tool (Cohen et al., 1983) that measures perceived stress over the past month. Scores 0-13 suggest low stress, 14-26 moderate, 27-40 high. This is a screening measure — it does not diagnose any condition. High scores suggest exploring stress management strategies or speaking with a professional." />
    <SplitArticle content={content} injections={{ 2: <StressScoresSVG /> }} />
  </ToolPageShell>); }
