import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { EpdsCalc } from "./EpdsCalc";
export const metadata:Metadata={title:"Postpartum Depression Screening \u2014 EPDS",description:"Answer ten questions about the past seven days; review a score and guidance for seeking support.",alternates:{canonical:"/mental-health/postpartum-depression-screening"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Postpartum Depression Screening — EPDS", description: "Answer ten questions about the past seven days; review a score and guidance for seeking support.", url: "/mental-health/postpartum-depression-screening", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Postpartum Depression Screening — EPDS", description:"Answer ten questions about the past seven days; review a score and guidance for seeking support.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"Postpartum Depression Screening \u2014 EPDS"} description={"Answer ten questions about the past seven days; review a score and guidance for seeking support."} lastUpdated={getLastUpdated("tool-postpartum-depression-screening.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="postpartum-depression-screening").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><EpdsCalc/><QuickAnswer answer={"The EPDS is a screen, not a diagnosis. COPE flags scores of 13 or more for follow-up; any positive self-harm response needs prompt assessment."}/><SplitArticle content={getArticleContent("tool-postpartum-depression-screening.md")}/></ToolPageShell>;}
