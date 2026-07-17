import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ThyroidCalc } from "./ThyroidCalc";
import { TSHRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Thyroid Function Calculator — TSH Interpreter", description: "Interpret your TSH, T4, and T3 results. Normal TSH: 0.4-4.0 mIU/L. High TSH = hypothyroid, low TSH = hyperthyroid. Pregnancy-specific ranges included.", alternates: { canonical: "/conditions/thyroid-function-calculator" } };
export default function Page() { const content = getArticleContent("tool-thyroid-function-calculator.md");
  const lastUpdated = getLastUpdated("tool-thyroid-function-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Thyroid Function Calculator" description="Categorize your TSH level per American Thyroid Association reference ranges. Includes pregnancy-specific ranges and age adjustments." features={["🔬 ATA reference ranges","🤰 Pregnancy ranges","📊 TSH categorization","📖 Evidence-based"]} relatedTools={[{title:"A1C Converter",desc:"Metabolic monitoring.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},{title:"GFR Calculator",desc:"Kidney function.",href:"/conditions/gfr-calculator",category:"conditions"},{title:"Vitamin D",desc:"Related endocrine test.",href:"/conditions/vitamin-d-calculator",category:"conditions"}]}>
    <ThyroidCalc />
    <QuickAnswer answer="This calculator categorizes your TSH level per American Thyroid Association reference ranges. Normal TSH is generally 0.4-4.0 mIU/L per ATA. Pregnancy has different ranges. TSH varies by time of day, medications, and health status — a single result is not a diagnosis. Discuss with your healthcare provider." />
    <SplitArticle content={content} injections={{ 2: <TSHRangesSVG /> }} />
  </ToolPageShell>); }
