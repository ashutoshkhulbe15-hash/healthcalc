import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { IOMRangesSVG, TrimesterGainSVG, WeightBreakdownSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Pregnancy Weight Gain by Trimester — IOM Chart", description: "First trimester: 1-5 lbs. Second/third: ~1 lb/week for normal weight. IOM guidelines by BMI and trimester with weekly rate expectations.", alternates: { canonical: "/guides/pregnancy-weight-gain-by-trimester" } };
export default function Page() { const content = getArticleContent("guide-pregnancy-weight-gain-by-trimester.md");
  const lastUpdated = getLastUpdated("guide-pregnancy-weight-gain-by-trimester.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-pregnancy-weight-gain-by-trimester.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Pregnancy Weight Gain by Trimester" subtitle="IOM guidelines for healthy weight gain in each trimester, adjusted by pre-pregnancy BMI. Where every pound goes." readTime="10 min" category="pregnancy" categoryLabel="Pregnancy Guide" relatedTools={[{title:"Weight Gain Calculator",desc:"Track week by week.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"Nutrition Guide",desc:"Full pregnancy nutrition.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"}]} url="/guides/pregnancy-weight-gain-by-trimester">
    <QuickAnswer answer="According to IOM 2009 guidelines (current ACOG standard): first trimester 1-4 lbs total, second and third trimesters ~1 lb/week for normal-weight women. Total gain depends on pre-pregnancy BMI: 25-35 lbs (normal), 15-25 lbs (overweight), 28-40 lbs (underweight), 11-20 lbs (obese)." />
    <SplitArticle content={content} injections={{ 1: <IOMRangesSVG />, 4: <TrimesterGainSVG />, 5: <WeightBreakdownSVG /> }} />
  </BlogPageShell>); }
