import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Matcha During Pregnancy: Caffeine Guidance';
const description='Matcha-specific dose claims are not supported here; count caffeine using ACOG guidance.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/matcha"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/matcha"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-matcha.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-matcha.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
