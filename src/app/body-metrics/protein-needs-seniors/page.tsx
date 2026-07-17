import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SeniorProteinCalc } from "./SeniorProteinCalc";
import { SeniorProteinSVG, ProteinTimingSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Protein Calculator for Seniors — ESPEN Guidelines", description: "Calculate protein needs for adults over 60. ESPEN recommends 1.0-1.2 g/kg for healthy seniors (not the insufficient 0.8 g/kg RDA). Best protein sources, meal distribution, and sarcopenia prevention.", alternates: { canonical: "/body-metrics/protein-needs-seniors" } };
export default function Page() { const content = getArticleContent("30-protein-needs-seniors.md");
  const lastUpdated = getLastUpdated("30-protein-needs-seniors.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Protein Calculator for Seniors (65+)" description="Daily protein targets for adults over 65 based on ESPEN guidelines. Higher than general RDA to combat anabolic resistance and sarcopenia." features={["📊 ESPEN guidelines","💪 Sarcopenia prevention","🍽️ Meal distribution","📖 Evidence-based"]} relatedTools={[{title:"Protein Calculator",desc:"General protein needs.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"Calorie Women 50+",desc:"Calorie needs after 50.",href:"/body-metrics/calorie-calculator-women-over-50",category:"body-metrics"},{title:"TDEE Calculator",desc:"Daily calorie burn.",href:"/fitness/tdee-calculator",category:"fitness"}]}>
    <SeniorProteinCalc />
    <QuickAnswer answer="According to ESPEN guidelines, adults over 65 need 1.0-1.2g protein per kg bodyweight daily — significantly more than the general RDA of 0.8g/kg. This increased need is driven by anabolic resistance, the age-related decline in muscle protein synthesis efficiency. Distribute across 3-4 meals of 25-30g each for best results." />
    <SplitArticle content={content} injections={{ 3: <SeniorProteinSVG />, 4: <ProteinTimingSVG /> }} />
  </ToolPageShell>); }
