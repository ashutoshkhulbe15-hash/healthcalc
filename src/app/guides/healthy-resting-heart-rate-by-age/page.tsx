import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resting Heart Rate by Age — What's Normal?",
  description: "Normal resting heart rate ranges for adults, children, and athletes. What affects it, when it's concerning, and how to improve it.",
};

export default function Page() {
  const content = getArticleContent("guide-resting-heart-rate-by-age.md");
  return (
    <BlogPageShell
      title="Resting Heart Rate by Age — What's Normal?"
      subtitle="Normal resting heart rate ranges for adults, children, and athletes. What affects it, when it's concerning, and how to improve it."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/healthy-resting-heart-rate-by-age">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
