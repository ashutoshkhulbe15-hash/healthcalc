import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Cod During Pregnancy';
const description='FDA/EPA fish portions and CDC cooking guidance for cod.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/cod"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/cod"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-cod.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-cod.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
