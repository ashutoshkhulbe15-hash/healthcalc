import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Resting Heart Rate by Age: References and Limits", description: "The AHA adult resting-heart-rate reference and factors that affect interpretation; with a separately sourced pediatric reference table and limits of self-assessment.", alternates: { canonical: "/guides/healthy-resting-heart-rate-by-age" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Resting Heart Rate by Age: References and Limits", description: "The AHA adult resting-heart-rate reference and factors that affect interpretation; with a separately sourced pediatric reference table and limits of self-assessment.", url: "/guides/healthy-resting-heart-rate-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Resting Heart Rate by Age: References and Limits", description:"The AHA adult resting-heart-rate reference and factors that affect interpretation; with a separately sourced pediatric reference table and limits of self-assessment.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("guide-resting-heart-rate-by-age.md");
  const lastUpdated = getLastUpdated("guide-resting-heart-rate-by-age.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-resting-heart-rate-by-age.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Resting Heart Rate by Age: References" subtitle="Sourced age-reference intervals, measurement and limits of interpreting one reading." readTime="18 min" category="conditions" categoryLabel="Health Guide" relatedTools={[{title:"BMI Calculator",desc:"Body mass index.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Perceived Stress Scale information",desc:"PSS non-diagnostic information.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"Sleep Quality",desc:"Sleep diary estimate.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]} url="/guides/healthy-resting-heart-rate-by-age">
    <QuickAnswer answer="For most adults who are calm, resting and feeling well, the AHA describes 60–100 beats per minute as typical. Medicines, conditioning and symptoms affect interpretation. This is a reference range, not a diagnosis." source={{href:"https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate-pulse",label:"AHA: All About Heart Rate"}} />
    <SplitArticle content={content} />
  </BlogPageShell>); }
