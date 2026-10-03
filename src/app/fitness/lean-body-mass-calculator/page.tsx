import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { LbmCalc } from "./LbmCalc";
export const metadata:Metadata={title:"Lean Body Mass Equation Estimate",description:"Calculate the Boer height-and-weight equation output with cited population limits.",alternates:{canonical:"/fitness/lean-body-mass-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Lean Body Mass Equation Estimate", description: "Calculate the Boer height-and-weight equation output with cited population limits.", url: "/fitness/lean-body-mass-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Lean Body Mass Equation Estimate", description:"Calculate the Boer height-and-weight equation output with cited population limits.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="fitness" title={"Lean Body Mass Equation Estimate"} description={"Calculate the Boer height-and-weight equation output with cited population limits."} lastUpdated={getLastUpdated("23-lean-body-mass-calculator.md")} features={["Equation and study scope explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="fitness"&&t.slug!=="lean-body-mass-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><LbmCalc/><QuickAnswer answer={"This is the Boer equation output, not a body-composition measurement. A cited study found height-and-weight estimates did not adequately approximate CT results in adults treated for head-and-neck cancer."}/><SplitArticle content={getArticleContent("23-lean-body-mass-calculator.md")}/></ToolPageShell>;}
