import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Resting Heart Rate: Adult Reference and Limits", description: "The AHA adult resting-heart-rate reference and factors that affect interpretation; pediatric age-specific ranges are outside this page’s scope.", alternates: { canonical: "/guides/healthy-resting-heart-rate-by-age" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Resting Heart Rate: Adult Reference and Limits", description: "The AHA adult resting-heart-rate reference and factors that affect interpretation; pediatric age-specific ranges are outside this page’s scope.", url: "/guides/healthy-resting-heart-rate-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Resting Heart Rate: Adult Reference and Limits", description:"The AHA adult resting-heart-rate reference and factors that affect interpretation; pediatric age-specific ranges are outside this page’s scope.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("guide-resting-heart-rate-by-age.md");
  const lastUpdated = getLastUpdated("guide-resting-heart-rate-by-age.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-resting-heart-rate-by-age.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Resting Heart Rate: Adult Reference" subtitle="The AHA adult reference range and limits of interpreting one measurement." readTime="2 min" category="conditions" categoryLabel="Health Guide" relatedTools={[{title:"BMI Calculator",desc:"Body mass index.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Perceived Stress Scale information",desc:"PSS non-diagnostic information.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Sleep Quality",desc:"Sleep diary estimate.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]} url="/guides/healthy-resting-heart-rate-by-age">
    <QuickAnswer answer="For most adults, the AHA describes a resting heart rate of 60–100 beats per minute as typical. Activity, stress, anxiety, hormones and medicines can affect the rate. This is a reference range, not a diagnosis." />
    <SplitArticle content={content} />
  </BlogPageShell>); }
