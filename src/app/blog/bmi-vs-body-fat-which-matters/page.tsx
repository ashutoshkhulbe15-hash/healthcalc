import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BMIvsBodyFatSVG, BMILimitationsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "BMI vs Body Fat Percentage — Which Matters More?", description: "According to JAMA research, BMI misclassifies millions. Body fat percentage is more informative for individual health. Side-by-side comparison with evidence.", alternates: { canonical: "/blog/bmi-vs-body-fat-which-matters" } };
export default function Page() { const content = getArticleContent("35-bmi-vs-body-fat-which-matters.md");
  const lastUpdated = getLastUpdated("35-bmi-vs-body-fat-which-matters.md");
  const lastUpdatedISO = getLastUpdatedISO("35-bmi-vs-body-fat-which-matters.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="BMI vs Body Fat — Which Actually Matters?" subtitle="According to published research, body fat percentage is more informative — but BMI still has its place. Evidence-based comparison." readTime="11 min" category="body-metrics" categoryLabel="Body Metrics" relatedTools={[{title:"BMI Calculator",desc:"Quick BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Body Fat Calculator",desc:"Navy method.",href:"/fitness/body-fat-calculator",category:"fitness"},{title:"Ideal Weight",desc:"Four formulas.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"}]} url="/blog/bmi-vs-body-fat-which-matters">
    <QuickAnswer answer="According to research published in JAMA, BMI misclassifies up to 54 million Americans. Body fat percentage directly measures adipose tissue and is more informative for individual health per published research. If you could only track one metric, body fat percentage tells you more — but ideally use both alongside metabolic markers." />
    <SplitArticle content={content} injections={{ 1: <BMIvsBodyFatSVG />, 3: <BMILimitationsSVG /> }} />
  </BlogPageShell>); }
