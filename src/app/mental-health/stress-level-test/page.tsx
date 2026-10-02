import type {Metadata} from "next";
import {ToolPageShell} from "@/components/ToolPageShell";
import {SplitArticle} from "@/components/SplitArticle";
import {QuickAnswer} from "@/components/QuickAnswer";
import {getArticleContent,getLastUpdated} from "@/lib/content";
import {StressCalc} from "./StressCalc";
export const metadata:Metadata={title:"Perceived Stress Scale — PSS-10 Score",description:"Calculate a PSS-10 perceived stress score with correct reverse scoring and explicit limits. No diagnostic score cutoffs.",alternates:{canonical:"/mental-health/stress-level-test"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Perceived Stress Scale — PSS-10 Score", description: "Calculate a PSS-10 perceived stress score with correct reverse scoring and explicit limits. No diagnostic score cutoffs.", url: "/mental-health/stress-level-test", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Perceived Stress Scale — PSS-10 Score", description:"Calculate a PSS-10 perceived stress score with correct reverse scoring and explicit limits. No diagnostic score cutoffs.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="mental-health" title="Perceived Stress Scale (PSS-10)" description="Calculate perceived stress over the past month. This instrument has no diagnostic score cutoffs." lastUpdated={getLastUpdated("11-stress-level-test.md")} features={["Ten questions","Reverse scoring explained","Instrument source"]} relatedTools={[]}><StressCalc/><QuickAnswer answer="PSS-10 totals run from zero to forty. Higher scores indicate more perceived stress, but the instrument has no diagnostic cutoffs."/><SplitArticle content={getArticleContent("11-stress-level-test.md")}/></ToolPageShell>;}
