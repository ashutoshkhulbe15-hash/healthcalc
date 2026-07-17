import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { IvfCalc } from "./IvfCalc";
import { IVFTransferDatesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "IVF Due Date Calculator — Day 3 & Day 5 Transfer",
  description: "Calculate IVF due date from embryo transfer date. Day 5: add 261 days. Day 3: add 263 days. More accurate than LMP dating. Fresh and frozen transfer support.",
  alternates: { canonical: "/pregnancy/ivf-due-date-calculator" },
};

export default function Page() {
  const content = getArticleContent("33-ivf-due-date-calculator.md");
  const lastUpdated = getLastUpdated("33-ivf-due-date-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="IVF Due Date Calculator"
      description="Calculate due date from embryo transfer date — more precise than LMP dating per reproductive endocrinology guidelines."
      features={["📅 Day 3 + Day 5 support", "📊 ±3-5 day accuracy", "🔬 RE guidelines", "📖 Evidence-based"]}
      relatedTools={[
        {title:"Due Date Calculator (LMP)",desc:"Standard due date from last period.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"HCG Doubling Calculator",desc:"Track early HCG rise.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Pregnancy Weight Gain",desc:"Track gestational weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]}>
      <IvfCalc />
      <QuickAnswer answer="IVF due dates are calculated as transfer date + 263 days (Day 3) or + 261 days (Day 5). This is more accurate than LMP dating (±3-5 days vs ±14 days) because exact fertilization timing is known. After the first trimester, IVF pregnancies follow standard ACOG prenatal care." />
      <SplitArticle content={content} injections={{
        1: <IVFTransferDatesSVG />,
      }} />
    </ToolPageShell>
  );
}
