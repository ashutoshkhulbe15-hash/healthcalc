import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { AdhdCalc } from "./AdhdCalc";
export const metadata:Metadata={title:"Adult ADHD Screening Guidance",description:"Find official ASRS versions and their use conditions.",alternates:{canonical:"/mental-health/adhd-self-assessment"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Adult ADHD Screening Guidance", description: "Find official ASRS versions and their use conditions.", url: "/mental-health/adhd-self-assessment", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Adult ADHD Screening Guidance", description:"Find official ASRS versions and their use conditions.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"Adult ADHD Screening Guidance"} description={"Find official ASRS versions and their use conditions."} lastUpdated={getLastUpdated("26-adhd-self-assessment.md")} features={["Official ASRS versions","Source links","No online assessment"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="adhd-self-assessment").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><AdhdCalc/><QuickAnswer answer={"ASRS versions have their own items and scoring instructions. Use the instructions for the exact version; this page does not administer or score the screen."}/><SplitArticle content={getArticleContent("26-adhd-self-assessment.md")}/></ToolPageShell>;}
