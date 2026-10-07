import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { BurnoutCalc } from "./BurnoutCalc";
export const metadata:Metadata={title:"WHO Burnout Definition and Guidance",description:"WHO's ICD-11 description of burnout as an occupational phenomenon.",alternates:{canonical:"/mental-health/burnout-quiz"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "WHO Burnout Definition and Guidance", description: "WHO's ICD-11 description of burnout as an occupational phenomenon.", url: "/mental-health/burnout-quiz", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Burnout Definition and Workplace Support", description:"Read WHO burnout definitions and source-linked workplace support guidance.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"WHO Burnout Definition and Guidance"} description={"WHO's ICD-11 description of burnout as an occupational phenomenon."} lastUpdated={getLastUpdated("21-burnout-quiz.md")} features={["WHO definition","Source link","No online assessment"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="burnout-quiz").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><BurnoutCalc/><QuickAnswer answer={"WHO classifies burnout in ICD-11 as an occupational phenomenon, not a medical condition, and limits the term to the occupational context."}/><SplitArticle content={getArticleContent("21-burnout-quiz.md")}/></ToolPageShell>;}
