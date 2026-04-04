import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain: What the IOM Guidelines Got Right (and What Changed)",
  description: "The IOM weight gain guidelines are 15 years old. Here's what the latest research says about healthy pregnancy weight gain, trimester patterns, and when to worry.",
};

export default function Page() {
  const content = getArticleContent("37-pregnancy-weight-gain-science.md");
  return (
    <BlogPageShell
      title="Pregnancy Weight Gain: What the Science Actually Says"
      subtitle="The IOM guidelines are 15 years old. Here's what they got right and what's changed."
      readTime="10 min"
      category="pregnancy"
      categoryLabel="Pregnancy"
      relatedTools={[
        {title:"Weight Gain Calculator",desc:"Track your weight week by week.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your estimated delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Safe Food Checker",desc:"Is this food safe during pregnancy?",href:"/pregnancy/safe-food-checker",category:"pregnancy"}
      ]}>
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
