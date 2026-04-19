import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { ProteinCalc } from "./ProteinCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Protein Intake Calculator — How Much Protein Do I Need Per Day?",
  description: "Calculate your daily protein needs based on body weight, activity level, and goal. Evidence-based ranges for muscle gain, weight loss, seniors, and athletes.",
  alternates: { canonical: "/fitness/protein-intake-calculator" },
};

export default function Page() {
  const content = getArticleContent("14-protein-intake-calculator.md");
  return (
    <ToolPageShell
      category="fitness"
      title="Protein Intake Calculator"
      description="Calculate your optimal daily protein intake based on your weight, activity level, and goals. Backed by sports nutrition research and ISSN guidelines."
      features={["🥩 Goal-based protein targets", "📊 g/kg recommendations", "🏋️ Activity-adjusted", "📖 Evidence-based guide"]}
      relatedTools={[
        { title: "Macro Calculator", desc: "Get your full macro breakdown.", href: "/fitness/macro-calculator", category: "fitness" },
        { title: "TDEE Calculator", desc: "Find your daily calorie burn.", href: "/fitness/tdee-calculator", category: "fitness" },
        { title: "Calorie Deficit Calculator", desc: "Set your weight loss target.", href: "/fitness/calorie-deficit-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Nutrition Tools"
    >
      <ProteinCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
