import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HeartRateByAgeSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Normal Resting Heart Rate by Age — AHA Guidelines Chart", description: "Normal resting heart rate is 60-100 bpm for adults per AHA guidelines. Chart by age from newborns to adults. How to measure, what affects it, and when to see a doctor.", alternates: { canonical: "/guides/healthy-resting-heart-rate-by-age" } };
export default function Page() { const content = getArticleContent("guide-resting-heart-rate-by-age.md");
  const lastUpdated = getLastUpdated("guide-resting-heart-rate-by-age.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-resting-heart-rate-by-age.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Normal Resting Heart Rate by Age" subtitle="AHA-classified normal ranges from newborns to adults, including athletes. How to measure and when to consult a provider." readTime="10 min" category="conditions" categoryLabel="Health Guide" relatedTools={[{title:"BMI Calculator",desc:"Body mass index.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Stress Level Test",desc:"PSS-10 screening.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Sleep Quality",desc:"PSQI assessment.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]} url="/guides/healthy-resting-heart-rate-by-age">
    <QuickAnswer answer="According to AHA guidelines, normal resting heart rate for adults is 60-100 bpm. Lower within this range generally indicates better cardiovascular fitness. Athletes may have 40-60 bpm. Children and infants have higher normal ranges (up to 160 bpm for newborns). Measure first thing in the morning for the most accurate reading." />
    <SplitArticle content={content} injections={{ 2: <HeartRateByAgeSVG /> }} />
  </BlogPageShell>); }
