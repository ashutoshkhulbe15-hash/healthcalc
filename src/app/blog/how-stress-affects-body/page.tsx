import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Stress and the Body: What NIH Sources Say", description: "A source-based overview of the body's stress response and limits of current claims.", alternates: { canonical: "/blog/how-stress-affects-body" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Stress and the Body: What NIH Sources Say", description: "A source-based overview of the body's stress response and limits of current claims.", url: "/blog/how-stress-affects-body", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Stress and the Body: What NIH Sources Say", description:"A source-based overview of the body's stress response and limits of current claims.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("39-how-stress-affects-body.md");
  const lastUpdated = getLastUpdated("39-how-stress-affects-body.md");
  const lastUpdatedISO = getLastUpdatedISO("39-how-stress-affects-body.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Stress and the Body" subtitle="A source-based overview of the body's stress response and the limits of broad health claims." readTime="4 min" category="mental-health" categoryLabel="Mental Health" relatedTools={[{title:"Perceived Stress Scale information",desc:"Why the local questionnaire and score are withheld.",href:"/mental-health/stress-level-test",category:"mental-health"},{title:"GAD-7 screening questionnaire",desc:"Screening questionnaire and study limits.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},{title:"Sleep diary estimate",desc:"Arithmetic estimate from diary inputs.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"}]} url="/blog/how-stress-affects-body">
    <QuickAnswer source={{href:"https://www.nccih.nih.gov/health/stress",label:"NIH NCCIH: stress response and evidence limits"}} answer="NCCIH says stress can trigger short-term physical responses, while long-term stress may contribute to or worsen some health problems. This does not mean stress inevitably causes organ damage in an individual." />
    <SplitArticle content={content} />
  </BlogPageShell>); }
