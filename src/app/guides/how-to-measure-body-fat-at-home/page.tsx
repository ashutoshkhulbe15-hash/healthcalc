import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "How to Measure Body Fat at Home — 5 Methods Compared",
  description: "Compare 5 body fat measurement methods — Navy tape, calipers, BIA scales, visual estimation, and DEXA. Accuracy, cost, and how-to.",
};

export default function Page() {
  const content = getArticleContent("guide-measure-body-fat-at-home.md");
  return (
    <BlogPageShell
      title="How to Measure Body Fat at Home — 5 Methods Compared"
      subtitle="Compare 5 body fat measurement methods — Navy tape, calipers, BIA scales, visual estimation, and DEXA. Accuracy, cost, and how-to."
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
