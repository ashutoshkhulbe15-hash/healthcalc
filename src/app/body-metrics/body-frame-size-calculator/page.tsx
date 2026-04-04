import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { FrameSizeCalc } from "./FrameSizeCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Body Frame Size Calculator — Small, Medium, or Large (Wrist Method)",
  description: "Determine your body frame size from wrist circumference and height. Understand how frame size affects your ideal weight range and what your ratio means." };

export default function Page() {
  const content = getArticleContent("28-body-frame-size-calculator.md");
  return (
    <ToolPageShell category="body-metrics" title="Body Frame Size Calculator" description="Evidence-based body frame size calculator with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <FrameSizeCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
