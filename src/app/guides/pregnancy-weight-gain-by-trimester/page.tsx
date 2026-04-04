import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain by Trimester — Week-by-Week Breakdown",
  description: "IOM recommended weight gain by trimester and BMI category. Where the weight goes, when gain is too fast or slow, and week-by-week expectations.",
};

export default function Page() {
  const content = getArticleContent("guide-pregnancy-weight-gain-by-trimester.md");
  return (
    <BlogPageShell
      title="Pregnancy Weight Gain by Trimester — Week-by-Week Breakdown"
      subtitle="IOM recommended weight gain by trimester and BMI category. Where the weight goes, when gain is too fast or slow, and week-by-week expectations."
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
