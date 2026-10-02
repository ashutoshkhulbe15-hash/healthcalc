import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SafeFoodCalc } from "./SafeFoodCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Pregnancy Food Guide — Reviewed Source Pages", description: "Search food topics with completed source review. Guidance depends on food type, preparation and regional recommendations.", alternates: { canonical: "/pregnancy/safe-food-checker" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Pregnancy Food Guide — Reviewed Source Pages", description: "Search food topics with completed source review. Guidance depends on food type, preparation and regional recommendations.", url: "/pregnancy/safe-food-checker", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Pregnancy Food Guide — Reviewed Source Pages", description:"Search food topics with completed source review. Guidance depends on food type, preparation and regional recommendations.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("17-pregnancy-safe-food-checker.md");
  const lastUpdated = getLastUpdated("17-pregnancy-safe-food-checker.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Pregnancy Food Guide" description="Search topics with completed source review. Guidance depends on food type and preparation." features={["Search reviewed topics","Preparation matters","Source links","Review scope stated"]} relatedTools={[{title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"Nutrition Guide",desc:"Full pregnancy nutrition.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"}]}>
    <SafeFoodCalc />
    <QuickAnswer answer="Search the topics with completed source review and open the linked page for its source-specific guidance. Advice varies by food type, preparation and regional recommendations." />
    <SplitArticle content={content} />
  </ToolPageShell>); }
