import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { GfrCalc } from "./GfrCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "GFR Calculator — CKD-EPI 2021 Kidney Function (Race-Free eGFR)",
  description: "Calculate your estimated GFR using the 2021 CKD-EPI race-free equation. CKD stages G1-G5, what your creatinine means, and when to see a nephrologist.",
};

export default function Page() {
  const content = getArticleContent("16-gfr-calculator.md");
  return (
    <ToolPageShell
      category="conditions"
      title="GFR Calculator"
      description="Estimate your kidney function using the CKD-EPI 2021 equation (race-free). Enter your serum creatinine, age, and sex to get your eGFR and CKD stage."
      features={["🧪 CKD-EPI 2021 equation", "📊 CKD staging", "🏥 Race-free formula", "📖 Kidney health guide"]}
      relatedTools={[
        { title: "A1C Converter", desc: "Convert A1C to blood sugar.", href: "/conditions/a1c-blood-sugar-converter", category: "conditions" },
        { title: "BMI Calculator", desc: "Check your body mass index.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "Protein Calculator", desc: "Protein needs for kidney health.", href: "/fitness/protein-intake-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Health Tools"
    >
      <GfrCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
