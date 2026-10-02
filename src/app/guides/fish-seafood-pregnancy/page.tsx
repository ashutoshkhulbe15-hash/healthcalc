import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
const title='Fish and Seafood During Pregnancy: FDA/EPA Categories';
const description='How to use the current US fish-choice chart, serving guidance and cooking recommendations.';
const route="/guides/fish-seafood-pregnancy";
export const metadata:Metadata={title,description,alternates:{canonical:route},openGraph:{type:"website",siteName:"ProHealthIt",title,description,url:route},twitter:{card:"summary",title,description}};
export default function Page(){const content=getArticleContent("guide-fish-seafood-pregnancy.md");return <BlogPageShell title={title} subtitle={description} category="pregnancy" categoryLabel="Pregnancy" url={route} lastUpdated={getLastUpdated("guide-fish-seafood-pregnancy.md")} lastUpdatedISO={getLastUpdatedISO("guide-fish-seafood-pregnancy.md")} readTime="2 min" relatedTools={[
  {title:'Salmon',desc:"See source-based guidance.",href:'/pregnancy/safe-food/salmon',category:"pregnancy"},
  {title:'Tuna',desc:"See source-based guidance.",href:'/pregnancy/safe-food/tuna',category:"pregnancy"},
  {title:'Sushi',desc:"See source-based guidance.",href:'/pregnancy/safe-food/sushi',category:"pregnancy"}
]}><SplitArticle content={content} /></BlogPageShell>}
