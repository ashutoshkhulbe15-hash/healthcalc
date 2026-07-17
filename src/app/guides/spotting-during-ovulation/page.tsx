import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Spotting During Ovulation — What It Means",
  description: "Light spotting around ovulation is common and usually normal. Caused by the estrogen drop at egg release. When spotting warrants medical attention.",
  alternates: { canonical: "/guides/spotting-during-ovulation" },
};

export default function Page() {
  const content = getArticleContent("guide-spotting-during-ovulation.md");
  const lastUpdated = getLastUpdated("guide-spotting-during-ovulation.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-spotting-during-ovulation.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Spotting During Ovulation" subtitle="What ovulation spotting looks like, why it happens, and when to see your provider." readTime="6 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/spotting-during-ovulation"
      relatedTools={[
        {title:"Contraction Timer",desc:"Track contractions and 5-1-1 rule.",href:"/pregnancy/contraction-timer",category:"pregnancy"},
        {title:"HCG Doubling Calculator",desc:"Track early HCG rise.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Ovulation Calculator",desc:"Find your fertile window.",href:"/pregnancy/ovulation-calculator",category:"pregnancy"},
      ]}>
      <SplitArticle content={content} />
    </BlogPageShell>
  );
}
