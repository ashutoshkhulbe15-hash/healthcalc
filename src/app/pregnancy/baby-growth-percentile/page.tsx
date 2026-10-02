import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { BabyGrowthCalc } from "./BabyGrowthCalc";
export const metadata:Metadata={title:"Baby Weight-for-age Percentile",description:"Estimate weight-for-age percentile from WHO daily LMS data, birth to five years.",alternates:{canonical:"/pregnancy/baby-growth-percentile"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Baby Weight-for-age Percentile", description: "Estimate weight-for-age percentile from WHO daily LMS data, birth to five years.", url: "/pregnancy/baby-growth-percentile", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Baby Weight-for-age Percentile", description:"Estimate weight-for-age percentile from WHO daily LMS data, birth to five years.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="pregnancy" title={"Baby Weight-for-age Percentile"} description={"Estimate weight-for-age percentile from WHO daily LMS data, birth to five years."} lastUpdated={getLastUpdated("34-baby-growth-percentile-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="pregnancy"&&t.slug!=="baby-growth-percentile").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><BabyGrowthCalc/><QuickAnswer answer={"This tool uses age in completed days and weight only. A percentile alone cannot determine whether growth is healthy."}/><SplitArticle content={getArticleContent("34-baby-growth-percentile-calculator.md")}/></ToolPageShell>;}
