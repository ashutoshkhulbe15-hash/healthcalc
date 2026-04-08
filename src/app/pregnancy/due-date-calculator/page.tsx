import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { DueDateCalc } from "./DueDateCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Due Date Calculator — Find Your Estimated Delivery Date (LMP, IVF)",
  description: "Calculate your due date from last menstrual period, conception date, or IVF transfer date. Trimester milestones, ultrasound dating explained. Free, no signup.",
};

export default function Page() {
  const content = getArticleContent("02-due-date-calculator.md");
  return (
    <ToolPageShell
      category="pregnancy"
      title="Due Date Calculator"
      description="Calculate your estimated delivery date from your last menstrual period, conception date, or IVF transfer date. Understand your trimester milestones."
      features={["📅 LMP, conception & IVF methods", "📊 Trimester timeline", "🔬 Ultrasound dating explained", "📖 In-depth guide"]}
      relatedTools={[
        { title: "Weight Gain Calculator", desc: "Track pregnancy weight gain week by week.", href: "/pregnancy/weight-gain-calculator", category: "pregnancy" },
        { title: "HCG Doubling Time", desc: "Monitor early pregnancy HCG levels.", href: "/pregnancy/hcg-doubling-time-calculator", category: "pregnancy" },
        { title: "BMI Calculator", desc: "Check your pre-pregnancy BMI category.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
      ]}
      relatedHeading="Continue Your Pregnancy Journey"
    >
      <DueDateCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
