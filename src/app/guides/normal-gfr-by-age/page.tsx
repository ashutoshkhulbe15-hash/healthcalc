import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { GFRByAgeSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Normal GFR by Age — KDIGO Stages & What to Expect", description: "Normal GFR declines with age per published nephrology data. GFR of 60-75 in adults over 70 may be age-appropriate. KDIGO CKD staging and when to be concerned.", alternates: { canonical: "/guides/normal-gfr-by-age" } };
export default function Page() { const content = getArticleContent("guide-normal-gfr-by-age.md");
  const lastUpdated = getLastUpdated("guide-normal-gfr-by-age.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-normal-gfr-by-age.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Normal GFR by Age — What Your Number Means" subtitle="GFR naturally declines with age per published nephrology research. KDIGO staging, age-adjusted interpretation, and when to consult a provider." readTime="10 min" category="conditions" categoryLabel="Health Guide" relatedTools={[{title:"GFR Calculator",desc:"CKD-EPI 2021 formula.",href:"/conditions/gfr-calculator",category:"conditions"},{title:"Kidney Function",desc:"Comprehensive assessment.",href:"/conditions/kidney-function-calculator",category:"conditions"},{title:"A1C Converter",desc:"Diabetes screening.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"}]} url="/guides/normal-gfr-by-age">
    <QuickAnswer answer="According to KDIGO guidelines, normal GFR is above 90 mL/min for young adults but naturally declines ~1 mL/min/year after 40 per published nephrology data. Average GFR at age 70+ is ~75 mL/min. CKD requires GFR below 60 sustained for 3+ months — a single low reading is not diagnostic. Discuss results with your healthcare provider." />
    <SplitArticle content={content} injections={{ 1: <GFRByAgeSVG /> }} />
  </BlogPageShell>); }
