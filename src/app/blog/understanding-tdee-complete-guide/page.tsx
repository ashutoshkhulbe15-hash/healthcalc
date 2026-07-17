import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { NEATvExerciseSVG, TDEEComponentsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Understanding TDEE — Complete Energy Expenditure Guide", description: "TDEE is the foundation of every diet per published exercise physiology. Components, Mifflin-St Jeor equation, NEAT vs exercise, and how to calibrate your number.", alternates: { canonical: "/blog/understanding-tdee-complete-guide" } };
export default function Page() { const content = getArticleContent("36-understanding-tdee-complete-guide.md");
  const lastUpdated = getLastUpdated("36-understanding-tdee-complete-guide.md");
  const lastUpdatedISO = getLastUpdatedISO("36-understanding-tdee-complete-guide.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Understanding TDEE — The Complete Guide" subtitle="The single number behind every diet — what it is, how to calculate it, and why NEAT matters more than the gym per published data." readTime="13 min" category="fitness" categoryLabel="Fitness" relatedTools={[{title:"TDEE Calculator",desc:"Calculate your TDEE.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"BMR Calculator",desc:"Basal metabolic rate.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},{title:"Calorie Deficit",desc:"Set your deficit.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}]} url="/blog/understanding-tdee-complete-guide">
    <QuickAnswer answer="According to published exercise physiology, TDEE = BMR (60-70%) + thermic effect of food (10%) + NEAT (15-20%) + exercise. The Mifflin-St Jeor equation is the most accurate estimation per published validation. Pontzer et al. (Science 2021) showed NEAT often burns more than gym sessions. Calibrate by tracking weight for 2 weeks at consistent intake." />
    <SplitArticle content={content} injections={{ 1: <TDEEComponentsSVG />, 3: <NEATvExerciseSVG /> }} />
  </BlogPageShell>); }
