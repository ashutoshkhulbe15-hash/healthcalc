import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { LbmCalc } from "./LbmCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Lean Body Mass Calculator — Boer & James Formula (Fat-Free Mass)", description: "Calculate your lean body mass using Boer and James formulas. Visual lean-to-fat ratio, estimated body fat percentage, and guide to why LBM matters for metabolism.",
  alternates: { canonical: "/fitness/lean-body-mass-calculator" }, };

export default function Page() {
  const content = getArticleContent("23-lean-body-mass-calculator.md");
  return (
    <ToolPageShell category="fitness" title="Lean Body Mass Calculator"
      description="Estimate your lean body mass — everything except fat. Uses Boer and James formulas with visual lean-to-fat ratio breakdown."
      features={["📊 Boer & James formulas","⚖️ Lean vs fat visual","🔬 Body composition","📖 Complete guide"]}
      relatedTools={[
        {title:"Body Fat Calculator",desc:"Navy method body fat estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"BMI Calculator",desc:"Weight-to-height ratio.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Protein Calculator",desc:"Protein needs based on lean mass.",href:"/fitness/protein-intake-calculator",category:"fitness"},
      ]}
      relatedHeading="Related Body Composition Tools">
      <LbmCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
