import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SeniorProteinCalc } from "./SeniorProteinCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

const title="Protein Reference for Healthy Older Adults — ESPEN";
const description="Calculate the arithmetic equivalent of ESPEN's 1.0–1.2 g/kg/day suggested range for healthy older persons. European population guidance, not a personal prescription.";
export const metadata: Metadata = {
  title,description,alternates:{canonical:"/body-metrics/protein-needs-seniors"},
  openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/body-metrics/protein-needs-seniors",images:[{url:"/og-image.png",width:1200,height:630}]},
  twitter:{card:"summary_large_image",title,description,images:["/og-image.png"]},
};
export default function Page(){const file="30-protein-needs-seniors.md";return <ToolPageShell lastUpdated={getLastUpdated(file)} category="body-metrics" title="Protein Reference for Healthy Older Adults"
  description="European ESPEN population guidance for healthy older persons, with source and limits stated." features={["ESPEN source linked","Weight-based arithmetic","Clinical limits stated"]}
  relatedTools={[{title:"Protein Intake Reference",desc:"Current U.S. population guideline arithmetic.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"GFR Calculator",desc:"Estimate eGFR using the CKD-EPI 2021 equation.",href:"/conditions/gfr-calculator",category:"conditions"}] }>
  <SeniorProteinCalc />
  <QuickAnswer answer="ESPEN's 2022 geriatric nutrition guideline says older persons should receive at least 1 g/kg/day, individually adjusted. It notes 1.0–1.2 g/kg/day has been suggested for healthy older persons. This calculator shows only that arithmetic range." />
  <SplitArticle content={getArticleContent(file)} />
</ToolPageShell>;}
