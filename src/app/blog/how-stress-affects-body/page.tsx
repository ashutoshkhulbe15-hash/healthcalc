import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { StressBodyEffectsSVG, StressVsAnxietySVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "How Stress Affects Your Body — Chronic Stress Science", description: "Chronic stress damages cardiovascular, immune, digestive, and neurological systems through HPA axis dysregulation. Measurable cortisol effects and evidence-based management.", alternates: { canonical: "/blog/how-stress-affects-body" } };
export default function Page() { const content = getArticleContent("39-how-stress-affects-body.md");
  const lastUpdated = getLastUpdated("39-how-stress-affects-body.md");
  const lastUpdatedISO = getLastUpdatedISO("39-how-stress-affects-body.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="How Stress Affects Your Body" subtitle="The documented physiological effects of chronic stress per published research — and evidence-based strategies to manage it." readTime="12 min" category="mental-health" categoryLabel="Mental Health" relatedTools={[{title:"Stress Level Test",desc:"PSS-10 screening.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Anxiety Assessment",desc:"GAD-7 screening.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},{title:"Sleep Quality",desc:"PSQI assessment.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]} url="/blog/how-stress-affects-body">
    <QuickAnswer answer="According to published research in Psychoneuroendocrinology, chronic stress triggers elevated cortisol, increased inflammation, suppressed immunity, disrupted sleep, and altered metabolism. The APA distinguishes acute stress (short-term, can be beneficial) from chronic stress (persistent, health-damaging). Exercise, sleep, and mindfulness are the three most evidence-supported interventions." />
    <SplitArticle content={content} injections={{ 2: <StressBodyEffectsSVG />, 3: <StressVsAnxietySVG /> }} />
  </BlogPageShell>); }
