import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "BMI and Body-Fat Percentage: What Each Measures", description: "How BMI and body-fat estimates differ, with limits from the CDC.", alternates: { canonical: "/blog/bmi-vs-body-fat-which-matters" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "BMI and Body-Fat Percentage: What Each Measures", description: "How BMI and body-fat estimates differ, with limits from the CDC.", url: "/blog/bmi-vs-body-fat-which-matters", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"BMI and Body-Fat Percentage: What Each Measures", description:"How BMI and body-fat estimates differ, with limits from the CDC.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("35-bmi-vs-body-fat-which-matters.md");
  const lastUpdated = getLastUpdated("35-bmi-vs-body-fat-which-matters.md");
  const lastUpdatedISO = getLastUpdatedISO("35-bmi-vs-body-fat-which-matters.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="BMI and Body-Fat Percentage" subtitle="These measures describe different aspects of body composition and have different limitations." readTime="3 min" category="body-metrics" categoryLabel="Body Metrics" relatedTools={[{title:"BMI Calculator",desc:"BMI screening calculation.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Body Fat Equation Estimate",desc:"Equation-based estimate and limits.",href:"/fitness/body-fat-calculator",category:"fitness"},{title:"Lean Body Mass Estimate",desc:"Boer equation output and study scope.",href:"/fitness/lean-body-mass-calculator",category:"fitness"}]} url="/blog/bmi-vs-body-fat-which-matters">
    <QuickAnswer answer="BMI is a screening measure based on weight and height; it is not a direct body-fat measurement. It cannot distinguish fat from lean tissue or show fat distribution. Body-fat estimates also require method-specific interpretation. Neither measure alone diagnoses health or risk." />
    <SplitArticle content={content} />
  </BlogPageShell>); }
