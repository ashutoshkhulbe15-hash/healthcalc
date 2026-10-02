import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { VitaminDCalc } from "./VitaminDCalc";
export const metadata:Metadata={title:"Vitamin D Daily Intake Reference",description:"Look up the US age-based recommended daily allowance, not a personalized supplement dose.",alternates:{canonical:"/conditions/vitamin-d-calculator"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Vitamin D Daily Intake Reference", description: "Look up the US age-based recommended daily allowance, not a personalized supplement dose.", url: "/conditions/vitamin-d-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Vitamin D Daily Intake Reference", description:"Look up the US age-based recommended daily allowance, not a personalized supplement dose.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="conditions" title={"Vitamin D Daily Intake Reference"} description={"Look up the US age-based recommended daily allowance, not a personalized supplement dose."} lastUpdated={getLastUpdated("tool-vitamin-d-calculator.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="conditions"&&t.slug!=="vitamin-d-calculator").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><VitaminDCalc/><QuickAnswer answer={"This reference is total intake from food and supplements. It is not deficiency treatment and does not assign a universal blood target."}/><SplitArticle content={getArticleContent("tool-vitamin-d-calculator.md")}/></ToolPageShell>;}
