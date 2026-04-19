import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Anxiety vs Stress — What's the Difference?",
  description: "How to tell the difference between stress and anxiety. Triggers, duration, symptoms compared, and when anxiety becomes a disorder.",
  alternates: { canonical: "/guides/anxiety-vs-stress-difference" },
};

export default function Page() {
  const content = getArticleContent("guide-anxiety-vs-stress.md");
  return (
    <BlogPageShell
      title="Anxiety vs Stress — What's the Difference?"
      subtitle="How to tell the difference between stress and anxiety. Triggers, duration, symptoms compared, and when anxiety becomes a disorder."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/anxiety-vs-stress-difference">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
