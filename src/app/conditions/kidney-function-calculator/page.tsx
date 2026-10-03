import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { KidneyCalc } from "./KidneyCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Adult eGFR Equation Calculator", description: "Calculate an adult creatinine-based eGFR estimate with the CKD-EPI 2021 equation. It does not diagnose CKD or recommend treatment.", alternates: { canonical: "/conditions/kidney-function-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Adult eGFR Equation Calculator", description: "Calculate an adult creatinine-based eGFR estimate with the CKD-EPI 2021 equation. It does not diagnose CKD or recommend treatment.", url: "/conditions/kidney-function-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Adult eGFR Equation Calculator", description:"Calculate an adult creatinine-based eGFR estimate with the CKD-EPI 2021 equation. It does not diagnose CKD or recommend treatment.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("31-kidney-function-calculator.md");
  const lastUpdated = getLastUpdated("31-kidney-function-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="conditions" title="Adult eGFR Equation Calculator" description="Calculate an adult creatinine-based estimate with the 2021 CKD-EPI equation. This tool does not stage CKD or guide treatment." features={["CKD-EPI 2021 creatinine equation","Adult input scope","Source and limitations"]} relatedTools={[{title:"GFR Equation Calculator",desc:"A separate eGFR method page.",href:"/conditions/gfr-calculator",category:"conditions"},{title:"A1C Converter",desc:"Convert an entered glycemic measure.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"}]}>
    <KidneyCalc />
    <QuickAnswer answer="This tool calculates an adult creatinine-based eGFR estimate with the CKD-EPI 2021 equation. A single calculated value cannot diagnose CKD or assign a stage; review laboratory findings with a clinician." />
    <SplitArticle content={content} />
  </ToolPageShell>); }
