import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { AnemiaCalc } from "./AnemiaCalc";
export const metadata:Metadata={title:"Anemia Symptoms and Testing",description:"Understand why symptoms alone cannot calculate anemia risk or replace blood tests.",alternates:{canonical:"/conditions/anemia-risk-checker"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Anemia Symptoms and Testing", description: "Understand why symptoms alone cannot calculate anemia risk or replace blood tests.", url: "/conditions/anemia-risk-checker", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Anemia Symptoms and Testing", description:"Understand why symptoms alone cannot calculate anemia risk or replace blood tests.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="conditions" title={"Anemia Symptoms and Testing"} description={"Understand why symptoms alone cannot calculate anemia risk or replace blood tests."} lastUpdated={getLastUpdated("27-anemia-risk-checker.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="conditions"&&t.slug!=="anemia-risk-checker").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><AnemiaCalc/><QuickAnswer answer={"The previous weighted symptom score was not validated. Symptoms and a clinical assessment guide testing; a checklist cannot rule anemia out."}/><SplitArticle content={getArticleContent("27-anemia-risk-checker.md")}/></ToolPageShell>;}
