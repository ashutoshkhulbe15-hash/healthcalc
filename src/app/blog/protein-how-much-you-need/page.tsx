import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Protein Guidance: U.S. Intake and Exercise Research", description: "The current U.S. protein serving goal, the separate older DRI RDA, and the separate athlete context.", alternates: { canonical: "/blog/protein-how-much-you-need" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Protein Guidance: U.S. Intake and Exercise Research", description: "The current U.S. protein serving goal, the separate older DRI RDA, and the separate athlete context.", url: "/blog/protein-how-much-you-need", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Protein Guidance: U.S. Intake and Exercise Research", description:"The current U.S. protein serving goal, the separate older DRI RDA, and the separate athlete context.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("40-protein-how-much-you-need.md");
  const lastUpdated = getLastUpdated("40-protein-how-much-you-need.md");
  const lastUpdatedISO = getLastUpdatedISO("40-protein-how-much-you-need.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="How Much Protein? U.S. Guidance and Exercise Research" subtitle="Separating the current U.S. dietary guideline, a distinct DRI reference value, and athlete guidance." readTime="4 min" category="fitness" categoryLabel="Nutrition" relatedTools={[{title:"Protein Intake Reference",desc:"Arithmetic for current U.S. federal guidance; not a personal prescription.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"Protein reference for healthy older adults",desc:"Separate European ESPEN guidance and scope.",href:"/body-metrics/protein-needs-seniors",category:"body-metrics"},{title:"TDEE Calculator",desc:"Model-based energy estimate.",href:"/fitness/tdee-calculator",category:"fitness"}]} url="/blog/protein-how-much-you-need">
    <QuickAnswer source={{href:"https://cdn.realfood.gov/DGA.pdf",label:"U.S. Dietary Guidelines 2025\u20132030: protein serving goal"}} answer="The U.S. Dietary Guidelines for Americans, 2025–2030 give a protein serving goal of 1.2–1.6 g/kg/day, adjusted for individual calorie requirements. Athlete guidance and ESPEN older-adult guidance have separate scopes. A calculated reference does not determine a personal need." />
    <SplitArticle content={content} />
  </BlogPageShell>); }
