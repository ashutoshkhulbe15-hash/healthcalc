import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ProteinRDAvsOptimalSVG, ProteinByGoalSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "How Much Protein Do You Need? Evidence Guide", description: "RDA 0.8g/kg prevents deficiency but isn't optimal. Active adults: 1.6-2.2g/kg. Cutting: 2.0-2.4g/kg. Distribution across meals matters for muscle protein synthesis.", alternates: { canonical: "/blog/protein-how-much-you-need" } };
export default function Page() { const content = getArticleContent("40-protein-how-much-you-need.md");
  const lastUpdated = getLastUpdated("40-protein-how-much-you-need.md");
  const lastUpdatedISO = getLastUpdatedISO("40-protein-how-much-you-need.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="How Much Protein Do You Actually Need?" subtitle="The RDA is a floor, not a ceiling. What published meta-analyses say about optimal protein for muscle, fat loss, and health." readTime="12 min" category="fitness" categoryLabel="Nutrition" relatedTools={[{title:"Protein Calculator",desc:"Personal protein target.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"Macro Calculator",desc:"Full macro split.",href:"/fitness/macro-calculator",category:"fitness"},{title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"}]} url="/blog/protein-how-much-you-need">
    <QuickAnswer answer="According to published research (AJCN, BJSM), optimal protein for active adults is 1.2-2.0g/kg — significantly above the RDA of 0.8g/kg. For muscle building, the meta-analytic sweet spot is 1.6g/kg per Morton et al. (BJSM 2018). During fat loss, go higher (up to 2.0g/kg) to preserve muscle. High protein does not damage healthy kidneys per published meta-analyses." />
    <SplitArticle content={content} injections={{ 1: <ProteinRDAvsOptimalSVG />, 2: <ProteinByGoalSVG /> }} />
  </BlogPageShell>); }
