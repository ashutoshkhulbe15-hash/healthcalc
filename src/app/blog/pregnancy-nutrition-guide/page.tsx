import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Complete Guide to Pregnancy Nutrition",
  description: "Trimester-by-trimester nutrition needs, key nutrients, and what to eat and avoid.",
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
      ]}>
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
