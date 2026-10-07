import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anxiety and Stress: What the Terms Mean",
  description: "NIMH explains how stress and anxiety differ, where their symptoms overlap, and when persistent symptoms may warrant professional help.",
  alternates: { canonical: "/guides/anxiety-vs-stress-difference" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Anxiety and Stress: What the Terms Mean", description: "NIMH explains how stress and anxiety differ, where their symptoms overlap, and when persistent symptoms may warrant professional help.", url: "/guides/anxiety-vs-stress-difference", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Anxiety and Stress: What the Terms Mean", description:"NIMH explains how stress and anxiety differ, where their symptoms overlap, and when persistent symptoms may warrant professional help.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("guide-anxiety-vs-stress.md");
  const lastUpdated = getLastUpdated("guide-anxiety-vs-stress.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-anxiety-vs-stress.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Anxiety vs Stress" subtitle="How NIMH distinguishes stress and anxiety, and where symptoms overlap." readTime="7 min read" category="mental-health" categoryLabel="Mental Health" url="/guides/anxiety-vs-stress-difference"
      relatedTools={[
        {title:"Anxiety screening information",desc:"GAD-7 screening information and limitations.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
        {title:"Perceived Stress Scale information",desc:"PSS limitations and permission information.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Burnout information",desc:"WHO definition and limits of this information page.",href:"/mental-health/burnout-quiz",category:"mental-health"},
      ]}>
      <QuickAnswer source={{href:"https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet",label:"NIMH: stress, anxiety and when to seek help"}} answer="NIMH describes stress as a response to an external cause. Anxiety can occur without a current threat; persistent symptoms that interfere with life may warrant professional help. The terms and symptoms can overlap, and this page cannot diagnose." />
      <SplitArticle content={content} />
    </BlogPageShell>
  );
}
