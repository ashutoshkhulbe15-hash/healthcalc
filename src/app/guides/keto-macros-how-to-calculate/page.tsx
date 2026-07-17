import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { KetoMacroSplitSVG, KetoMacroBreakdownSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Keto Macros: How to Calculate for Ketosis",
  description: "Calculate your keto macros step by step. Standard keto split: 70-75% fat, 20-25% protein, 5-10% carbs. Net carbs vs total carbs, common mistakes, and signs of ketosis explained.",
  alternates: { canonical: "/guides/keto-macros-how-to-calculate" },
};

export default function Page() {
  const content = getArticleContent("guide-keto-macros.md");
  const lastUpdated = getLastUpdated("guide-keto-macros.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-keto-macros.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Keto Macros: How to Calculate" subtitle="Step-by-step keto macro calculation — carbs are the ceiling, protein is the anchor, fat fills the rest." readTime="6 min read" category="fitness" categoryLabel="Fitness" url="/guides/keto-macros-how-to-calculate"
      relatedTools={[
        {title:"Macro Calculator",desc:"Calculate macros for any diet.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Find your maintenance calories first.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Lean Body Mass Calculator",desc:"Calculate LBM for protein targeting.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
      ]}>
      <QuickAnswer answer="Standard keto macros: 70-75% fat, 20-25% protein, 5-10% carbs. On 2,000 calories that is approximately 165g fat, 100g protein, 25g net carbs. The carb number (20-50g net) is what determines ketosis — fat and protein fill in around it." />
      <SplitArticle content={content} injections={{
        1: <KetoMacroBreakdownSVG />,
        3: <KetoMacroSplitSVG />,
      }} />
    </BlogPageShell>
  );
}
