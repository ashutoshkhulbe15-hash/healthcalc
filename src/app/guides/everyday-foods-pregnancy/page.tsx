import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
const title='Everyday Food Handling During Pregnancy';
const description='CDC and FDA guidance on produce, sprouts, juice, dairy and eggs.';
const route="/guides/everyday-foods-pregnancy";
export const metadata:Metadata={title,description,alternates:{canonical:route},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:route},twitter:{card:"summary",title,description}};
export default function Page(){const content=getArticleContent("guide-everyday-foods-pregnancy.md");return <BlogPageShell title={title} subtitle={description} category="pregnancy" categoryLabel="Pregnancy" url={route} lastUpdated={getLastUpdated("guide-everyday-foods-pregnancy.md")} lastUpdatedISO={getLastUpdatedISO("guide-everyday-foods-pregnancy.md")} readTime="2 min" relatedTools={[
  {title:'Food checker',desc:"See source-based guidance.",href:'/pregnancy/safe-food-checker',category:"pregnancy"},
  {title:'Eggs',desc:"See source-based guidance.",href:'/pregnancy/safe-food/eggs',category:"pregnancy"},
  {title:'Pregnancy nutrition',desc:"See source-based guidance.",href:'/blog/pregnancy-nutrition-guide',category:"pregnancy"}
]}><SplitArticle content={content} /></BlogPageShell>}
