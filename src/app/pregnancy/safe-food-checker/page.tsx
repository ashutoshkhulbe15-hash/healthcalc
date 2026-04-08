import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { SafeFoodCalc } from "./SafeFoodCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Pregnancy Safe Food Checker — Can I Eat This While Pregnant?", description: "Search 25+ foods to check if they're safe during pregnancy. Safe, caution, and avoid ratings based on ACOG, FDA, and NHS guidelines. Free searchable database." };

export default function Page() {
  const content = getArticleContent("17-pregnancy-safe-food-checker.md");
  return (
    <ToolPageShell category="pregnancy" title="Pregnancy Safe Food Checker"
      description="Search any food to check if it's safe during pregnancy. Based on ACOG, FDA, and NHS guidelines."
      features={["🔍 Searchable database","🟢🟡🔴 Safety ratings","📋 ACOG/FDA sourced","📖 Complete guide"]}
      relatedTools={[
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight gain.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your estimated delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Ovulation Calculator",desc:"Track your fertile window.",href:"/pregnancy/ovulation-calculator",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <SafeFoodCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
