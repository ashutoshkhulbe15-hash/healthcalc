import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TdeeTeensCalc } from "./TdeeTeensCalc";
export const metadata:Metadata={title:"Teen Energy Needs — Guidance",description:"NIDDK growth-aware guidance and Canadian teen nutrition information; no calorie target is calculated.",alternates:{canonical:"/body-metrics/tdee-calculator-teens"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Teen Energy Needs — Guidance", description: "NIDDK growth-aware guidance and Canadian teen nutrition information; no calorie target is calculated.", url: "/body-metrics/tdee-calculator-teens", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Teen Energy Needs — Guidance", description:"NIDDK growth-aware guidance and Canadian teen nutrition information; no calorie target is calculated.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="body-metrics" title={"Teen Energy Needs — Guidance"} description={"NIDDK growth-aware guidance and Canadian teen nutrition information; no calorie target is calculated."} lastUpdated={getLastUpdated("29-tdee-calculator-teens.md")} features={["Growth-aware guidance","Source links","No calorie target"]} relatedTools={[{title:"BMI-for-age reference",desc:"CDC percentile arithmetic with stated limits; not a calorie target.",href:"/body-metrics/bmi-calculator-teens",category:"body-metrics"}]}><TdeeTeensCalc/><QuickAnswer answer={"Teen energy needs depend on growth, body size and activity. This page links to NIDDK and Health Canada guidance; it does not calculate an individual calorie requirement."}/><SplitArticle content={getArticleContent("29-tdee-calculator-teens.md")}/></ToolPageShell>;}
