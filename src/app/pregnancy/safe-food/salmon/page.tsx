import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Salmon During Pregnancy';
const description='FDA/EPA seafood portions, CDC preparation advice and salmon nutrient references.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/salmon"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/salmon"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-salmon.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-salmon.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
