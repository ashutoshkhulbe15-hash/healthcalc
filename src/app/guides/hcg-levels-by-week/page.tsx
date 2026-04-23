import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HCGByWeekSVG, HCGDoublingTimeSVG, HCGWarningSignsSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "HCG Levels Chart by Week — Normal Ranges in Early Pregnancy",
  description: "Normal HCG levels week 3-40 with doubling times. Why ranges are wide, singleton vs twin patterns, and when levels are concerning.",
  alternates: { canonical: "/guides/hcg-levels-by-week" },
};

export default function Page() {
  const content = getArticleContent("guide-hcg-levels-by-week.md");
  return (
    <BlogPageShell title="HCG Levels Chart by Week" subtitle="Normal HCG ranges in early pregnancy — doubling times, when to worry, and what the numbers mean."
      readTime="10 min" category="pregnancy" categoryLabel="Pregnancy Guide"
      relatedTools={[
        {title:"HCG Calculator",desc:"Track doubling time.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your due date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Weight Gain Tracker",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]} url="/guides/hcg-levels-by-week">
      <QuickAnswer answer="Normal HCG varies enormously: at 6 weeks, ranges span 1,080 to 56,500 mIU/mL. The doubling time (48-72 hours early on) matters more than any single number. Two women with a 50x difference in HCG can both have healthy pregnancies." />
      <SplitArticle content={content} injections={{
        1: <HCGByWeekSVG />,
        3: <HCGDoublingTimeSVG />,
        4: <HCGWarningSignsSVG />,
      }} />
    </BlogPageShell>
  );
}
