import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Understanding TDEE: The Number Behind Every Diet",
  description: "Every calorie deficit, bulk, and maintenance phase starts with one number.",
};

export default function Page() {
  const content = getArticleContent("36-understanding-tdee-complete-guide.md");
  return (
    <BlogPageShell
      title="Understanding TDEE: The Number Behind Every Diet"
      subtitle="Every calorie deficit, bulk, and maintenance phase starts with one number."
      readTime="12 min"
      category="fitness"
      categoryLabel="Fitness"
      relatedTools={[
        {title:"TDEE Calculator",desc:"Calculate your daily energy expenditure.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Macro Calculator",desc:"Split calories into macros.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"Calorie Deficit Calculator",desc:"Find your optimal deficit.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}
      ]}>
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
