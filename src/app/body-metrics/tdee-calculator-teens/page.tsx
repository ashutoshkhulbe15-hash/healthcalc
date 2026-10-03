import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { TdeeTeensCalc } from "./TdeeTeensCalc";
export const metadata:Metadata={title:"Teen Energy Needs — Guidance",description:"USDA teen nutrition information; no individual calorie target is calculated.",alternates:{canonical:"/body-metrics/tdee-calculator-teens"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Teen Energy Needs — Guidance", description: "USDA teen nutrition information; no individual calorie target is calculated.", url: "/body-metrics/tdee-calculator-teens", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Teen Energy Needs — Guidance", description:"USDA teen nutrition information; no individual calorie target is calculated.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="body-metrics" title={"Teen Energy Needs — Guidance"} description={"USDA teen nutrition information; no individual calorie target is calculated."} lastUpdated={getLastUpdated("29-tdee-calculator-teens.md")} features={["USDA teen nutrition information","Source links","No calorie target"]} relatedTools={TOOLS.filter(t=>t.category==="body-metrics"&&t.slug!=="tdee-calculator-teens").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><TdeeTeensCalc/><QuickAnswer answer={"The former personalized calorie output has been withdrawn. This page links to USDA teen nutrition information and does not calculate an individual calorie requirement."}/><SplitArticle content={getArticleContent("29-tdee-calculator-teens.md")}/></ToolPageShell>;}
