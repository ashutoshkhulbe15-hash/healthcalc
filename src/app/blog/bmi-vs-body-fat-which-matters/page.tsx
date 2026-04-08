import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI vs Body Fat Percentage: Which Actually Matters for Health?",
  description: "BMI is the most-used health metric but also one of the most misleading. Learn when BMI fails, when body fat % is better, and which one your doctor should use.",
};

export default function Page() {
  const content = getArticleContent("35-bmi-vs-body-fat-which-matters.md");
  return (
    <BlogPageShell
      title="BMI vs Body Fat Percentage: Which Actually Matters?"
      subtitle="BMI is the most-used health metric — but it's also one of the most misleading."
      readTime="8 min"
      category="body-metrics"
      categoryLabel="Body Metrics"
      relatedTools={[
        {title:"BMI Calculator",desc:"Calculate your Body Mass Index.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Navy method body fat estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"Ideal Weight Calculator",desc:"Four formulas compared.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"}
      ]}
      url="/blog/bmi-vs-body-fat-which-matters">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
