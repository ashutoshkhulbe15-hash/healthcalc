import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AnemiaCalc } from "./AnemiaCalc";
import { AnemiaTypesSVG, IronAbsorptionSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Anemia Risk Checker — Symptom & Risk Factor Assessment", description: "Assess your anemia risk factors based on published clinical criteria. Not a diagnosis — a blood test (CBC) is required to confirm anemia per WHO guidelines.", alternates: { canonical: "/conditions/anemia-risk-checker" } };
export default function Page() { const content = getArticleContent("27-anemia-risk-checker.md");
  const lastUpdated = getLastUpdated("27-anemia-risk-checker.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Anemia Risk Checker" description="Assess your risk factors for anemia based on published clinical criteria. This is a screening tool — only a blood test can diagnose anemia." features={["📋 Risk assessment","🔬 WHO criteria","🩸 Iron guidance","📖 Evidence-based guide"]} relatedTools={[{title:"GFR Calculator",desc:"Kidney function.",href:"/conditions/gfr-calculator",category:"conditions"},{title:"BMI Calculator",desc:"Body metrics.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Thyroid Calculator",desc:"TSH interpretation.",href:"/conditions/thyroid-function-calculator",category:"conditions"}]}>
    <AnemiaCalc />
    <QuickAnswer answer="According to WHO, anemia affects 1.6 billion people globally. This tool assesses your risk factors based on published clinical criteria — it does not diagnose anemia. Diagnosis requires a CBC blood test showing hemoglobin below 12 g/dL (women) or 13 g/dL (men) per WHO thresholds." />
    <SplitArticle content={content} injections={{ 3: <AnemiaTypesSVG />, 4: <IronAbsorptionSVG /> }} />
  </ToolPageShell>); }
