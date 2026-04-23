import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Normal GFR by Age — What's Healthy for Your Kidneys?",
  description: "GFR reference ranges by age decade. Understand when declining GFR is age-related vs concerning, and CKD staging explained.",
  alternates: { canonical: "/guides/normal-gfr-by-age" },
};

export default function Page() {
  const content = getArticleContent("guide-normal-gfr-by-age.md");
  return (
    <BlogPageShell
      title="Normal GFR by Age — What's Healthy for Your Kidneys?"
      subtitle="GFR reference ranges by age decade. Understand when declining GFR is age-related vs concerning, and CKD staging explained."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/normal-gfr-by-age">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
