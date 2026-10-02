import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Coffee and Caffeine During Pregnancy';
const description='ACOG caffeine guidance and how to count a variable amount across your day.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/coffee"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/coffee"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-coffee.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-coffee.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
