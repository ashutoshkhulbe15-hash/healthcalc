import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SleepCycleCalc } from "./SleepCycleCalc";
import { SleepCyclesSVG, SleepRecommendationsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Sleep Calculator — Optimal Bedtime & Wake Time", description: "Calculate bedtime or wake time based on 90-minute sleep cycles. Waking between cycles reduces grogginess. CDC recommends 7-9 hours for adults.", alternates: { canonical: "/mental-health/sleep-calculator" } };
export default function Page() { const content = getArticleContent("tool-sleep-calculator.md");
  const lastUpdated = getLastUpdated("tool-sleep-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Sleep Calculator" description="Find your optimal bedtime and wake time based on sleep cycle science. Align your alarm with natural cycle endings for better mornings." features={["🌙 Sleep cycle timing","📊 NSF recommendations","💤 Cycle alignment","📖 Evidence-based guide"]} relatedTools={[{title:"Sleep Quality (PSQI)",desc:"Assess sleep quality.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},{title:"Stress Test (PSS-10)",desc:"Stress affects sleep.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Anxiety (GAD-7)",desc:"Anxiety and insomnia.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"}]}>
    <SleepCycleCalc />
    <QuickAnswer answer="According to the National Sleep Foundation, adults need 7-9 hours of sleep. This calculator aligns your schedule with 90-minute sleep cycles — waking between cycles rather than mid-cycle is associated with feeling more refreshed per published sleep research." />
    <SplitArticle content={content} injections={{ 3: <SleepCyclesSVG />, 0: <SleepRecommendationsSVG /> }} />
  </ToolPageShell>); }
