import type {Metadata} from "next";
import {BlogPageShell} from "@/components/BlogPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {getArticleContent,getLastUpdated,getLastUpdatedISO} from "@/lib/content";
export const metadata:Metadata={title:"GFR by Age: Understanding eGFR",description:"Age-group eGFR averages are population context, not personal normal ranges; learn the adult CKD-EPI 2021 estimate and its limits.",alternates:{canonical:"/guides/normal-gfr-by-age"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "GFR by Age: Understanding eGFR", description: "Age-group eGFR averages are population context, not personal normal ranges; learn the adult CKD-EPI 2021 estimate and its limits.", url: "/guides/normal-gfr-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"GFR by Age: Understanding eGFR", description:"Age-group eGFR averages are population context, not personal normal ranges; learn the adult CKD-EPI 2021 estimate and its limits.", images:["/og-image.png"]},
};
export default function Page(){return <BlogPageShell title={"GFR by Age: Understanding eGFR"} subtitle={"Age-group eGFR averages are population context, not personal normal ranges; learn the adult CKD-EPI 2021 estimate and its limits."} readTime="15 min" category="conditions" categoryLabel="Health Guide" relatedTools={[]} url="/guides/normal-gfr-by-age" lastUpdated={getLastUpdated("guide-normal-gfr-by-age.md")} lastUpdatedISO={getLastUpdatedISO("guide-normal-gfr-by-age.md")}><SplitArticle content={getArticleContent("guide-normal-gfr-by-age.md")}/></BlogPageShell>;}
