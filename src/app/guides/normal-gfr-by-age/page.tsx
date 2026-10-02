import type {Metadata} from "next";
import {BlogPageShell} from "@/components/BlogPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {getArticleContent,getLastUpdated,getLastUpdatedISO} from "@/lib/content";
export const metadata:Metadata={title:"Normal GFR by Age \u2014 Understanding eGFR",description:"Understand kidney filtration estimates, the race-free CKD-EPI 2021 equation and why age alone cannot classify kidney health.",alternates:{canonical:"/guides/normal-gfr-by-age"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Normal GFR by Age — Understanding eGFR", description: "Understand kidney filtration estimates, the race-free CKD-EPI 2021 equation and why age alone cannot classify kidney health.", url: "/guides/normal-gfr-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Normal GFR by Age — Understanding eGFR", description:"Understand kidney filtration estimates, the race-free CKD-EPI 2021 equation and why age alone cannot classify kidney health.", images:["/og-image.png"]},
};
export default function Page(){return <BlogPageShell title={"Normal GFR by Age \u2014 Understanding eGFR"} subtitle={"Understand kidney filtration estimates, the race-free CKD-EPI 2021 equation and why age alone cannot classify kidney health."} readTime="3 min" category="conditions" categoryLabel="Health Guide" relatedTools={[]} url="/guides/normal-gfr-by-age" lastUpdated={getLastUpdated("guide-normal-gfr-by-age.md")} lastUpdatedISO={getLastUpdatedISO("guide-normal-gfr-by-age.md")}><SplitArticle content={getArticleContent("guide-normal-gfr-by-age.md")}/></BlogPageShell>;}
