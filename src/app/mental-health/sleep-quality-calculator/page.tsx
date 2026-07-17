import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SleepCalc } from "./SleepCalc";
import { SleepComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Sleep Quality Calculator (PSQI) — Score Results", description: "Take the Pittsburgh Sleep Quality Index — the gold standard sleep quality assessment. Score above 5 = poor sleep quality (89.6% sensitivity). Seven components evaluated.", alternates: { canonical: "/mental-health/sleep-quality-calculator" } };
export default function Page() { const content = getArticleContent("13-sleep-quality-calculator.md");
  const lastUpdated = getLastUpdated("13-sleep-quality-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Sleep Quality Calculator (PSQI)" description="The Pittsburgh Sleep Quality Index is a validated screening tool published by Buysse et al. (1989). It assesses 7 components of sleep quality — it does not diagnose sleep disorders." features={["📋 PSQI validated tool","📊 7 components scored","🔬 Published validation","📖 Evidence-based guide"]} relatedTools={[{title:"Sleep Calculator",desc:"Optimal bedtime.",href:"/mental-health/sleep-calculator",category:"mental-health"},{title:"Stress Test",desc:"PSS-10 screening.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Anxiety Assessment",desc:"GAD-7 screening.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"}]}>
    <SleepCalc />
    <QuickAnswer answer="The PSQI is a validated screening tool (Buysse et al., 1989) assessing sleep quality across 7 components. Scores above 5 indicate poor sleep quality per published criteria (89.6% sensitivity). This screens for sleep quality — it does not diagnose specific sleep disorders like apnea or insomnia." />
    <SplitArticle content={content} injections={{ 2: <SleepComponentsSVG /> }} />
  </ToolPageShell>); }
