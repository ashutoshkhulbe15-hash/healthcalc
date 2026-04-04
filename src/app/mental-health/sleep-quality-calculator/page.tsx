import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { SleepCalc } from "./SleepCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sleep Quality Test — PSQI Sleep Assessment Calculator (Free)",
  description: "Assess your sleep quality using the Pittsburgh Sleep Quality Index (PSQI). Measures 7 components: duration, efficiency, latency, disturbances, and more. Instant results.",
};

export default function Page() {
  const content = getArticleContent("13-sleep-quality-calculator.md");
  return (
    <ToolPageShell
      category="mental-health"
      title="Sleep Quality Calculator"
      description="Assess your sleep quality using a framework based on the Pittsburgh Sleep Quality Index (PSQI). Score across 7 dimensions and get personalized improvement tips."
      features={["🌙 PSQI-based framework", "📊 7-dimension scoring", "💤 Sleep hygiene tips", "📖 3,300-word guide"]}
      relatedTools={[
        { title: "Stress Level Test", desc: "Assess your stress with the PSS-10.", href: "/mental-health/stress-level-test", category: "mental-health" },
        { title: "BMI Calculator", desc: "Check your body mass index.", href: "/body-metrics/bmi-calculator", category: "body-metrics" },
        { title: "Calorie Deficit Calculator", desc: "Find your optimal calorie target.", href: "/fitness/calorie-deficit-calculator", category: "fitness" },
      ]}
      relatedHeading="Related Wellness Tools"
    >
      <SleepCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
