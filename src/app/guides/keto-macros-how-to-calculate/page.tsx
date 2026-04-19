import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Keto Macros — How to Calculate for Ketosis",
  description: "Standard keto macro ratios, step-by-step calculation, net carbs vs total carbs, signs of ketosis, and common mistakes.",
  alternates: { canonical: "/guides/keto-macros-how-to-calculate" },
};

export default function Page() {
  const content = getArticleContent("guide-keto-macros.md");
  return (
    <BlogPageShell
      title="Keto Macros — How to Calculate for Ketosis"
      subtitle="Standard keto macro ratios, step-by-step calculation, net carbs vs total carbs, signs of ketosis, and common mistakes."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/keto-macros-how-to-calculate">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
