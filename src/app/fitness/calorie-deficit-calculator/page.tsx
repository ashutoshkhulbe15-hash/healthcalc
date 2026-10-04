import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CalorieDeficitCalc } from "./CalorieDeficitCalc";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Calorie Difference Calculator",
  description: "Subtract one user-entered calorie estimate from another. Arithmetic only; no calorie target, weight-loss rate, or safety advice is provided.",
  openGraph: { url: "/fitness/calorie-deficit-calculator" },
  alternates: { canonical: "/fitness/calorie-deficit-calculator" },
};

export default function Page() {
  const content = getArticleContent("08-calorie-deficit-calculator.md");
  const lastUpdated = getLastUpdated("08-calorie-deficit-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="fitness" title="Calorie Difference Calculator"
      description="Subtract values you enter. The result is arithmetic only and does not recommend a calorie intake."
      features={["User-entered values", "Transparent subtraction", "No target or rate recommendations"]}
      relatedTools={[]}>
      <CalorieDeficitCalc />
      <QuickAnswer answer="This tool subtracts the comparison amount you enter from the maintenance estimate you enter. It does not calculate energy needs, recommend a calorie intake, or predict weight change." />
      <SplitArticle content={content} />
    </ToolPageShell>
  );
}
