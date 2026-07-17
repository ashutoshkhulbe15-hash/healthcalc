import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { GfrCalc } from "./GfrCalc";
import { GFRFactorsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "GFR Calculator — CKD-EPI 2021 Kidney Function",
  description: "Calculate GFR using the CKD-EPI 2021 equation (no race variable). Kidney function stages, when to see a nephrologist, and what affects your GFR. KDIGO 2024 guidelines.",
  alternates: { canonical: "/conditions/gfr-calculator" },
};

export default function Page() {
  const content = getArticleContent("16-gfr-calculator.md");
  const lastUpdated = getLastUpdated("16-gfr-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="GFR Calculator"
      description="Estimate glomerular filtration rate using the CKD-EPI 2021 equation. GFR is the primary measure of kidney function — the number your nephrologist tracks."
      features={["🔢 CKD-EPI 2021", "📊 CKD staging", "🩺 Referral guidance", "📋 KDIGO 2024 based"]}
      relatedTools={[
        {title:"Normal GFR by Age Guide",desc:"Age-specific GFR ranges.",href:"/guides/normal-gfr-by-age",category:"conditions"},
        {title:"A1C Converter",desc:"Blood sugar and A1C conversion.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"Cholesterol Ratio Calculator",desc:"Cardiovascular risk assessment.",href:"/conditions/cholesterol-ratio-calculator",category:"conditions"},
      ]}>
      <GfrCalc />
      <QuickAnswer answer="GFR measures how well your kidneys filter blood — in mL/min/1.73m². Normal is 90+. Below 60 sustained for 3+ months = chronic kidney disease per KDIGO criteria. This calculator uses the CKD-EPI 2021 equation, which removed the race variable from earlier versions." />
      <SplitArticle content={content} injections={{
        3: <GFRFactorsSVG />,
      }} />
    </ToolPageShell>
  );
}
