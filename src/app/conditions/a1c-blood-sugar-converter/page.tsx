import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { A1cCalc } from "./A1cCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "A1C to Blood Sugar Converter — eAG Calculator",
  description: "Convert your A1C percentage to estimated average blood sugar (eAG). Understand what A1C means for diabetes management with our evidence-based guide.",
};

export default function Page() {
  const content = getArticleContent("12-a1c-blood-sugar-converter.md");
  return (
    <ToolPageShell
      category="conditions"
      title="A1C to Blood Sugar Converter"
      description="Convert your A1C percentage to estimated average glucose (eAG) in mg/dL or mmol/L. Understand diabetes risk categories and what your A1C result means."
      features={["🔄 A1C ↔ eAG conversion", "📊 Risk category chart", "🩸 mg/dL and mmol/L", "📖 Diabetes reference guide"]}
      relatedTools={[
        { title: "BMI Calculator", desc: "Check your body mass index.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "GFR Calculator", desc: "Assess kidney function.", href: "/conditions/gfr-calculator", category: "conditions" },
        { title: "TDEE Calculator", desc: "Find your daily calorie needs.", href: "/fitness/tdee-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Health Tools"
    >
      <A1cCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
