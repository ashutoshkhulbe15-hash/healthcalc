import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BmrCalc } from "./BmrCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "BMR Calculator — Basal Metabolic Rate", description: "Calculate your Basal Metabolic Rate with Mifflin-St Jeor and Harris-Benedict formulas. Understand your resting calorie burn." };

export default function Page() {
  const content = getArticleContent("18-bmr-calculator.md");
  return (
    <ToolPageShell category="body-metrics" title="BMR Calculator"
      description="Calculate your Basal Metabolic Rate — the calories your body burns at complete rest. Compare Mifflin-St Jeor and Harris-Benedict formulas."
      features={["🔬 Two validated formulas","📊 Side-by-side comparison","⚡ Resting calorie burn","📖 Complete guide"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"BMR × activity = your daily burn.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Split your calories into macros.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"BMI Calculator",desc:"Check your Body Mass Index.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
      ]}
      relatedHeading="Related Tools">
      <BmrCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
