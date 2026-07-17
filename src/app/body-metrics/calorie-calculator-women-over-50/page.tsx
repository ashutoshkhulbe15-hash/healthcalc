import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { WomenOver50Calc } from "./WomenOver50Calc";
import { MetabolismAgingSVG, NutrientNeeds50SVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Calorie Calculator for Women Over 50", description: "Calculate daily calorie needs for women over 50. USDA estimates 1,600-2,200 cal/day by activity level. Why metabolism changes and how to maintain it.", alternates: { canonical: "/body-metrics/calorie-calculator-women-over-50" } };
export default function Page() { const content = getArticleContent("24-calorie-calculator-women-over-50.md");
  const lastUpdated = getLastUpdated("24-calorie-calculator-women-over-50.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Calorie Calculator for Women Over 50" description="Daily calorie needs adjusted for age-related metabolic changes. Based on Mifflin-St Jeor equation with evidence from Pontzer et al. (Science 2021)." features={["🔬 Pontzer research","📊 USDA guidelines","💊 Nutrient priorities","📖 Evidence-based"]} relatedTools={[{title:"TDEE Calculator",desc:"General daily burn.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Protein Seniors",desc:"Increased protein needs.",href:"/body-metrics/protein-needs-seniors",category:"body-metrics"},{title:"BMR Calculator",desc:"Basal metabolic rate.",href:"/body-metrics/bmr-calculator",category:"body-metrics"}]}>
    <WomenOver50Calc />
    <QuickAnswer answer="According to USDA Dietary Guidelines, women over 50 need approximately 1,600 cal/day (sedentary), 1,800 (moderately active), or 2,000-2,200 (active). The Pontzer et al. study (Science 2021) found metabolism stays relatively stable from ages 20-60 — reduced activity and muscle mass, not a metabolic cliff, explain most calorie need changes." />
    <SplitArticle content={content} injections={{ 0: <MetabolismAgingSVG />, 4: <NutrientNeeds50SVG /> }} />
  </ToolPageShell>); }
