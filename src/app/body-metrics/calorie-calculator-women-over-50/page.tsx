import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { WomenOver50Calc } from "./WomenOver50Calc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Calorie Calculator for Women Over 50", description: "Calculate daily calorie needs for women over 50. Accounts for menopause, metabolic changes, and sarcopenia prevention protein targets." };

export default function Page() {
  const content = getArticleContent("24-calorie-calculator-women-over-50.md");
  return (
    <ToolPageShell category="body-metrics" title="Calorie Calculator for Women Over 50"
      description="Daily calorie needs tailored for women 50+. Accounts for age-related metabolic changes, with protein targets for sarcopenia prevention."
      features={["👩 Designed for 50+","📊 Protein targets included","🔬 Menopause-aware","📖 Complete guide"]}
      relatedTools={[
        {title:"TDEE Calculator",desc:"General daily energy expenditure.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"BMR Calculator",desc:"Your resting metabolic rate.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},
        {title:"Protein Calculator",desc:"Detailed protein needs.",href:"/fitness/protein-intake-calculator",category:"fitness"},
      ]}
      relatedHeading="Related Nutrition Tools">
      <WomenOver50Calc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
