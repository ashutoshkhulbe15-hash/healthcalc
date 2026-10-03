import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmiCalc } from "./BmiCalc";
import { BMIScaleSVG, BMILimitationsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Adult BMI Calculator — Categories and Limits",
  description: "Calculate adult BMI and view U.S. CDC screening categories for adults 20 and older, with the formula and limits explained.",
  alternates: { canonical: "/body-metrics/bmi-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Adult BMI Calculator — Categories and Limits", description: "Calculate adult BMI and view U.S. CDC screening categories for adults 20 and older, with the formula and limits explained.", url: "/body-metrics/bmi-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Adult BMI Calculator — Categories and Limits", description:"Calculate adult BMI and view U.S. CDC screening categories for adults 20 and older, with the formula and limits explained.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("04-bmi-calculator.md");
  const lastUpdated = getLastUpdated("04-bmi-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="BMI Calculator"
      description="Calculate BMI for adults age 20 and older. BMI is a screening measure, not a diagnosis."
      features={["📊 BMI calculation", "📋 CDC adult categories", "⚖️ BMI-based weight range", "📖 Limits explained"]}
      relatedTools={[
        {title:"Body Composition Estimate",desc:"Military circumference equation estimate.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"BMI for Teens",desc:"CDC percentile charts.",href:"/body-metrics/bmi-calculator-teens",category:"body-metrics"},
        {title:"Historical Weight Equations",desc:"Compare four historical equation outputs; these are not personal weight targets.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},
      ]}>
      <BmiCalc />
      <QuickAnswer answer="For adults age 20 and older, BMI is weight in kilograms divided by height in meters squared. CDC categories are underweight below 18.5, healthy weight 18.5 to less than 25, overweight 25 to less than 30, and obesity 30 or higher. BMI is a screening measure, not a diagnosis." />
      <SplitArticle content={content} injections={{
        0: <BMIScaleSVG />,
        3: <BMILimitationsSVG />,
      }} />
    </ToolPageShell>
  );
}
