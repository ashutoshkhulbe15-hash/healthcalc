import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { GfrCalc } from "./GfrCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Adult eGFR Calculator — CKD-EPI 2021",
  description: "Estimate adult eGFR from creatinine using the race-free CKD-EPI 2021 equation. Understand GFR categories and the limits of a single estimate.",
  alternates: { canonical: "/conditions/gfr-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Adult eGFR Calculator — CKD-EPI 2021", description: "Estimate adult eGFR from creatinine using the race-free CKD-EPI 2021 equation. Understand GFR categories and the limits of a single estimate.", url: "/conditions/gfr-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Adult eGFR Calculator — CKD-EPI 2021", description:"Estimate adult eGFR from creatinine using the race-free CKD-EPI 2021 equation. Understand GFR categories and the limits of a single estimate.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("16-gfr-calculator.md");
  const lastUpdated = getLastUpdated("16-gfr-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Adult eGFR Calculator"
      description="Estimate adult eGFR using the CKD-EPI 2021 creatinine equation. A single estimate cannot diagnose chronic kidney disease."
      features={["🔢 CKD-EPI 2021", "📊 GFR categories", "🧾 Formula and limits", "📋 KDIGO source"]}
      relatedTools={[
        {title:"Normal GFR by Age Guide",desc:"Age-group population means and adult eGFR limits.",href:"/guides/normal-gfr-by-age",category:"conditions"},
        {title:"A1C Converter",desc:"Blood sugar and A1C conversion.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"Cholesterol Ratio Calculator",desc:"Calculate entered cholesterol ratios.",href:"/conditions/cholesterol-ratio-calculator",category:"conditions"},
      ]}>
      <GfrCalc />
      <QuickAnswer answer="This adult calculator estimates eGFR from standardized serum creatinine, age, and sex using CKD-EPI 2021. GFR categories are one part of kidney assessment; CKD requires kidney abnormalities lasting at least 3 months and assessment also considers albuminuria and cause. A single calculator result is not a diagnosis." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
