import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMR vs TDEE — What's the Difference and Which Matters?",
  description: "BMR vs TDEE explained — why you should never eat below BMR, how activity multiplies it into TDEE, and which number to use for weight loss.",
};

export default function Page() {
  const content = getArticleContent("guide-bmr-vs-tdee.md");
  return (
    <BlogPageShell
      title="BMR vs TDEE — What's the Difference and Which Matters?"
      subtitle="BMR vs TDEE explained — why you should never eat below BMR, how activity multiplies it into TDEE, and which number to use for weight loss."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/bmr-vs-tdee-difference">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
