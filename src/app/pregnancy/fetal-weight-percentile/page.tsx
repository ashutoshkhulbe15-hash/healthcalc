import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FetalWeightCalc } from "./FetalWeightCalc";
import { FetalWeightCategoriesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Fetal Weight Percentile — Growth by Week", description: "Calculate your baby's fetal weight percentile using Hadlock and WHO growth curves. Normal range: 10th-90th percentile. Includes estimated weight chart by week.", alternates: { canonical: "/pregnancy/fetal-weight-percentile" } };
export default function Page() { const content = getArticleContent("10-fetal-weight-percentile-calculator.md");
  const lastUpdated = getLastUpdated("10-fetal-weight-percentile-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Fetal Weight Percentile Calculator" description="Compare your baby's estimated weight to published growth curves. ACOG classification with ±15-20% ultrasound accuracy context." features={["📊 Growth percentiles","🔬 ACOG classification","⚖️ SGA/AGA/LGA","📖 Evidence-based"]} relatedTools={[{title:"Baby Growth Calculator",desc:"Postnatal growth tracking.",href:"/pregnancy/baby-growth-percentile",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"Weight Gain Calculator",desc:"Maternal weight tracking.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"}]}>
    <FetalWeightCalc />
    <QuickAnswer answer="According to ACOG, fetal weight estimates from ultrasound have a ±15-20% margin of error. Below 10th percentile = SGA (small for gestational age), 10th-90th = AGA (appropriate), above 90th = LGA (large). The growth trend across multiple scans matters more than any single estimate." />
    <SplitArticle content={content} injections={{ 4: <FetalWeightCategoriesSVG /> }} />
  </ToolPageShell>); }
