import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { OneRepMaxCalc } from "./OneRepMaxCalc";
import { TrainingPercentagesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "One Rep Max Calculator — Estimate Your 1RM", description: "Calculate 1RM from submaximal lifts using Epley, Brzycki, and Lombardi formulas. Training percentage chart included. Most accurate with 3-10 rep sets.", alternates: { canonical: "/fitness/one-rep-max-calculator" } };
export default function Page() { const content = getArticleContent("19-one-rep-max-calculator.md");
  const lastUpdated = getLastUpdated("19-one-rep-max-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="One Rep Max (1RM) Calculator" description="Estimate your 1RM safely from submaximal sets using published Brzycki, Epley, and Lander formulas. NSCA training zone chart included." features={["🏋️ 3 published formulas","📊 Training zones (NSCA)","🔬 Validation research","📖 Evidence-based"]} relatedTools={[{title:"Protein Calculator",desc:"Recovery protein needs.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"TDEE Calculator",desc:"Daily calorie burn.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"Body Fat Calculator",desc:"Body composition.",href:"/fitness/body-fat-calculator",category:"fitness"}]}>
    <OneRepMaxCalc />
    <QuickAnswer answer="Enter a weight and rep count (2-10 reps for best accuracy) to estimate your one-rep max using Brzycki, Epley, and Lander formulas. According to NSCA guidelines, training at 67-85% of 1RM builds muscle size, while 85-100% builds maximum strength. 3-5 rep sets produce the most reliable estimates per published validation research." />
    <SplitArticle content={content} injections={{ 3: <TrainingPercentagesSVG /> }} />
  </ToolPageShell>); }
