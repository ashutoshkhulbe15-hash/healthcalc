import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CholesterolCalc } from "./CholesterolCalc";
import { CholesterolRatioSVG, CholesterolRatioScaleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cholesterol Ratio Calculator — HDL, LDL & Triglyceride",
  description: "Calculate your total/HDL ratio, LDL/HDL ratio, and triglyceride/HDL ratio. Cholesterol ratios predict cardiovascular risk better than individual numbers. Includes risk scale and improvement strategies.",
  alternates: { canonical: "/conditions/cholesterol-ratio-calculator" },
};

export default function Page() {
  const content = getArticleContent("tool-cholesterol-ratio-calculator.md");
  const lastUpdated = getLastUpdated("tool-cholesterol-ratio-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Cholesterol Ratio Calculator"
      description="Enter your lipid panel values to calculate all three cholesterol ratios. Ratios predict cardiovascular risk more accurately than individual cholesterol numbers."
      features={["📊 Total/HDL ratio", "📊 LDL/HDL ratio", "📊 Triglyceride/HDL ratio", "📋 Risk assessment"]}
      relatedTools={[
        {title:"A1C Converter",desc:"Blood sugar to A1C conversion.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"BMI Calculator",desc:"Body mass index assessment.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Waist-to-Hip Ratio",desc:"Another cardiovascular risk marker.",href:"/body-metrics/waist-to-hip-ratio-calculator",category:"body-metrics"},
      ]}>
      <CholesterolCalc />
      <QuickAnswer answer="Cholesterol ratios matter more than individual numbers. Optimal total/HDL ratio is below 3.5. Optimal triglyceride/HDL is below 2.0. Enter your lipid panel values — the calculator computes all three ratios and shows where you fall on the risk scale." />
      <SplitArticle content={content} injections={{
        1: <CholesterolRatioScaleSVG />,
        3: <CholesterolRatioSVG />,
      }} />
    </ToolPageShell>
  );
}
