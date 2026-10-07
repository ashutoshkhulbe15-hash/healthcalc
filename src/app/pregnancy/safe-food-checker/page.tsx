import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { SafeFoodCalc } from "./SafeFoodCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Pregnancy Food Guide — Topics and Preparation", description: "Browse listed food topics. Guidance depends on food type, preparation and regional recommendations.", alternates: { canonical: "/pregnancy/safe-food-checker" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Pregnancy Food Guide — Topics and Preparation", description: "Browse listed food topics. Guidance depends on food type, preparation and regional recommendations.", url: "/pregnancy/safe-food-checker", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Pregnancy Food Guide — Topics and Preparation", description:"Browse listed food topics. Guidance depends on food type, preparation and regional recommendations.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("17-pregnancy-safe-food-checker.md");
  const lastUpdated = getLastUpdated("17-pregnancy-safe-food-checker.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Pregnancy Food Guide" description="Browse food topics and preparation guidance. Guidance depends on food type and preparation." features={["Search listed topics","Preparation matters","Source links","Regional advice explained"]} relatedTools={[{title:"Weight Gain Calculator",desc:"Compare a guideline reference range.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"Due Date Calculator",desc:"Delivery date estimate.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},{title:"Nutrition Guide",desc:"Explore the separate nutrition guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"}]}>
    <SafeFoodCalc />
    <QuickAnswer answer="This is a directory of listed food topics, not a meal assessment or a risk score. Read the guidance and relevant sources. Advice varies by food type, preparation and regional recommendations." />
    <SplitArticle content={content} />
  </ToolPageShell>); }
