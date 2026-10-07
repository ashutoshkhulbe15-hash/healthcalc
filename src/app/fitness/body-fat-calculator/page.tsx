import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BodyFatCalc } from "./BodyFatCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Body Composition Estimate — Circumference Equation",
  description: "Apply the historical military circumference equation to user-entered measurements. The result is an estimate, not a diagnosis or personal health category.",
  alternates: { canonical: "/fitness/body-fat-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Body Composition Estimate — Circumference Equation", description: "Apply the historical military circumference equation to user-entered measurements. The result is an estimate, not a diagnosis or personal health category.", url: "/fitness/body-fat-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Body Composition Estimate — Circumference Equation", description:"Apply the historical military circumference equation to user-entered measurements. The result is an estimate, not a diagnosis or personal health category.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("07-body-fat-calculator.md");
  const lastUpdated = getLastUpdated("07-body-fat-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Body Composition Estimate"
      description="A historical military circumference-equation estimate from measurements you enter. It does not assign health categories."
      features={["Circumference equation", "User-entered measurements", "Estimate only"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Quick BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Lean Body Mass",desc:"Boer equation estimate.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
        {title:"Historical Weight Equations",desc:"Compare four historical equation outputs; these are not personal weight targets.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},
      ]}>
      <BodyFatCalc />
      <QuickAnswer answer="This page applies the historical circumference equations documented in Army Regulation 600-9 (2013) to the measurements entered. The result is an estimate, not a clinical measurement, diagnosis, health category, or personal target." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
