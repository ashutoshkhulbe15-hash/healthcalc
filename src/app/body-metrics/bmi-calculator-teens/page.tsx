import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { BmiTeensCalc } from "./BmiTeensCalc";
export const metadata:Metadata={title:"BMI Calculator for Children and Teens",description:"Use CDC 2000 BMI-for-age LMS data with sex and age in completed years and months.",alternates:{canonical:"/body-metrics/bmi-calculator-teens"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "BMI Calculator for Children and Teens", description: "Use CDC 2000 BMI-for-age LMS data with sex and age in completed years and months.", url: "/body-metrics/bmi-calculator-teens", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"BMI Calculator for Children and Teens", description:"Use CDC 2000 BMI-for-age LMS data with sex and age in completed years and months.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="body-metrics" title={"BMI Calculator for Children and Teens"} description={"Use CDC 2000 BMI-for-age LMS data with sex and age in completed years and months."} lastUpdated={getLastUpdated("15-bmi-calculator-teens.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="body-metrics"&&t.slug!=="bmi-calculator-teens").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><BmiTeensCalc/><QuickAnswer answer={"Children and teens need age-specific interpretation. Categories use the unrounded CDC percentile, not adult BMI thresholds."}/><SplitArticle content={getArticleContent("15-bmi-calculator-teens.md")}/></ToolPageShell>;}
