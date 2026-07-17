import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PeanutAllergyMythSVG, PeanutButterNutrientsSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Can I Eat Peanut Butter During Pregnancy?", description: "Peanut butter is considered safe during pregnancy per ACOG and AAP guidelines. The allergy myth is debunked. Nutritional benefits, craving guidance, and how to choose the best brands.", alternates: { canonical: "/pregnancy/safe-food/peanut-butter" } };
export default function Page() { const content = getArticleContent("food-peanut-butter.md");
  const lastUpdated = getLastUpdated("food-peanut-butter.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Peanut Butter During Pregnancy?" description="Evidence-based peanut butter guide. Why the allergy avoidance advice was reversed, LEAP study findings, and nutritional benefits." features={["🥜 Allergy myth debunked","🔬 LEAP study (NEJM)","📊 Nutrients (USDA)","📖 Evidence-based"]} relatedTools={[{title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},{title:"Protein Calculator",desc:"Daily protein needs.",href:"/fitness/protein-intake-calculator",category:"fitness"},{title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"}]} relatedHeading="More Pregnancy Tools">
    <QuickAnswer answer="According to ACOG and AAP guidelines, peanut butter is generally considered safe during pregnancy. The LEAP study (NEJM 2015) found early peanut exposure reduces allergy risk by 81%. Current guidance reverses the old advice to avoid peanuts — eating them during pregnancy may be protective." />
    <SplitArticle content={content} injections={{ 2: <PeanutAllergyMythSVG />, 4: <PeanutButterNutrientsSVG /> }} />
  </ToolPageShell>); }
