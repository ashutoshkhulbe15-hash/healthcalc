import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { WomenOver50Calc } from "./WomenOver50Calc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Resting Energy Estimate for Women 50–78", description: "Estimate resting energy expenditure with the female Mifflin–St Jeor equation. The output is not a total daily calorie need or intake target.", alternates: { canonical: "/body-metrics/calorie-calculator-women-over-50" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Resting Energy Estimate for Women 50–78", description: "Estimate resting energy expenditure with the female Mifflin–St Jeor equation. The output is not a total daily calorie need or intake target.", url: "/body-metrics/calorie-calculator-women-over-50", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Resting Energy Estimate for Women 50–78", description:"Estimate resting energy expenditure with the female Mifflin–St Jeor equation. The output is not a total daily calorie need or intake target.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("24-calorie-calculator-women-over-50.md");
  const lastUpdated = getLastUpdated("24-calorie-calculator-women-over-50.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Resting Energy Estimate for Women Ages 50–78" description="Apply the female Mifflin–St Jeor equation. The output is not a total daily calorie need or food-intake target." features={["Mifflin–St Jeor equation","Age-limited input range","Source and limitations"]} relatedTools={[{title:"TDEE Estimate",desc:"Resting estimate with an assumed activity multiplier.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Protein Intake Reference",desc:"Population guidance arithmetic, not a personal prescription.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"Resting Energy Estimate",desc:"General Mifflin–St Jeor page.",href:"/body-metrics/bmr-calculator",category:"body-metrics"}]}>
    <WomenOver50Calc />
    <QuickAnswer answer="This calculator applies the female Mifflin–St Jeor equation to estimate resting energy expenditure for ages 50–78. It does not calculate total daily energy needs or recommend a calorie intake." />
    <SplitArticle content={content} />
  </ToolPageShell>); }
