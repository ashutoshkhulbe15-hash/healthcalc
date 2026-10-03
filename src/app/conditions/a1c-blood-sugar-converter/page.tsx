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
  openGraph: { type: "website", siteName: "ProHealthIt", title: "A1C to Blood Sugar Converter — Conversion Chart", description: "Convert A1C to estimated average blood sugar and vice versa using the ADAG formula. A1C conversion chart, ADA diagnostic thresholds, and what your numbers mean.", url: "/conditions/a1c-blood-sugar-converter", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"A1C to Blood Sugar Converter — Conversion Chart", description:"Convert A1C to estimated average blood sugar and vice versa using the ADAG formula. A1C conversion chart, ADA diagnostic thresholds, and what your numbers mean.", images:["/og-image.png"]},
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
      <QuickAnswer answer="The ADA eAG equation is 28.7 × A1C − 46.7. For example, 7.0% converts to an estimated average glucose of about 154 mg/dL. For nonpregnant people, 5.7–6.4% is the prediabetes range and 6.5% or higher meets the laboratory threshold for diabetes; diagnosis generally needs confirmation. This conversion is not a diagnosis or personal treatment target." />
      <SplitArticle content={content} injections={{
        1: <A1CConversionScaleSVG />,
        3: <A1CRangesSVG />,
      }} />
    </ToolPageShell>
  );
}
