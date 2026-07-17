import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PregnancyNutrientsSVG, WeeklyFishLimitSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Pregnancy Nutrition Guide — What to Eat & Nutrients", description: "Six key pregnancy nutrients: folate, iron, calcium, DHA, protein, vitamin D. Trimester-specific guidance, foods to avoid, and calorie needs (340-450 extra in 2nd/3rd tri).", alternates: { canonical: "/blog/pregnancy-nutrition-guide" } };
export default function Page() { const content = getArticleContent("38-pregnancy-nutrition-guide.md");
  const lastUpdated = getLastUpdated("38-pregnancy-nutrition-guide.md");
  const lastUpdatedISO = getLastUpdatedISO("38-pregnancy-nutrition-guide.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Complete Pregnancy Nutrition Guide" subtitle="What to eat, which nutrients matter most, and how needs change by trimester per ACOG guidelines." readTime="12 min" category="pregnancy" categoryLabel="Pregnancy" relatedTools={[{title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Safe Food Checker",desc:"Check food safety.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"}]} url="/blog/pregnancy-nutrition-guide">
    <QuickAnswer answer="According to ACOG, 'eating for two' means about 340 extra cal/day in the second trimester and 450 in the third — not doubling intake. The four most commonly deficient nutrients are iron, DHA omega-3, choline, and vitamin D per published research. Prioritize salmon, eggs, leafy greens, and Greek yogurt. A prenatal vitamin supplements but does not replace a nutritious diet." />
    <SplitArticle content={content} injections={{ 2: <PregnancyNutrientsSVG />, 3: <WeeklyFishLimitSVG /> }} />
  </BlogPageShell>); }
