import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PregnancyWeightGainCalc } from "./PregnancyWeightGainCalc";
import { IOMRangesSVG, WeightBreakdownSVG, TrimesterGainSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator by Week — IOM Guidelines Tracker",
  description: "Free pregnancy weight gain calculator with week-by-week tracking based on IOM guidelines. Visual chart, BMI-adjusted ranges, twin pregnancy support. 2,900-word evidence-based guide.",
  alternates: { canonical: "/pregnancy/weight-gain-calculator" },
};

export default function Page() {
  const content = getArticleContent("01-pregnancy-weight-gain-calculator.md");
  return (
    <ToolPageShell category="pregnancy" title="Pregnancy Weight Gain Calculator"
      description="Track your weight gain week-by-week against IOM guidelines. Visual trajectory chart with BMI-adjusted ranges."
      features={["📈 Visual trajectory chart", "📋 IOM 2009 guidelines", "👶 Twin support", "📖 Evidence-based guide"]}
      relatedTools={[
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Safe Food Checker",desc:"Is this food safe?",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Fetal Weight Percentile",desc:"Track baby's growth.",href:"/pregnancy/fetal-weight-percentile",category:"pregnancy"},
      ]}>
      <PregnancyWeightGainCalc />
      <QuickAnswer answer="Healthy pregnancy weight gain depends on your pre-pregnancy BMI: 25-35 lbs for normal weight, 15-25 lbs for overweight, 28-40 lbs for underweight. Enter your details above to track week-by-week against IOM guidelines." />
      <SplitArticle content={content} injections={{
        2: <IOMRangesSVG />,
        3: <TrimesterGainSVG />,
        4: <WeightBreakdownSVG />,
      }} />
    </ToolPageShell>
  );
}
