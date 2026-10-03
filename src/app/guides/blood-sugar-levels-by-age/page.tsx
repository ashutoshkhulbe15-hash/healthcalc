import type {Metadata} from "next";
import {BlogPageShell} from "@/components/BlogPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {getArticleContent,getLastUpdated,getLastUpdatedISO} from "@/lib/content";
export const metadata:Metadata={title:"Blood Sugar Tests: Diagnostic Ranges and Limits",description:"Nonpregnant diagnostic thresholds and how pregnancy testing protocols differ.",alternates:{canonical:"/guides/blood-sugar-levels-by-age"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Blood Sugar Tests: Diagnostic Ranges and Limits", description: "Nonpregnant diagnostic thresholds and how pregnancy testing protocols differ.", url: "/guides/blood-sugar-levels-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Blood Sugar Tests: Diagnostic Ranges and Limits", description:"Nonpregnant diagnostic thresholds and how pregnancy testing protocols differ.", images:["/og-image.png"]},
};
export default function Page(){return <BlogPageShell title={"Blood Sugar Tests: Diagnostic Ranges and Limits"} subtitle={"Nonpregnant diagnostic thresholds and how pregnancy testing protocols differ."} readTime="3 min" category="conditions" categoryLabel="Health Guide" relatedTools={[]} url="/guides/blood-sugar-levels-by-age" lastUpdated={getLastUpdated("guide-blood-sugar-levels-by-age.md")} lastUpdatedISO={getLastUpdatedISO("guide-blood-sugar-levels-by-age.md")}><SplitArticle content={getArticleContent("guide-blood-sugar-levels-by-age.md")}/></BlogPageShell>;}
