import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BodyFatMethodsSVG, BodyFatRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "How to Measure Body Fat at Home — 5 Methods Compared", description: "Five home methods for measuring body fat compared by accuracy and cost. The Navy tape method is the best balance per published validation studies.", alternates: { canonical: "/guides/how-to-measure-body-fat-at-home" } };
export default function Page() { const content = getArticleContent("guide-measure-body-fat-at-home.md");
  const lastUpdated = getLastUpdated("guide-measure-body-fat-at-home.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-measure-body-fat-at-home.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="How to Measure Body Fat at Home" subtitle="Five methods compared by accuracy and cost per published research. The Navy tape method wins for most people." readTime="10 min" category="fitness" categoryLabel="Fitness Guide" relatedTools={[{title:"Body Fat Calculator",desc:"Navy method calculator.",href:"/fitness/body-fat-calculator",category:"fitness"},{title:"BMI Calculator",desc:"Quick BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Lean Body Mass",desc:"LBM estimation.",href:"/fitness/lean-body-mass-calculator",category:"fitness"}]} url="/guides/how-to-measure-body-fat-at-home">
    <QuickAnswer answer="According to published validation studies, the Navy tape method (measuring neck, waist, and hips) is the best home body fat measurement — ±3-4% accuracy, free, and takes 2 minutes. BIA scales (±4-8%) are convenient but less reliable. DEXA scan (±1-2%, $50-150) is the gold standard for clinical precision." />
    <SplitArticle content={content} injections={{ 2: <BodyFatMethodsSVG />, 3: <BodyFatRangesSVG /> }} />
  </BlogPageShell>); }
