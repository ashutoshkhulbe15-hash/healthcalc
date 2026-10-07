import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { EpdsCalc } from "./EpdsCalc";
export const metadata:Metadata={title:"Edinburgh Postnatal Depression Scale information",description:"Learn about the EPDS screening questionnaire, its non-diagnostic limits and official source information.",alternates:{canonical:"/mental-health/postpartum-depression-screening"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Edinburgh Postnatal Depression Scale information", description: "Learn about the EPDS screening questionnaire, its non-diagnostic limits and official source information.", url: "/mental-health/postpartum-depression-screening", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Edinburgh Postnatal Depression Scale information", description:"Learn about the EPDS screening questionnaire, its non-diagnostic limits and official source information.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title={"Edinburgh Postnatal Depression Scale information"} description={"Read about the EPDS, its screening limits and official source information."} lastUpdated={getLastUpdated("tool-postpartum-depression-screening.md")} features={["Source information","Non-diagnostic limits","Reproduction conditions"]} relatedTools={TOOLS.filter(t=>t.category==="mental-health"&&t.slug!=="postpartum-depression-screening").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><EpdsCalc/><QuickAnswer source={{href:"https://www.cope.org.au/health-professionals/screening-and-assessment-tools/using-the-epds-as-a-screening-tool",label:"COPE: EPDS use, screening and follow-up"}} answer={"The EPDS is a screening questionnaire, not a diagnosis. This site's form and score are withheld while online reproduction and administration permissions are confirmed."}/><SplitArticle content={getArticleContent("tool-postpartum-depression-screening.md")}/></ToolPageShell>;}
