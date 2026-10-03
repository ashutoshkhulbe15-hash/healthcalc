import type {Metadata} from "next";
import {ToolPageShell} from "@/components/ToolPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {QuickAnswer} from "@/components/QuickAnswer";
import {getArticleContent,getLastUpdated} from "@/lib/content";
import {StressCalc} from "./StressCalc";
export const metadata:Metadata={title:"Perceived Stress Scale information",description:"Learn about the PSS-10, its non-diagnostic limits, and the author-maintained permission instructions.",alternates:{canonical:"/mental-health/stress-level-test"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Perceived Stress Scale information", description: "Learn about the PSS-10, its non-diagnostic limits, and the author-maintained permission instructions.", url: "/mental-health/stress-level-test", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Perceived Stress Scale information", description:"Learn about the PSS-10, its non-diagnostic limits, and the author-maintained permission instructions.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title="Perceived Stress Scale information" description="Read source information, limitations, and permission instructions for the PSS-10." lastUpdated={getLastUpdated("11-stress-level-test.md")} features={["Source information","Non-diagnostic limits","Permission instructions"]} relatedTools={[]}><StressCalc/><QuickAnswer answer="The PSS is not a diagnostic instrument and has no diagnostic score cutoffs. Carnegie Mellon University directs users to request permission to use the questionnaire; this page links to that process."/><SplitArticle content={getArticleContent("11-stress-level-test.md")}/></ToolPageShell>;}
