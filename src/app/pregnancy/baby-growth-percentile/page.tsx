import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BabyGrowthCalc } from "./BabyGrowthCalc";
import { GrowthPercentileSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Baby Growth Percentile — WHO & CDC Charts", description: "Track baby weight, length, and head circumference percentiles. WHO charts for 0-2 years, CDC for 2-20. Normal range: 3rd-97th percentile. Trend matters more than single readings.", alternates: { canonical: "/pregnancy/baby-growth-percentile" } };
export default function Page() { const content = getArticleContent("34-baby-growth-percentile-calculator.md");
  const lastUpdated = getLastUpdated("34-baby-growth-percentile-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Baby Growth Percentile Calculator" description="Plot your baby against WHO/CDC growth standards. Percentiles are tracking tools, not grades — consistent growth matters most per AAP." features={["📊 WHO + CDC charts","📈 Growth tracking","👶 Age-adjusted","📖 Evidence-based"]} relatedTools={[{title:"Fetal Weight Percentile",desc:"Prenatal growth tracking.",href:"/pregnancy/fetal-weight-percentile",category:"pregnancy"},{title:"Weight Gain Calculator",desc:"Maternal weight tracking.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"BMI for Teens",desc:"Older child growth.",href:"/body-metrics/bmi-calculator-teens",category:"body-metrics"}]}>
    <BabyGrowthCalc />
    <QuickAnswer answer="According to WHO and AAP guidelines, growth percentiles compare your baby to same-age, same-sex peers. A baby at the 25th percentile is not 'failing' — consistent growth along any curve is generally considered healthy. The trend over multiple visits matters more than any single reading." />
    <SplitArticle content={content} injections={{ 2: <GrowthPercentileSVG /> }} />
  </ToolPageShell>); }
