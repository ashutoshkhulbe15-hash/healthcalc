import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "How Stress Affects Your Body: A Data-Driven Look",
  description: "Cortisol, HPA axis, and the physical toll of chronic stress.",
};

export default function Page() {
  const content = getArticleContent("39-how-stress-affects-body.md");
  return (
    <BlogPageShell
      title="How Stress Affects Your Body: A Data-Driven Look"
      subtitle="Cortisol, HPA axis, and the physical toll of chronic stress."
      readTime="11 min"
      category="mental-health"
      categoryLabel="Mental Health"
      relatedTools={[
        {title:"Stress Level Test",desc:"PSS-10 stress assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"PSQI sleep assessment.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
        {title:"Burnout Quiz",desc:"Assess your burnout risk.",href:"/mental-health/burnout-quiz",category:"mental-health"}
      ]}>
      <MarkdownArticle content={content} />
    </BlogPageShell>
  );
}
