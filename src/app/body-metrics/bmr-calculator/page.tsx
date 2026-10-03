import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmrCalc } from "./BmrCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title="Resting Energy Estimate — Mifflin–St Jeor";
const description="Estimate resting energy expenditure with the Mifflin–St Jeor equation for ages 19–78, the original study range. Not a calorie prescription.";
export const metadata:Metadata={title,description,alternates:{canonical:"/body-metrics/bmr-calculator"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/body-metrics/bmr-calculator",images:[{url:"/og-image.png",width:1200,height:630}]},twitter:{card:"summary_large_image",title,description,images:["/og-image.png"]}};
export default function Page(){const file="18-bmr-calculator.md";return <ToolPageShell lastUpdated={getLastUpdated(file)} category="body-metrics" title="Resting Energy Estimate" description="Mifflin–St Jeor resting energy estimate, with source population and limits stated." features={["Original equation linked","Study age range applied","Estimate limits stated"]} relatedTools={[]}>
  <BmrCalc/><QuickAnswer answer="Mifflin–St Jeor estimates resting energy expenditure (REE) from weight, height, age and sex. The original study developed the equation in healthy adults aged 19–78; it is an estimate, not a measured value or calorie prescription."/><SplitArticle content={getArticleContent(file)}/>
</ToolPageShell>;}
