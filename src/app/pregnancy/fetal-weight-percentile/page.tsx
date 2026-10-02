import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { FetalWeightCalc } from "./FetalWeightCalc";
export const metadata:Metadata={title:"Understanding Fetal Weight Percentiles",description:"Understand why gestational age and a specified growth reference matter for ultrasound percentiles.",alternates:{canonical:"/pregnancy/fetal-weight-percentile"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Understanding Fetal Weight Percentiles", description: "Understand why gestational age and a specified growth reference matter for ultrasound percentiles.", url: "/pregnancy/fetal-weight-percentile", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Understanding Fetal Weight Percentiles", description:"Understand why gestational age and a specified growth reference matter for ultrasound percentiles.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="pregnancy" title={"Understanding Fetal Weight Percentiles"} description={"Understand why gestational age and a specified growth reference matter for ultrasound percentiles."} lastUpdated={getLastUpdated("10-fetal-weight-percentile-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="pregnancy"&&t.slug!=="fetal-weight-percentile").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><FetalWeightCalc/><QuickAnswer answer={"Use the percentile and reference reported by your maternity team. This page no longer produces a percentile from a mixed-reference approximation."}/><SplitArticle content={getArticleContent("10-fetal-weight-percentile-calculator.md")}/></ToolPageShell>;}
