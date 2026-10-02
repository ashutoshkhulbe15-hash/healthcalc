import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ContractionCalc } from "./ContractionCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contraction Timer — Record Duration and Intervals",
  description: "Record contraction duration and start-to-start intervals. This timer does not assess labor or determine when to seek care.",
  alternates: { canonical: "/pregnancy/contraction-timer" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Contraction Timer — Record Duration and Intervals", description: "Record contraction duration and start-to-start intervals. This timer does not assess labor or determine when to seek care.", url: "/pregnancy/contraction-timer", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Contraction Timer — Record Duration and Intervals", description:"Record contraction duration and start-to-start intervals. This timer does not assess labor or determine when to seek care.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("25-contraction-timer.md");
  const lastUpdated = getLastUpdated("25-contraction-timer.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Contraction Timer"
      description="Record contraction duration and start-to-start intervals. The timer does not assess labor or determine when to seek care."
      features={["Record duration", "Record start-to-start intervals", "View arithmetic averages", "Limits and source links"]}
      relatedTools={[
        {title:"Due Date Calculator",desc:"Find your estimated delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"HCG Levels by Week",desc:"Understand early pregnancy blood work.",href:"/guides/hcg-levels-by-week",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}>
      <ContractionCalc />
      <QuickAnswer answer="This timer records contraction duration and start-to-start intervals. It cannot determine whether labor has begun or when to seek care; follow your maternity team’s instructions." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
