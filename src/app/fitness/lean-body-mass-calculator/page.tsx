import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { LbmCalc } from "./LbmCalc";
export const metadata:Metadata={title:"Lean Body Mass Calculator",description:"Estimate adult lean body mass using the Boer equation, with a separate James comparison.",alternates:{canonical:"/fitness/lean-body-mass-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Lean Body Mass Calculator", description: "Estimate adult lean body mass using the Boer equation, with a separate James comparison.", url: "/fitness/lean-body-mass-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Lean Body Mass Calculator", description:"Estimate adult lean body mass using the Boer equation, with a separate James comparison.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="fitness" title={"Lean Body Mass Calculator"} description={"Estimate adult lean body mass using the Boer equation, with a separate James comparison."} lastUpdated={getLastUpdated("23-lean-body-mass-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="fitness"&&t.slug!=="lean-body-mass-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><LbmCalc/><QuickAnswer answer={"Boer is the main estimate. James is shown separately; the tool does not average the formulas or accept measured body-fat input."}/><SplitArticle content={getArticleContent("23-lean-body-mass-calculator.md")}/></ToolPageShell>;}
