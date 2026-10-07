import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Eggs During Pregnancy: Cooking and Handling';
const description='CDC egg preparation advice, the U.K. NHS exception and NIH choline references.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/eggs"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/eggs"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-eggs.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-eggs.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
