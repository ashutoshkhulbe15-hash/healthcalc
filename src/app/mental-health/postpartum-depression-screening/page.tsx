import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { MarkdownArticle } from "@/components/MarkdownArticle";
import { EpdsCalc } from "./EpdsCalc";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Postpartum Depression Screening — Edinburgh Scale (EPDS)",
  description: "Take the Edinburgh Postnatal Depression Scale. 10 questions with immediate scoring, interpretation, and crisis resources.",
  alternates: { canonical: "/mental-health/postpartum-depression-screening" },
};

export default function Page() {
  const content = getArticleContent("tool-postpartum-depression-screening.md");
  return (
    <ToolPageShell category="mental-health" title="Postpartum Depression Screening"
      description="Take the Edinburgh Postnatal Depression Scale. 10 questions with immediate scoring, interpretation, and crisis resources."
      features={["📊 Interactive tool", "🔬 Evidence-based", "📖 Complete guide"]}
      relatedTools={[
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"TDEE Calculator",desc:"Daily calorie needs.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Stress Level Test",desc:"PSS-10 assessment.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}
      relatedHeading="More Health Tools">
      <EpdsCalc />
      <MarkdownArticle content={content} />
    </ToolPageShell>
  );
}
