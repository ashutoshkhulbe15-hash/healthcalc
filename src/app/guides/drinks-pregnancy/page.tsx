import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
const title='Drinks During Pregnancy: Caffeine, Alcohol and Juice';
const description='Current US guidance on total caffeine, alcohol and unpasteurized juice. The guide avoids unsupported drink-specific dose claims.';
const route="/guides/drinks-pregnancy";
export const metadata:Metadata={title,description,alternates:{canonical:route},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:route},twitter:{card:"summary",title,description}};
export default function Page(){const content=getArticleContent("guide-drinks-pregnancy.md");return <BlogPageShell title={title} subtitle={description} category="pregnancy" categoryLabel="Pregnancy" url={route} lastUpdated={getLastUpdated("guide-drinks-pregnancy.md")} lastUpdatedISO={getLastUpdatedISO("guide-drinks-pregnancy.md")} readTime="2 min" relatedTools={[
  {title:'Coffee and Caffeine',desc:"See source-based guidance.",href:'/pregnancy/safe-food/coffee',category:"pregnancy"},
  {title:'Alcohol',desc:"See source-based guidance.",href:'/pregnancy/safe-food/alcohol',category:"pregnancy"},
  {title:'Food checker',desc:"See source-based guidance.",href:'/pregnancy/safe-food-checker',category:"pregnancy"}
]}><SplitArticle content={content} /></BlogPageShell>}
