import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { KidneyCalc } from "./KidneyCalc";
import { GFRStagesSVG, GFRFactorsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Kidney Function Calculator — CKD Stage Estimator", description: "Comprehensive kidney function assessment using CKD-EPI 2021. Understand your CKD stage, what it means, and when to see a specialist per NKF guidelines.", alternates: { canonical: "/conditions/kidney-function-calculator" } };
export default function Page() { const content = getArticleContent("31-kidney-function-calculator.md");
  const lastUpdated = getLastUpdated("31-kidney-function-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Kidney Function Calculator" description="Comprehensive kidney function screening using the CKD-EPI 2021 equation. KDIGO staging with lifestyle guidance per NKF recommendations." features={["🔬 CKD-EPI 2021","📊 KDIGO staging","💡 Stage-specific guidance","📖 NKF-sourced"]} relatedTools={[{title:"GFR Calculator",desc:"Quick GFR estimate.",href:"/conditions/gfr-calculator",category:"conditions"},{title:"A1C Converter",desc:"Diabetes monitoring.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},{title:"Blood Pressure Guide",desc:"Another kidney risk factor.",href:"/guides/healthy-resting-heart-rate-by-age",category:"conditions"}]}>
    <KidneyCalc />
    <QuickAnswer answer="According to the National Kidney Foundation, 1 in 7 US adults has CKD and 90% are unaware. This calculator estimates your GFR using the CKD-EPI 2021 equation and categorizes results per KDIGO guidelines. A screening estimate — not a diagnosis. Discuss results with your healthcare provider." />
    <SplitArticle content={content} injections={{ 2: <GFRStagesSVG />, 5: <GFRFactorsSVG /> }} />
  </ToolPageShell>); }
