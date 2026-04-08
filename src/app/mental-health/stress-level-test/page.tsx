import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { StressCalc } from "./StressCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Stress Level Test Online — Free PSS-10 Perceived Stress Scale",
  description: "Take the PSS-10 stress assessment — a clinically validated 10-question scale used by psychologists worldwide. Instant scoring with interpretation. Free, anonymous.",
};

export default function Page() {
  const content = getArticleContent("11-stress-level-test.md");
  return (
    <ToolPageShell
      category="mental-health"
      title="Stress Level Test"
      description="Take a validated 10-question stress assessment based on the Perceived Stress Scale (PSS-10). Understand your stress level and what it means for your health."
      features={["🧪 PSS-10 validated scale", "📊 Score interpretation", "🧠 Stress management tips", "📖 In-depth guide"]}
      relatedTools={[
        { title: "Sleep Quality Calculator", desc: "Assess your sleep with the PSQI.", href: "/mental-health/sleep-quality-calculator", category: "mental-health" },
        { title: "BMI Calculator", desc: "Check your body mass index.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "TDEE Calculator", desc: "Find your daily calorie needs.", href: "/fitness/tdee-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Wellness Tools"
    >
      <StressCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
