import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BMRvsTDEEVisualSVG, TDEEComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "BMR vs TDEE — The Difference Explained", description: "BMR is calories at rest. TDEE is total daily burn. Use TDEE — not BMR — to set calorie targets. Never eat below BMR long-term. Activity multipliers and when to recalculate.", alternates: { canonical: "/guides/bmr-vs-tdee-difference" } };
export default function Page() { const content = getArticleContent("guide-bmr-vs-tdee.md");
  const lastUpdated = getLastUpdated("guide-bmr-vs-tdee.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-bmr-vs-tdee.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="BMR vs TDEE — What Each Number Means" subtitle="According to published research, BMR is your metabolic floor. TDEE is your diet planning number. Never confuse the two." readTime="9 min" category="fitness" categoryLabel="Fitness Guide" relatedTools={[{title:"TDEE Calculator",desc:"Calculate your TDEE.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"BMR Calculator",desc:"Calculate your BMR.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},{title:"Calorie Deficit",desc:"Set your deficit.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}]} url="/guides/bmr-vs-tdee-difference">
    <QuickAnswer answer="According to published exercise physiology, BMR (Basal Metabolic Rate) is the calories your body burns at complete rest — about 60-70% of total burn. TDEE (Total Daily Energy Expenditure) adds activity on top. Use TDEE for diet planning. Never eat below BMR — it is your metabolic floor, not a diet target." />
    <SplitArticle content={content} injections={{ 1: <BMRvsTDEEVisualSVG />, 2: <TDEEComponentsSVG /> }} />
  </BlogPageShell>); }
