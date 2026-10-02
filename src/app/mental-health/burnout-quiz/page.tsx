import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { BurnoutCalc } from "./BurnoutCalc";
export const metadata:Metadata={title:"Burnout Guidance and Assessment Options",description:"Understand work-related burnout and find the official assessment options.",alternates:{canonical:"/mental-health/burnout-quiz"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Burnout Guidance and Assessment Options", description: "Understand work-related burnout and find the official assessment options.", url: "/mental-health/burnout-quiz", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Burnout Guidance and Assessment Options", description:"Understand work-related burnout and find the official assessment options.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"Burnout Guidance and Assessment Options"} description={"Understand work-related burnout and find the official assessment options."} lastUpdated={getLastUpdated("21-burnout-quiz.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="burnout-quiz").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><BurnoutCalc/><QuickAnswer answer={"A custom summed score cannot establish burnout severity. The previous adapted quiz and invented bands have been withdrawn."}/><SplitArticle content={getArticleContent("21-burnout-quiz.md")}/></ToolPageShell>;}
