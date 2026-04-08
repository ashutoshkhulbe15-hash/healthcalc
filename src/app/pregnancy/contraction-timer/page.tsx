import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { ContractionCalc } from "./ContractionCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Contraction Timer — Track Frequency, Duration & the 5-1-1 Rule",
  description: "Free contraction timer to track labor contractions. Measures frequency, duration, and detects the 5-1-1 pattern (5 min apart, 1 min long, 1 hour). Know when to go to the hospital." };

export default function Page() {
  const content = getArticleContent("25-contraction-timer.md");
  return (
    <ToolPageShell category="pregnancy" title="Contraction Timer" description="Evidence-based contraction timer with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <ContractionCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
