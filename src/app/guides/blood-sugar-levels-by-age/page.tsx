import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blood Sugar Levels Chart by Age — Normal Ranges",
  description: "Normal blood sugar ranges by age — fasting, post-meal, and A1C. How age affects glucose levels and when to be concerned.",
};

export default function Page() {
  const content = getArticleContent("guide-blood-sugar-levels-by-age.md");
  return (
    <BlogPageShell
      title="Blood Sugar Levels Chart by Age — Normal Ranges"
      subtitle="Normal blood sugar ranges by age — fasting, post-meal, and A1C. How age affects glucose levels and when to be concerned."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}>
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
