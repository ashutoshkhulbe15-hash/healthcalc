import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BodyFatCalc } from "./BodyFatCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Body Fat Calculator — U.S. Navy Method (Free, No Equipment Needed)",
  description: "Calculate your body fat percentage using the U.S. Navy circumference method. Visual lean vs fat mass breakdown, ACE body fat ranges by age and gender, and 3,400-word guide.",
};

export default function Page() {
  const content = getArticleContent("07-body-fat-calculator.md");
  return (
    <ToolPageShell
      category="fitness"
      title="Body Fat Calculator"
      description="Estimate your body fat percentage using the U.S. Navy circumference method. Understand healthy ranges by age and gender, and why body fat matters more than BMI."
      features={["📏 Navy method", "📊 Visual body fat ranges", "⚖️ BMI comparison", "📖 3,400-word guide"]}
      relatedTools={[
        { title: "BMI Calculator", desc: "Compare with your Body Mass Index.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "TDEE Calculator", desc: "Find your daily calorie burn.", href: "/fitness/tdee-calculator", category: "fitness" },
        { title: "Macro Calculator", desc: "Get your personalized macro targets.", href: "/fitness/macro-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Body Composition Tools"
    >
      <BodyFatCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
