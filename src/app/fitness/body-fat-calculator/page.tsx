import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BodyFatCalc } from "./BodyFatCalc";
import { BodyFatRangesSVG, NavyMethodSVG, BodyFatMethodsSVG, BMILimitationsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Body Fat Calculator — U.S. Navy Method (Free, No Equipment Needed)",
  description: "Calculate your body fat percentage using the U.S. Navy circumference method. Visual lean vs fat mass breakdown, ACE body fat ranges by age and gender, and 3,400-word guide.",
  alternates: { canonical: "/fitness/body-fat-calculator" },
};

export default function Page() {
  const content = getArticleContent("07-body-fat-calculator.md");
  return (
    <ToolPageShell category="fitness" title="Body Fat Calculator"
      description="Navy method body fat estimation using neck, waist, and hip measurements. Visual lean-to-fat breakdown with ACE classification."
      features={["📏 Navy tape method", "📊 ACE classifications", "👤 Visual breakdown", "📖 3,400-word guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Quick BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Lean Body Mass",desc:"Boer & James formulas.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
        {title:"Ideal Weight",desc:"Four formulas compared.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},
      ]}>
      <BodyFatCalc />
      <QuickAnswer answer="Healthy body fat is 14-24% for men and 21-31% for women (ACE fitness classification). The Navy method estimates yours from neck, waist, and hip measurements — accurate within ±3-4% and free. Enter your measurements above." />
      <SplitArticle content={content} injections={{
        1: <BodyFatRangesSVG />,
        3: <NavyMethodSVG />,
        4: <BMILimitationsSVG />,
        5: <BodyFatMethodsSVG />,
      }} />
    </ToolPageShell>
  );
}
