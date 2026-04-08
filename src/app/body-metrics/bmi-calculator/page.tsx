import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BmiCalc } from "./BmiCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI Calculator with Visual Chart — WHO Classification & Healthy Weight Range",
  description: "Calculate your BMI with a visual gauge showing WHO categories. Understand what your BMI means, its limitations, and when body fat percentage matters more. Free, instant.",
};

export default function Page() {
  const content = getArticleContent("04-bmi-calculator.md");
  return (
    <ToolPageShell
      category="body-metrics"
      title="BMI Calculator"
      description="Calculate your Body Mass Index with a visual gauge showing where you fall in WHO classifications. Understand what BMI means — and what it doesn't."
      features={["📊 Visual BMI gauge", "🌍 WHO classification", "⚖️ Limitations explained", "📖 Expert article"]}
      relatedTools={[
        { title: "Body Fat Calculator", desc: "Get a more accurate body composition picture.", href: "/fitness/body-fat-calculator", category: "fitness" },
        { title: "TDEE Calculator", desc: "Find your daily calorie burn.", href: "/fitness/tdee-calculator", category: "fitness" },
        { title: "Ideal Weight Calculator", desc: "Multiple formulas compared.", href: "#", category: "body-metrics" },
      ]}
      relatedHeading="Related Body Metrics Tools"
    >
      <BmiCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
