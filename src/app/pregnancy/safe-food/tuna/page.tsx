import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Tuna During Pregnancy: FDA/EPA Categories';
const description='Current US fish-choice advice for the tuna types listed in the FDA/EPA chart.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/tuna"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/tuna"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-tuna.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-tuna.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
