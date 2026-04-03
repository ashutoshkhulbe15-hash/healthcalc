import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { TdeeCalc } from "./TdeeCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "TDEE Calculator — Total Daily Energy Expenditure",
  description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation. Get calorie targets for weight loss, gain, or maintenance.",
};

export default function Page() {
  const content = getArticleContent("05-tdee-calculator.md");
  return (
    <ToolPageShell
      category="fitness"
      title="TDEE Calculator"
      description="Find your Total Daily Energy Expenditure — the number of calories you burn per day. Based on the Mifflin-St Jeor equation, the most validated formula for most people."
      features={["🔬 Mifflin-St Jeor equation", "📊 BMR + TDEE results", "🎯 Cut/bulk/maintain targets", "📖 2,300-word guide"]}
      relatedTools={[
        { title: "Macro Calculator", desc: "Split your calories into protein, carbs, and fat.", href: "/fitness/macro-calculator", category: "fitness" },
        { title: "Calorie Deficit Calculator", desc: "Find your optimal deficit for weight loss.", href: "/fitness/calorie-deficit-calculator", category: "fitness" },
        { title: "Body Fat Calculator", desc: "Estimate body fat with the Navy method.", href: "/fitness/body-fat-calculator", category: "fitness" },
      ]}
      relatedHeading="Continue Your Fitness Journey"
    >
      <TdeeCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
