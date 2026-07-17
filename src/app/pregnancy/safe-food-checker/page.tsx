import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SafeFoodCalc } from "./SafeFoodCalc";
import { FishMercuryRankSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Pregnancy Safe Food Checker — Search 50+ Foods", description: "Search our database of 50 pregnancy food safety guides based on FDA, ACOG, and CDC guidelines. Safety ratings, preparation requirements, and detailed guides.", alternates: { canonical: "/pregnancy/safe-food-checker" } };
export default function Page() { const content = getArticleContent("17-pregnancy-safe-food-checker.md");
  const lastUpdated = getLastUpdated("17-pregnancy-safe-food-checker.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Pregnancy Safe Food Checker" description="Search 50 food safety guides based on FDA, ACOG, and CDC guidelines. Safety ratings reflect what major health organizations recommend." features={["🔍 50 foods searchable","🏛️ FDA/ACOG/CDC based","📊 Safety ratings","📖 Detailed guides"]} relatedTools={[{title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"Nutrition Guide",desc:"Full pregnancy nutrition.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"}]}>
    <SafeFoodCalc />
    <QuickAnswer answer="Type any food to check its pregnancy safety classification based on FDA, ACOG, and CDC guidelines. Our database covers 50 foods with detailed guides on preparation requirements, mercury levels (for fish), pasteurization status (for dairy), and trimester-specific considerations." />
    <SplitArticle content={content} injections={{ 4: <FishMercuryRankSVG /> }} />
  </ToolPageShell>); }
