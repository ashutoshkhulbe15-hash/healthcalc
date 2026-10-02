import type {Metadata} from "next";
import {BlogPageShell} from "@/components/BlogPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {getArticleContent,getLastUpdated,getLastUpdatedISO} from "@/lib/content";
export const metadata:Metadata={title:"Blood Sugar Levels by Age \u2014 Tests and Targets",description:"Separate diabetes diagnostic test thresholds from individualized glucose treatment targets.",alternates:{canonical:"/guides/blood-sugar-levels-by-age"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Blood Sugar Levels by Age — Tests and Targets", description: "Separate diabetes diagnostic test thresholds from individualized glucose treatment targets.", url: "/guides/blood-sugar-levels-by-age", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Blood Sugar Levels by Age — Tests and Targets", description:"Separate diabetes diagnostic test thresholds from individualized glucose treatment targets.", images:["/og-image.png"]},
};
export default function Page(){return <BlogPageShell title={"Blood Sugar Levels by Age \u2014 Tests and Targets"} subtitle={"Separate diabetes diagnostic test thresholds from individualized glucose treatment targets."} readTime="3 min" category="conditions" categoryLabel="Health Guide" relatedTools={[]} url="/guides/blood-sugar-levels-by-age" lastUpdated={getLastUpdated("guide-blood-sugar-levels-by-age.md")} lastUpdatedISO={getLastUpdatedISO("guide-blood-sugar-levels-by-age.md")}><SplitArticle content={getArticleContent("guide-blood-sugar-levels-by-age.md")}/></BlogPageShell>;}
