import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { SleepCalc } from "./SleepCalc";
export const metadata:Metadata={title:"Sleep Duration and Efficiency Estimator",description:"Estimate time in bed, sleep duration and efficiency from a sleep diary.",alternates:{canonical:"/mental-health/sleep-quality-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Sleep Duration and Efficiency Estimator", description: "Estimate time in bed, sleep duration and efficiency from a sleep diary.", url: "/mental-health/sleep-quality-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Sleep Duration and Efficiency Estimator", description:"Estimate time in bed, sleep duration and efficiency from a sleep diary.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"Sleep Duration and Efficiency Estimator"} description={"Estimate time in bed, sleep duration and efficiency from a sleep diary."} lastUpdated={getLastUpdated("13-sleep-quality-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="sleep-quality-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><SleepCalc/><QuickAnswer answer={"This tool handles overnight times and awake minutes. It is an educational estimator, not the PSQI or a diagnostic score."}/><SplitArticle content={getArticleContent("13-sleep-quality-calculator.md")}/></ToolPageShell>;}
