import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { CalorieDeficitCalc } from "./CalorieDeficitCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator for Weight Loss — How Many Calories to Lose Weight",
  description: "Calculate your optimal calorie deficit for sustainable weight loss. Choose your rate of loss (0.25-1 kg/week), get daily calorie target and timeline to goal weight.",
};

export default function Page() {
  const content = getArticleContent("08-calorie-deficit-calculator.md");
  return (
    <ToolPageShell
      category="fitness"
      title="Calorie Deficit Calculator"
      description="Find your optimal daily calorie intake for sustainable weight loss. Choose your target rate of loss, and get a science-backed calorie target with timeline projections."
      features={["🎯 Adjustable loss rate", "📊 Timeline projection", "⚖️ Muscle preservation tips", "📖 3,800-word guide"]}
      relatedTools={[
        { title: "TDEE Calculator", desc: "Calculate your daily calorie burn.", href: "/fitness/tdee-calculator", category: "fitness" },
        { title: "Macro Calculator", desc: "Split your deficit into optimal macros.", href: "/fitness/macro-calculator", category: "fitness" },
        { title: "Body Fat Calculator", desc: "Track your body composition.", href: "/fitness/body-fat-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Weight Loss Tools"
    >
      <CalorieDeficitCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
