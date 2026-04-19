import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { IdealWeightCalc } from "./IdealWeightCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Ideal Weight Calculator — Devine, Robinson, Miller & Hamwi Formulas Compared", description: "Calculate your ideal weight using all four established formulas plus BMI-based range. Understand why ideal weight is a range, not a number, and what affects it.",
  alternates: { canonical: "/body-metrics/ideal-weight-calculator" }, };

export default function Page() {
  const content = getArticleContent("20-ideal-weight-calculator.md");
  return (
    <ToolPageShell category="body-metrics" title="Ideal Weight Calculator"
      description="See your ideal weight range from four established formulas — Devine, Robinson, Miller, and Hamwi. Plus BMI-based healthy weight range."
      features={["📊 4 formulas compared","⚖️ BMI range included","📏 Frame size context","📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Another perspective on healthy weight.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Body composition matters more.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"BMR Calculator",desc:"Your resting calorie burn.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},
      ]}
      relatedHeading="Related Body Metrics">
      <IdealWeightCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
