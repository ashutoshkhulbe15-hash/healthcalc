import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { OneRepMaxCalc } from "./OneRepMaxCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "One Rep Max Calculator — Estimate Your 1RM with Percentage Chart", description: "Estimate your one rep max from any weight and rep count using Brzycki and Epley formulas. Includes percentage-based training chart for programming your lifts." };

export default function Page() {
  const content = getArticleContent("19-one-rep-max-calculator.md");
  return (
    <ToolPageShell category="fitness" title="One Rep Max Calculator"
      description="Estimate your one rep max from any weight and rep count. Get percentage-based training charts for your programming."
      features={["💪 Brzycki & Epley formulas","📊 Training % chart","🏋️ Any exercise","📖 Strength guide"]}
      relatedTools={[
        {title:"Protein Calculator",desc:"Fuel your strength gains.",href:"/fitness/protein-intake-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Calorie needs for training.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Optimize your nutrition.",href:"/fitness/macro-calculator",category:"fitness"},
      ]}
      relatedHeading="Related Fitness Tools">
      <OneRepMaxCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
