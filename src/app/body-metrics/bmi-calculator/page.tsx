import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmiCalc } from "./BmiCalc";
import { BMIScaleSVG, BMILimitationsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI Calculator with Visual Chart — WHO Classification & Healthy Weight Range",
  description: "Calculate your BMI with a visual gauge showing WHO categories. Understand what your BMI means, its limitations, and when body fat percentage matters more. Free, instant.",
  alternates: { canonical: "/body-metrics/bmi-calculator" },
};

export default function Page() {
  const content = getArticleContent("04-bmi-calculator.md");
  return (
    <ToolPageShell category="body-metrics" title="BMI Calculator"
      description="Visual gauge with age and gender-adjusted interpretation. Understand what your BMI means — and when it doesn't tell the full story."
      features={["📊 Visual BMI gauge", "🏛️ WHO classifications", "⚖️ Healthy weight range", "📖 Evidence-based guide"]}
      relatedTools={[
        {title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"BMI for Teens",desc:"CDC percentile charts.",href:"/body-metrics/bmi-calculator-teens",category:"body-metrics"},
        {title:"Ideal Weight",desc:"Four formulas compared.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},
      ]}>
      <BmiCalc />
      <QuickAnswer answer="BMI (Body Mass Index) divides your weight by height squared. A normal BMI is 18.5-24.9 per WHO. Enter your height and weight above for an instant visual result with clinical interpretation." />
      <SplitArticle content={content} injections={{
        0: <BMIScaleSVG />,
        3: <BMILimitationsSVG />,
      }} />
    </ToolPageShell>
  );
}
