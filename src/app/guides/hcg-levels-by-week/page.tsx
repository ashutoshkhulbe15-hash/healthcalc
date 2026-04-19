import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "HCG Levels Chart by Week — Normal Ranges in Early Pregnancy",
  description: "Normal HCG levels week 3-40 with doubling times. Why ranges are wide, singleton vs twin patterns, and when levels are concerning.",
  alternates: { canonical: "/guides/hcg-levels-by-week" },
};

export default function Page() {
  const content = getArticleContent("guide-hcg-levels-by-week.md");
  return (
    <BlogPageShell
      title="HCG Levels Chart by Week — Normal Ranges in Early Pregnancy"
      subtitle="Normal HCG levels week 3-40 with doubling times. Why ranges are wide, singleton vs twin patterns, and when levels are concerning."
      readTime="10 min"
      category="conditions"
      categoryLabel="Health Guide"
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
      ]}
      url="/guides/hcg-levels-by-week">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
