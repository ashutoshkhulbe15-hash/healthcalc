import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { MacroCalc } from "./MacroCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Macro Calculator — Free Protein, Carbs & Fat Calculator by Goal",
  description: "Calculate your daily macros for weight loss, muscle building, keto, or maintenance. Personalized protein, carbs, and fat targets based on your TDEE and goals.",
};

export default function Page() {
  const content = getArticleContent("06-macro-calculator.md");
  return (
    <ToolPageShell
      category="fitness"
      title="Macro Calculator"
      description="Get personalized macro targets — protein, carbs, and fat — based on your TDEE, goal, and preferred diet approach. Supports keto, high-protein, balanced, and more."
      features={["🥩 Personalized protein target", "🎯 Goal-based splits", "🥑 Keto & low-carb support", "📖 Complete macro guide"]}
      relatedTools={[
        { title: "TDEE Calculator", desc: "Calculate your daily calorie burn first.", href: "/fitness/tdee-calculator", category: "fitness" },
        { title: "Calorie Deficit Calculator", desc: "Find your optimal deficit.", href: "/fitness/calorie-deficit-calculator", category: "fitness" },
        { title: "Body Fat Calculator", desc: "Estimate your current body fat %.", href: "/fitness/body-fat-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Nutrition Tools"
    >
      <MacroCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
