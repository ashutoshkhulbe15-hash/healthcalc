import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { PregnancyWeightGainCalc } from "./PregnancyWeightGainCalc";
export const metadata:Metadata={title:"Pregnancy Weight Gain Calculator",description:"Compare pre-pregnancy BMI and gain so far with U.S. total-pregnancy reference ranges for one baby or twins.",alternates:{canonical:"/pregnancy/weight-gain-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Pregnancy Weight Gain Calculator", description: "Compare pre-pregnancy BMI and gain so far with U.S. total-pregnancy reference ranges for one baby or twins.", url: "/pregnancy/weight-gain-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Pregnancy Weight Gain Calculator", description:"Compare pre-pregnancy BMI and gain so far with U.S. total-pregnancy reference ranges for one baby or twins.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="pregnancy" title={"Pregnancy Weight Gain Calculator"} description={"Compare pre-pregnancy BMI and gain so far with U.S. National Academies total-pregnancy ranges presented by CDC for one baby or twins."} lastUpdated={getLastUpdated("01-pregnancy-weight-gain-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="pregnancy"&&t.slug!=="weight-gain-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><PregnancyWeightGainCalc/><QuickAnswer answer={"These U.S. population ranges are not individual goals; discuss personal targets with your maternity team. The tool does not infer weekly trajectories."}/><SplitArticle content={getArticleContent("01-pregnancy-weight-gain-calculator.md")}/></ToolPageShell>;}
