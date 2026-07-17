import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmrCalc } from "./BmrCalc";
import { BMRFormulasSVG, BMRvsTDEESVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "BMR Calculator — Basal Metabolic Rate", description: "Calculate your Basal Metabolic Rate using Mifflin-St Jeor. BMR is your resting calorie burn — 60-70% of total daily energy. Never eat below BMR. Use TDEE for targets.", alternates: { canonical: "/body-metrics/bmr-calculator" } };
export default function Page() { const content = getArticleContent("18-bmr-calculator.md");
  const lastUpdated = getLastUpdated("18-bmr-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="BMR Calculator" description="Estimate your Basal Metabolic Rate using the Mifflin-St Jeor equation — the formula recommended by the Academy of Nutrition and Dietetics." features={["🔬 Mifflin-St Jeor","📊 3 formulas compared","💡 BMR vs TDEE explained","📖 Evidence-based"]} relatedTools={[{title:"TDEE Calculator",desc:"Total daily energy.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Calorie Deficit",desc:"Weight loss target.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},{title:"Macro Calculator",desc:"Split your calories.",href:"/fitness/macro-calculator",category:"fitness"}]}>
    <BmrCalc />
    <QuickAnswer answer="BMR is the minimum calories your body burns at complete rest. According to research in the American Journal of Clinical Nutrition, the Mifflin-St Jeor equation is approximately 5% more accurate than Harris-Benedict. BMR accounts for 60-70% of your total daily burn. Never eat below your BMR — cut from TDEE instead." />
    <SplitArticle content={content} injections={{ 2: <BMRFormulasSVG />, 4: <BMRvsTDEESVG /> }} />
  </ToolPageShell>); }
