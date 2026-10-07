import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Measuring Body Fat at Home: Limits of Estimates", description: "Understand limits of body-composition estimates and how BMI screening differs from circumference-based equations.", alternates: { canonical: "/guides/how-to-measure-body-fat-at-home" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Measuring Body Fat at Home: Limits of Estimates", description: "Understand limits of body-composition estimates and how BMI screening differs from circumference-based equations.", url: "/guides/how-to-measure-body-fat-at-home", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Measuring Body Fat at Home: Limits of Estimates", description:"Understand limits of body-composition estimates and how BMI screening differs from circumference-based equations.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("guide-measure-body-fat-at-home.md");
  const lastUpdated = getLastUpdated("guide-measure-body-fat-at-home.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-measure-body-fat-at-home.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Measuring Body Fat at Home" subtitle="What BMI and circumference-based body-composition estimates can and cannot tell you." readTime="18 min" category="fitness" categoryLabel="Fitness Guide" relatedTools={[{title:"Body Fat Calculator",desc:"Army-regulation circumference equation estimate and limits.",href:"/fitness/body-fat-calculator",category:"fitness"},{title:"BMI Calculator",desc:"Quick BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Lean Body Mass",desc:"LBM estimation.",href:"/fitness/lean-body-mass-calculator",category:"fitness"}]} url="/guides/how-to-measure-body-fat-at-home">
    <QuickAnswer answer="Home body-fat methods estimate composition and do not diagnose health. BMI is a screening measure, and circumference equations are model estimates; results depend on method and population." source={{href:"https://www.cdc.gov/bmi/about/index.html",label:"CDC: BMI screening and assessment limits"}} />
    <SplitArticle content={content} />
  </BlogPageShell>); }
