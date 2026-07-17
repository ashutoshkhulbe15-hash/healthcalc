import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Prodromal Labor — What It Is and When to Worry",
  description: "Prodromal labor causes real contractions that start and stop without progressing to active labor. How to distinguish from real labor, when to call your provider, and the 5-1-1 rule.",
  alternates: { canonical: "/guides/prodromal-labor" },
};

export default function Page() {
  const content = getArticleContent("guide-prodromal-labor.md");
  const lastUpdated = getLastUpdated("guide-prodromal-labor.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-prodromal-labor.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Prodromal Labor Guide" subtitle="What prodromal labor is, how long it lasts, and when contractions mean it is time to go to the hospital." readTime="8 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/prodromal-labor"
      relatedTools={[
        {title:"Contraction Timer",desc:"Track contractions and 5-1-1 rule.",href:"/pregnancy/contraction-timer",category:"pregnancy"},
        {title:"HCG Doubling Calculator",desc:"Track early HCG rise.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Ovulation Calculator",desc:"Find your fertile window.",href:"/pregnancy/ovulation-calculator",category:"pregnancy"},
      ]}>
      <SplitArticle content={content} />
    </BlogPageShell>
  );
}
