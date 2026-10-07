import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { IdealWeightCalc } from "./IdealWeightCalc";
import { IdealWeightFormulasSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Historical Weight Equations — Four Formula Outputs",
  description: "Compare four historical height-based weight equations. Outputs are arithmetic examples, not personal ideal or target weights.",
  alternates: { canonical: "/body-metrics/ideal-weight-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Historical Weight Equations — Four Formula Outputs", description: "Compare four historical height-based weight equations. Outputs are arithmetic examples, not personal ideal or target weights.", url: "/body-metrics/ideal-weight-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Historical Weight Equations — Four Formula Outputs", description:"Compare four historical height-based weight equations. Outputs are arithmetic examples, not personal ideal or target weights.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("20-ideal-weight-calculator.md");
  const lastUpdated = getLastUpdated("20-ideal-weight-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Historical Weight Equation Comparison"
      description="Four historical equations produce reference outputs from height and sex. They are not personal weight targets."
      features={["📊 4 equations compared", "🧮 Arithmetic outputs", "📋 Sources and limits", "⚠️ Not a weight target"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Adult BMI arithmetic with stated screening limits.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Composition Estimate",desc:"Military circumference equation estimate.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Lean Body Mass Calculator",desc:"Boer height-and-weight equation estimate.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
      ]}>
      <IdealWeightCalc />
      <QuickAnswer answer="Devine, Robinson, Miller, and Hamwi are historical height-based equations. The calculator shows their arithmetic outputs; they do not establish a personal ideal, healthy, or target weight." />
      <SplitArticle content={content} injections={{
        1: <IdealWeightFormulasSVG />,
      }} />
    </ToolPageShell>
  );
}
