import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { AnemiaCalc } from "./AnemiaCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Anemia Risk Checker" };

export default function Page() {
  const content = getArticleContent("27-anemia-risk-checker.md");
  return (
    <ToolPageShell category="conditions" title="Anemia Risk Checker" description="Evidence-based anemia risk checker with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <AnemiaCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
