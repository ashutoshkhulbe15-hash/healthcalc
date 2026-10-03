import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { MacroCalc } from "./MacroCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title="Macronutrient Percentage Allocator";
const description="Convert a user-entered calorie total and protein, carbohydrate, and fat percentages to grams. The tool does not recommend a calorie total or ratio.";
export const metadata:Metadata={title,description,alternates:{canonical:"/fitness/macro-calculator"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/fitness/macro-calculator",images:[{url:"/og-image.png",width:1200,height:630}]},twitter:{card:"summary_large_image",title,description,images:["/og-image.png"]}};
export default function Page(){const file="06-macro-calculator.md";return <ToolPageShell lastUpdated={getLastUpdated(file)} category="fitness" title="Macronutrient Percentage Allocator" description="Allocate a calorie total among percentages that you choose; no dietary recommendation is made." features={["User-selected values","Source-linked conversion factors","Arithmetic limits stated"]} relatedTools={[]}>
  <MacroCalc/><QuickAnswer answer="Enter a calorie total and your own protein, carbohydrate, and fat percentages that add to 100. The calculator converts those amounts to grams using U.S. nutrition-label calorie-per-gram factors; it does not choose or recommend the inputs."/><SplitArticle content={getArticleContent(file)}/>
</ToolPageShell>;}
