import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { WhrCalc } from "./WhrCalc";
import { WHRRiskScaleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator — WHO Risk Levels",
  description: "Calculate your waist-to-hip ratio and assess cardiovascular risk using WHO thresholds. WHR measures fat distribution — a stronger heart disease predictor than BMI (INTERHEART study).",
  alternates: { canonical: "/body-metrics/waist-to-hip-ratio-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-waist-to-hip-ratio-calculator.md");
  const lastUpdated = getLastUpdated("tool-waist-to-hip-ratio-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Waist-to-Hip Ratio Calculator"
      description="Measure waist at narrowest point, hips at widest. The ratio reveals cardiovascular risk from fat distribution — something BMI cannot assess."
      features={["📏 Simple measurement", "📊 WHO risk categories", "💓 Cardiovascular risk", "🔍 WHR vs BMI compared"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Weight-to-height assessment.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Cholesterol Ratio Calculator",desc:"Another cardiovascular marker.",href:"/conditions/cholesterol-ratio-calculator",category:"conditions"},
      ]}>
      <WhrCalc />
      <QuickAnswer answer="Waist-to-hip ratio = waist ÷ hips. WHO cardiovascular risk thresholds: below 0.90 (men) or 0.85 (women) = low risk. WHR measures where you store fat — abdominal fat is more metabolically dangerous than hip/thigh fat. The INTERHEART study found WHR predicts heart attack risk better than BMI." />
      <SplitArticle content={content} injections={{
        1: <WHRRiskScaleSVG />,
      }} />
    </ToolPageShell>
  );
}
