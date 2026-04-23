import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { BabyGrowthCalc } from "./BabyGrowthCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = { title: "Baby Growth Percentile Calculator — WHO Weight Chart Birth to 5 Years",
  description: "Track your baby's weight against WHO growth standards from birth to 60 months. Percentile visualization, normal range interpretation, and growth guide.",
  alternates: { canonical: "/pregnancy/baby-growth-percentile" }, };

export default function Page() {
  const content = getArticleContent("34-baby-growth-percentile-calculator.md");
  return (
    <ToolPageShell category="pregnancy" title="Baby Growth Percentile" description="Evidence-based baby growth percentile with interactive tool and in-depth guide."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <BabyGrowthCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
