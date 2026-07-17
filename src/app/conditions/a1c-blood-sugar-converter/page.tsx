import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { A1cCalc } from "./A1cCalc";
import { A1CRangesSVG, A1CConversionScaleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "A1C to Blood Sugar Converter — Conversion Chart",
  description: "Convert A1C to estimated average blood sugar and vice versa using the ADAG formula. A1C conversion chart, ADA diagnostic thresholds, and what your numbers mean.",
  alternates: { canonical: "/conditions/a1c-blood-sugar-converter" },
};

export default function Page() {
  const content = getArticleContent("12-a1c-blood-sugar-converter.md");
  const lastUpdated = getLastUpdated("12-a1c-blood-sugar-converter.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="A1C Blood Sugar Converter"
      description="Convert between A1C percentage and estimated average glucose. Uses the ADAG formula validated in Diabetes Care (2008)."
      features={["🔢 A1C ↔ blood sugar", "📊 Conversion chart", "📋 ADA thresholds", "⚠️ When A1C misleads"]}
      relatedTools={[
        {title:"Blood Sugar by Age Guide",desc:"Normal ranges by age group.",href:"/guides/blood-sugar-levels-by-age",category:"conditions"},
        {title:"GFR Calculator",desc:"Kidney function assessment.",href:"/conditions/gfr-calculator",category:"conditions"},
        {title:"Cholesterol Ratio Calculator",desc:"Cardiovascular risk ratios.",href:"/conditions/cholesterol-ratio-calculator",category:"conditions"},
      ]}>
      <A1cCalc />
      <QuickAnswer answer="A1C converts to estimated average blood sugar using the formula: eAG (mg/dL) = 28.7 x A1C - 46.7. An A1C of 7.0% equals approximately 154 mg/dL average blood sugar. Below 5.7% is normal, 5.7-6.4% is prediabetes, 6.5%+ indicates diabetes per ADA criteria." />
      <SplitArticle content={content} injections={{
        1: <A1CConversionScaleSVG />,
        3: <A1CRangesSVG />,
      }} />
    </ToolPageShell>
  );
}
