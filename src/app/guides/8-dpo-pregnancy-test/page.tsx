import type {Metadata} from "next";
import {BlogPageShell} from "@/components/BlogPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {getArticleContent,getLastUpdated,getLastUpdatedISO} from "@/lib/content";
export const metadata:Metadata={title:"8 DPO Pregnancy Test \u2014 What an Early Result Means",description:"Understand the limits of testing eight days after ovulation and when to repeat an early negative.",alternates:{canonical:"/guides/8-dpo-pregnancy-test"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "8 DPO Pregnancy Test — What an Early Result Means", description: "Understand the limits of testing eight days after ovulation and when to repeat an early negative.", url: "/guides/8-dpo-pregnancy-test", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"8 DPO Pregnancy Test — What an Early Result Means", description:"Understand the limits of testing eight days after ovulation and when to repeat an early negative.", images:["/og-image.png"]},
};
export default function Page(){return <BlogPageShell title={"8 DPO Pregnancy Test \u2014 What an Early Result Means"} subtitle={"Understand the limits of testing eight days after ovulation and when to repeat an early negative."} readTime="15 min" category="pregnancy" categoryLabel="Health Guide" relatedTools={[]} url="/guides/8-dpo-pregnancy-test" lastUpdated={getLastUpdated("guide-8-dpo-pregnancy-test.md")} lastUpdatedISO={getLastUpdatedISO("guide-8-dpo-pregnancy-test.md")}><SplitArticle content={getArticleContent("guide-8-dpo-pregnancy-test.md")}/></BlogPageShell>;}
