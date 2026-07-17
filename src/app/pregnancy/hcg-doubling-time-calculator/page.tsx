import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HcgCalc } from "./HcgCalc";
import { HCGDoublingTimeSVG, HCGWarningSignsSVG, HCGDoublingRatesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "HCG Doubling Time Calculator — Track Early HCG Rise",
  description: "Calculate HCG doubling time from two blood draws. Normal doubling is 48-72 hours below 1,200 mIU/mL. Includes HCG levels by DPO, IVF HCG chart, twin HCG levels, and slow rise guidance.",
  alternates: { canonical: "/pregnancy/hcg-doubling-time-calculator" },
};

export default function Page() {
  const content = getArticleContent("03-hcg-doubling-time-calculator.md");
  const lastUpdated = getLastUpdated("03-hcg-doubling-time-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="HCG Doubling Time Calculator"
      description="Enter two HCG values and the hours between draws. The calculator computes your doubling time and compares it to expected ranges for your HCG level."
      features={["📊 Auto doubling time", "📈 HCG levels by DPO", "👶 Twin HCG chart", "⚠️ Slow rise guidance"]}
      relatedTools={[
        {title:"HCG Levels by Week",desc:"Week-by-week HCG reference chart.",href:"/guides/hcg-levels-by-week",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Estimate your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"IVF Due Date Calculator",desc:"Due date from transfer date.",href:"/pregnancy/ivf-due-date-calculator",category:"pregnancy"},
      ]}>
      <HcgCalc />
      <QuickAnswer answer="Normal HCG doubling time is 48-72 hours when HCG is below 1,200 mIU/mL, and 72-96 hours above that level. HCG not doubling in 48 hours does not automatically mean miscarriage — approximately 10-15% of viable pregnancies show initially slow rise. Your provider interprets HCG alongside ultrasound, not in isolation." />
      <SplitArticle content={content} injections={{
        1: <HCGDoublingRatesSVG />,
        3: <HCGDoublingTimeSVG />,
        6: <HCGWarningSignsSVG />,
      }} />
    </ToolPageShell>
  );
}
