import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ProteinCalc } from "./ProteinCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Protein Intake Reference — U.S. Guidelines",
  description: "Calculate the arithmetic equivalent of the protein serving goal in the 2025–2030 U.S. Dietary Guidelines. This is not a personalized prescription.",
  alternates: { canonical: "/fitness/protein-intake-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Protein Intake Reference — U.S. Guidelines", description: "Calculate the arithmetic equivalent of the protein serving goal in the 2025–2030 U.S. Dietary Guidelines. This is not a personalized prescription.", url: "/fitness/protein-intake-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Protein Intake Reference — U.S. Guidelines", description:"Calculate the arithmetic equivalent of the protein serving goal in the 2025–2030 U.S. Dietary Guidelines. This is not a personalized prescription.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("14-protein-intake-calculator.md");
  const lastUpdated = getLastUpdated("14-protein-intake-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Protein Intake Reference Calculator"
      description="Calculate the arithmetic equivalent of the protein serving goal in the current U.S. Dietary Guidelines."
      features={["Current U.S. guideline linked", "Weight-based arithmetic", "Limits stated"]}
      relatedTools={[
        {title:"Macro Calculator",desc:"Convert chosen energy shares to grams.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Resting-energy equation with an activity assumption.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Calorie Deficit",desc:"Subtract user-entered calorie values.",href:"/fitness/calorie-deficit-calculator",category:"fitness"},
      ]}>
      <ProteinCalc />
      <QuickAnswer answer="The 2025–2030 U.S. Dietary Guidelines give a protein serving goal of 1.2–1.6 g/kg/day, adjusted as needed for individual calorie requirements. This calculator applies that range to entered body weight; it does not provide an individualized prescription." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
