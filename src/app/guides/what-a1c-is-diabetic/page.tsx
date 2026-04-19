import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "What A1C Level Is Considered Diabetic?",
  description: "Understand A1C ranges — normal, prediabetes, and diabetes thresholds. What your A1C means and what to do if it's high.",
  alternates: { canonical: "/guides/what-a1c-is-diabetic" },
};

export default function Page() {
  const content = getArticleContent("guide-what-a1c-is-diabetic.md");
  return (
    <BlogPageShell
      title="What A1C Level Is Considered Diabetic?"
      subtitle="Understand A1C ranges — normal, prediabetes, and diabetes thresholds. What your A1C means and what to do if it's high."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/what-a1c-is-diabetic">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
