import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { TdeeTeensCalc } from "./TdeeTeensCalc";
import { TeenCalorieRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "TDEE Calculator for Teens — Calories by Age", description: "Calculate teen TDEE by age, sex, and activity. Teens need 1,800-3,200 calories daily for growth. Why calorie restriction during adolescence is dangerous.", alternates: { canonical: "/body-metrics/tdee-calculator-teens" } };
export default function Page() { const content = getArticleContent("29-tdee-calculator-teens.md");
  const lastUpdated = getLastUpdated("29-tdee-calculator-teens.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="TDEE Calculator for Teens" description="Estimated daily calorie needs for teenagers based on USDA Dietary Guidelines. Why standard adult calculators underestimate teen needs." features={["📊 USDA guidelines","🧬 Growth context","⚠️ Restriction warning","📖 Evidence-based"]} relatedTools={[{title:"BMI for Teens",desc:"CDC percentile charts.",href:"/body-metrics/bmi-calculator-teens",category:"body-metrics"},{title:"TDEE Calculator",desc:"Adult version.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Macro Calculator",desc:"Split calories into macros.",href:"/fitness/macro-calculator",category:"fitness"}]}>
    <TdeeTeensCalc />
    <QuickAnswer answer="According to USDA Dietary Guidelines, teen calorie needs range from 1,800 (sedentary 13-year-old girl) to 3,200 (active 18-year-old boy). Teens have higher calorie needs per pound than adults due to active growth. The AAP warns that calorie restriction in teenagers can impair growth, delay puberty, and increase eating disorder risk." />
    <SplitArticle content={content} injections={{ 2: <TeenCalorieRangesSVG /> }} />
  </ToolPageShell>); }
