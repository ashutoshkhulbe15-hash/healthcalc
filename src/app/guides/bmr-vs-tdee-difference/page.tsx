import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BMRvsTDEEVisualSVG, TDEEComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "BMR vs TDEE — The Difference Explained", description: "Resting energy and total expenditure explained, with traceable equations, illustrative activity factors and limits of calorie estimates.", alternates: { canonical: "/guides/bmr-vs-tdee-difference" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "BMR vs TDEE — The Difference Explained", description: "Resting energy and total expenditure explained, with traceable equations, illustrative activity factors and limits of calorie estimates.", url: "/guides/bmr-vs-tdee-difference", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"BMR vs TDEE — The Difference Explained", description:"Resting energy and total expenditure explained, with traceable equations, illustrative activity factors and limits of calorie estimates.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("guide-bmr-vs-tdee.md");
  const lastUpdated = getLastUpdated("guide-bmr-vs-tdee.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-bmr-vs-tdee.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="BMR vs TDEE — What Each Number Means" subtitle="Understand resting and total energy estimates, the equation and the assumptions behind the numbers." readTime="6 min read" category="fitness" categoryLabel="Fitness Guide" relatedTools={[{title:"TDEE Calculator",desc:"Calculate your TDEE.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"BMR Calculator",desc:"Calculate your BMR.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},{title:"Calorie Deficit",desc:"Set your deficit.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}]} url="/guides/bmr-vs-tdee-difference">
    <QuickAnswer source={{href:"https://my.clevelandclinic.org/health/body/basal-metabolic-rate-bmr",label:"Cleveland Clinic: resting expenditure and individual intake questions"}} answer="A resting estimate concerns energy use at rest. Total expenditure includes activity and food processing. A calculator estimates these quantities; neither output is a personal intake prescription or a universal minimum." />
    <SplitArticle content={content} injections={{ 1: <BMRvsTDEEVisualSVG />, 2: <TDEEComponentsSVG /> }} />
  </BlogPageShell>); }
