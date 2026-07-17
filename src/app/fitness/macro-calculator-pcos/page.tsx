import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PcosCalc } from "./PcosCalc";
import { PCOSMacroSplitsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "PCOS Macro Calculator — Insulin-Sensitive Macro Splits", description: "Calculate PCOS-specific macro targets. Higher protein, lower refined carbs, and anti-inflammatory fat ratios based on published endocrinology research.", alternates: { canonical: "/fitness/macro-calculator-pcos" } };
export default function Page() { const content = getArticleContent("32-macro-calculator-pcos.md");
  const lastUpdated = getLastUpdated("32-macro-calculator-pcos.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="PCOS Macro Calculator" description="Macro targets adjusted for insulin resistance and PCOS-specific nutritional needs per published endocrinology research." features={["📊 PCOS-adjusted ratios","🔬 Endocrinology research","🥗 Anti-inflammatory focus","📖 Evidence-based"]} relatedTools={[{title:"Macro Calculator",desc:"General macro splits.",href:"/fitness/macro-calculator",category:"fitness"},{title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Calorie Deficit",desc:"Weight loss targets.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}]}>
    <PcosCalc />
    <QuickAnswer answer="According to published endocrinology research (JCEM), women with PCOS often benefit from higher protein (25-30%), lower refined carbohydrates (30-40%, emphasizing low glycemic index), and moderate healthy fats (30-40%). This differs from standard macro splits due to insulin resistance. Work with a healthcare provider for personalized targets." />
    <SplitArticle content={content} injections={{ 3: <PCOSMacroSplitsSVG /> }} />
  </ToolPageShell>); }
