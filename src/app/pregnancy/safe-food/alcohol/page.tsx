import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Can I Drink Alcohol During Pregnancy?';
const description='CDC guidance on alcohol during pregnancy and what to do if you drank before you knew.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/alcohol"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/alcohol"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-alcohol.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-alcohol.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
