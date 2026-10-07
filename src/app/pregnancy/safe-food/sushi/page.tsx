import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
const title='Sushi During Pregnancy: Raw and Cooked Fish';
const description='CDC seafood preparation, FDA fish categories and separate UK NHS guidance.';
export const metadata: Metadata = {title,description,alternates:{canonical:"/pregnancy/safe-food/sushi"},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:"/pregnancy/safe-food/sushi"},twitter:{card:"summary",title,description}};
export default function Page() {
 const content=getArticleContent("food-sushi.md");
 return <ToolPageShell lastUpdated={getLastUpdated("food-sushi.md")} category="pregnancy" title={title} description={description} features={["Method and scope stated","Authoritative source links"]} relatedTools={[]}><SplitArticle content={content} /></ToolPageShell>;
}
