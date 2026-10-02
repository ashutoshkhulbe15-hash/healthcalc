import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { ThyroidCalc } from "./ThyroidCalc";
export const metadata:Metadata={title:"Thyroid Lab Reference Range Comparison",description:"Compare TSH and optional free T4 with the intervals printed on your laboratory report.",alternates:{canonical:"/conditions/thyroid-function-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Thyroid Lab Reference Range Comparison", description: "Compare TSH and optional free T4 with the intervals printed on your laboratory report.", url: "/conditions/thyroid-function-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Thyroid Lab Reference Range Comparison", description:"Compare TSH and optional free T4 with the intervals printed on your laboratory report.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="conditions" title={"Thyroid Lab Reference Range Comparison"} description={"Compare TSH and optional free T4 with the intervals printed on your laboratory report."} lastUpdated={getLastUpdated("tool-thyroid-function-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="conditions"&&t.slug!=="thyroid-function-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><ThyroidCalc/><QuickAnswer answer={"Lab ranges, symptoms and context matter. This tool does not diagnose thyroid disease or apply one pregnancy range to everyone."}/><SplitArticle content={getArticleContent("tool-thyroid-function-calculator.md")}/></ToolPageShell>;}
