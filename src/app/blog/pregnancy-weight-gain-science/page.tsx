import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { IOMRangesSVG, WeightBreakdownSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Science of Pregnancy Weight Gain — IOM Guidelines", description: "Where pregnancy weight goes: baby, placenta, blood volume, fat stores. IOM 2009 ranges by pre-pregnancy BMI. Why weight restriction during pregnancy is dangerous.", alternates: { canonical: "/blog/pregnancy-weight-gain-science" } };
export default function Page() { const content = getArticleContent("37-pregnancy-weight-gain-science.md");
  const lastUpdated = getLastUpdated("37-pregnancy-weight-gain-science.md");
  const lastUpdatedISO = getLastUpdatedISO("37-pregnancy-weight-gain-science.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="The Science of Pregnancy Weight Gain" subtitle="IOM guidelines examined — what they get right, their limitations, and what published outcomes research says actually matters." readTime="12 min" category="pregnancy" categoryLabel="Pregnancy" relatedTools={[{title:"Weight Gain Calculator",desc:"Track week by week.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Trimester Guide",desc:"Gain by trimester.",href:"/guides/pregnancy-weight-gain-by-trimester",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"}]} url="/blog/pregnancy-weight-gain-science">
    <QuickAnswer answer="According to the IOM 2009 guidelines (current ACOG standard), recommended gain is 25-35 lbs for normal weight, 15-25 for overweight, 28-40 for underweight, 11-20 for obese. Published research since 2009 has raised questions about racial/ethnic equity in these ranges. Outcomes research suggests overall health behaviors matter more than hitting an exact weight number." />
    <SplitArticle content={content} injections={{ 1: <IOMRangesSVG />, 5: <WeightBreakdownSVG /> }} />
  </BlogPageShell>); }
