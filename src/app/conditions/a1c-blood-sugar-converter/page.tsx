import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { A1cCalc } from "./A1cCalc";
import { A1CRangesSVG, A1CConversionScaleSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "A1C to Blood Sugar Converter — Conversion Chart",
  description: "Convert an A1C percentage to estimated average glucose with the ADAG equation. See derived examples, source links and laboratory interpretation limits.",
  alternates: { canonical: "/conditions/a1c-blood-sugar-converter" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "A1C to Blood Sugar Converter — Conversion Chart", description: "Convert an A1C percentage to estimated average glucose with the ADAG equation. See derived examples, source links and laboratory interpretation limits.", url: "/conditions/a1c-blood-sugar-converter", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"A1C to Blood Sugar Converter — Conversion Chart", description:"Convert an A1C percentage to estimated average glucose with the ADAG equation. See derived examples, source links and laboratory interpretation limits.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("12-a1c-blood-sugar-converter.md");
  const lastUpdated = getLastUpdated("12-a1c-blood-sugar-converter.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="A1C Blood Sugar Converter"
      description="Convert an A1C percentage to estimated average glucose using the ADAG equation. Educational arithmetic with source-linked interpretation limits."
      features={["🔢 A1C → estimated glucose", "📊 Conversion chart", "📋 ADA thresholds", "⚠️ When A1C misleads"]}
      relatedTools={[
        {title:"Blood Sugar by Age Guide",desc:"Glucose measurements and their context.",href:"/guides/blood-sugar-levels-by-age",category:"conditions"},
        {title:"GFR Calculator",desc:"Creatinine-based eGFR estimate.",href:"/conditions/gfr-calculator",category:"conditions"},
        {title:"Cholesterol Ratio Calculator",desc:"Arithmetic ratios from entered lipids.",href:"/conditions/cholesterol-ratio-calculator",category:"conditions"},
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
