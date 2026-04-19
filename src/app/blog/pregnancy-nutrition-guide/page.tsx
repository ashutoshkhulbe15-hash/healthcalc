import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Nutrition Guide — What to Eat by Trimester (Evidence-Based)",
  description: "Complete guide to pregnancy nutrition — trimester-by-trimester calorie needs, key nutrients (folate, iron, DHA, calcium), foods to eat and avoid, and supplement guidance.",
  alternates: { canonical: "/blog/pregnancy-nutrition-guide" },
};

export default function Page() {
  const content = getArticleContent("38-pregnancy-nutrition-guide.md");
  return (
    <BlogPageShell
      title="The Complete Guide to Pregnancy Nutrition"
      subtitle="Trimester-by-trimester nutrition needs, key nutrients, and what to eat and avoid."
      readTime="11 min"
      category="pregnancy"
      categoryLabel="Pregnancy"
      relatedTools={[
        {title:"Safe Food Checker",desc:"Check if a food is safe.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"}
      ]}
      url="/blog/pregnancy-nutrition-guide">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
