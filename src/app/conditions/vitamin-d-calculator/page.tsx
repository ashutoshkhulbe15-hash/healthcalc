import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { VitaminDCalc } from "./VitaminDCalc";
import { VitaminDRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Vitamin D Calculator — Are You Getting Enough?", description: "Estimate your vitamin D intake from diet, supplements, and sun. NIH recommends 600-800 IU daily. 42% of US adults are deficient. Sources chart and blood test guidance.", alternates: { canonical: "/conditions/vitamin-d-calculator" } };
export default function Page() { const content = getArticleContent("tool-vitamin-d-calculator.md");
  const lastUpdated = getLastUpdated("tool-vitamin-d-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Vitamin D Calculator" description="Categorize your vitamin D blood level per Endocrine Society guidelines. Understand deficiency, insufficiency, and optimal ranges." features={["🔬 Endocrine Society ranges","☀️ Sun + food sources","📊 Level categorization","📖 Evidence-based"]} relatedTools={[{title:"Thyroid Calculator",desc:"Related endocrine test.",href:"/conditions/thyroid-function-calculator",category:"conditions"},{title:"A1C Converter",desc:"Metabolic monitoring.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},{title:"BMI Calculator",desc:"Body metrics.",href:"/body-metrics/bmi-calculator",category:"body-metrics"}]}>
    <VitaminDCalc />
    <QuickAnswer answer="This calculator categorizes your 25-hydroxyvitamin D level per Endocrine Society guidelines. Below 20 ng/mL is generally classified as deficient, 21-29 as insufficient, 30+ as sufficient. The IOM uses 20 ng/mL as sufficient — there is scientific debate. Discuss your optimal target with your healthcare provider." />
    <SplitArticle content={content} injections={{ 2: <VitaminDRangesSVG /> }} />
  </ToolPageShell>); }
