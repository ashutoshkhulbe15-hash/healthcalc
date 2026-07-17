import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { OvulationCalc } from "./OvulationCalc";
import { FertileWindowSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Ovulation Calculator — Find Your Fertile Window", description: "Calculate ovulation date and 6-day fertile window from your cycle length. Ovulation occurs ~14 days before your next period. Includes signs of ovulation and timing tips.", alternates: { canonical: "/pregnancy/ovulation-calculator" } };
export default function Page() { const content = getArticleContent("09-ovulation-calculator.md");
  const lastUpdated = getLastUpdated("09-ovulation-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Ovulation Calculator" description="Estimate your fertile window based on cycle length per standard reproductive physiology. Combine with OPKs for more precise tracking per ACOG." features={["📅 Fertile window","📊 Cycle-adjusted","🔬 ACOG-aligned","📖 Evidence-based"]} relatedTools={[{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"HCG Calculator",desc:"Early pregnancy tracking.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},{title:"Weight Gain Calculator",desc:"Pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"}]}>
    <OvulationCalc />
    <QuickAnswer answer="According to ACOG, ovulation typically occurs 14 days before your next period — not 14 days after your last. The fertile window is approximately 6 days (5 days before ovulation + ovulation day) per published reproductive research. Enter your cycle length above for a personalized estimate." />
    <SplitArticle content={content} injections={{ 2: <FertileWindowSVG /> }} />
  </ToolPageShell>); }
