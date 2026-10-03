import type { Metadata } from "next";
import { TdeeCalc } from "./TdeeCalc";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title="TDEE Estimate — Mifflin–St Jeor plus Activity Assumption";
const description="Estimate resting energy with the Mifflin–St Jeor equation, then apply an explicitly labeled site-selected activity factor. Not a personal calorie target.";
export const metadata:Metadata={title,description,alternates:{canonical:"/fitness/tdee-calculator"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/fitness/tdee-calculator",images:[{url:"/og-image.png",width:1200,height:630}]},twitter:{card:"summary_large_image",title,description,images:["/og-image.png"]}};
export default function Page(){const file="05-tdee-calculator.md";return <ToolPageShell lastUpdated={getLastUpdated(file)} category="fitness" title="Total Daily Energy Expenditure Estimate" description="Mifflin–St Jeor resting energy estimate multiplied by a site-selected activity assumption." features={["Original equation linked","Study age range applied","Model assumptions labeled"]} relatedTools={[]}>
  <TdeeCalc/><QuickAnswer answer="This estimate applies a selected site activity factor to the Mifflin–St Jeor resting energy equation. The source equation was developed in healthy adults aged 19–78. The result is an estimate, not measured expenditure or a personal calorie target."/><SplitArticle content={getArticleContent(file)}/>
</ToolPageShell>;}
