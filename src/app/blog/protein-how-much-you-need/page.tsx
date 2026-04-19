import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "How Much Protein Do You Need? By Age, Goal & Activity Level",
  description: "The complete protein guide — RDA vs optimal intake, by goal (muscle gain, weight loss, maintenance), by age (teens, adults, seniors), timing, and plant vs animal sources.",
  alternates: { canonical: "/blog/protein-how-much-you-need" },
};

export default function Page() {
  const content = getArticleContent("40-protein-how-much-you-need.md");
  return (
    <BlogPageShell
      title="Protein: How Much You Really Need (By Age, Goal, and Activity)"
      subtitle="RDA vs optimal, by goal, by age. The complete protein guide."
      readTime="12 min"
      category="fitness"
      categoryLabel="Fitness"
      relatedTools={[
        {title:"Protein Intake Calculator",desc:"Get your daily protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Full macro split.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Protein for Seniors",desc:"65+ protein needs.",href:"/body-metrics/protein-needs-seniors",category:"body-metrics"}
      ]}
      url="/blog/protein-how-much-you-need">
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
