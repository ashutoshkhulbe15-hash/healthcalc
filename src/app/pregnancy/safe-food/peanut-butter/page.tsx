import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Peanut Butter During Pregnancy';
const description='What NIAID allergy-prevention guidance does and does not say about maternal diet.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/peanut-butter"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/peanut-butter"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-peanut-butter.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-peanut-butter.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
