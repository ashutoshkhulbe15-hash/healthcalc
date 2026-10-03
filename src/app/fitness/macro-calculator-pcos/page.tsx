import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { PcosCalc } from "./PcosCalc";
export const metadata:Metadata={title:"PCOS Nutrition Guidance",description:"What the 2023 international PCOS guideline says about diet composition.",alternates:{canonical:"/fitness/macro-calculator-pcos"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "PCOS Nutrition Guidance", description: "What the 2023 international PCOS guideline says about diet composition.", url: "/fitness/macro-calculator-pcos", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"PCOS Nutrition Guidance", description:"What the 2023 international PCOS guideline says about diet composition.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="fitness" title={"PCOS Nutrition Guidance"} description={"What the 2023 international PCOS guideline says about diet composition."} lastUpdated={getLastUpdated("32-macro-calculator-pcos.md")} features={["International guideline summary","Source link","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="fitness"&&t.slug!=="macro-calculator-pcos").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><PcosCalc/><QuickAnswer answer={"The 2023 international PCOS guideline states there is no evidence that one diet composition is superior for PCOS outcomes. This page provides guidance information, not individualized macro amounts."}/><SplitArticle content={getArticleContent("32-macro-calculator-pcos.md")}/></ToolPageShell>;}
