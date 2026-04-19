import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmiTeensCalc } from "./BmiTeensCalc";
import { TeenVsAdultBMI, PercentileCategoriesSVG, PubertyGrowthSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI Calculator for Teenagers — CDC Percentile by Age & Gender",
  description: "Calculate BMI for teens ages 2-19 using CDC age-and-sex-specific percentile charts. Understand why adult BMI categories don't apply to growing adolescents.",
  alternates: { canonical: "/body-metrics/bmi-calculator-teens" },
};

export default function Page() {
  const content = getArticleContent("15-bmi-calculator-teens.md");
  return (
    <ToolPageShell category="body-metrics" title="BMI Calculator for Teenagers"
      description="Calculate BMI for teens aged 2-19 using CDC growth charts. Results show age-and-sex-specific percentiles — not adult categories — because teen bodies are still developing."
      features={["📊 CDC percentile charts", "👦👧 Age & sex adjusted", "📈 Growth context", "📖 Parent-friendly guide"]}
      relatedTools={[
        {title:"BMI Calculator (Adult)",desc:"Standard WHO-based BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Ideal Weight Calculator",desc:"Four formulas compared.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},
      ]}>
      <BmiTeensCalc />
      <QuickAnswer answer="Teen BMI uses CDC age-and-sex-specific percentiles — not the adult BMI scale. A BMI of 22 could be 89th percentile at age 12 but only 41st percentile at age 18. Enter your age, sex, height, and weight above to get your percentile." />
      <SplitArticle content={content} injections={{
        0: <TeenVsAdultBMI />,
        2: <PercentileCategoriesSVG />,
        3: <PubertyGrowthSVG />,
      }} />
    </ToolPageShell>
  );
}
