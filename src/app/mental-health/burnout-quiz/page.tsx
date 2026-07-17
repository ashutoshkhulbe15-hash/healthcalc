import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BurnoutDimensionsSVG, BurnoutVsStressVsDepressionSVG, BurnoutSixDriversSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Burnout Quiz — Are You Burned Out or Just Stressed?",
  description: "Evidence-based burnout self-assessment based on the Maslach Burnout Inventory. Screens emotional exhaustion, cynicism, and reduced efficacy. Understand your results and next steps.",
  alternates: { canonical: "/mental-health/burnout-quiz" },
};

export default function Page() {
  const content = getArticleContent("21-burnout-quiz.md");
  const lastUpdated = getLastUpdated("21-burnout-quiz.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Burnout Quiz"
      description="Is your exhaustion a sign of burnout? This evidence-based assessment screens for the three dimensions of burnout: emotional exhaustion, cynicism, and reduced professional efficacy."
      features={["📊 MBI-based framework", "3️⃣ Three dimensions scored", "🔍 Burnout vs. stress vs. depression", "📖 Recovery guidance"]}
      relatedTools={[
        {title:"Stress Level Test",desc:"Assess overall stress load.",href:"/mental-health/stress-level-test",category:"mental-health"},
        {title:"Anxiety Self-Assessment",desc:"Evaluate anxiety symptoms.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"How stress affects sleep.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
      ]}>
      <QuickAnswer answer="Burnout is different from stress: stress comes from too much pressure; burnout comes from chronic depletion without recovery. This quiz screens three dimensions (emotional exhaustion, cynicism, reduced efficacy) based on the Maslach Burnout Inventory framework. High scores in any single dimension are meaningful." />
      <SplitArticle content={content} injections={{
        2: <BurnoutDimensionsSVG />,
        3: <BurnoutVsStressVsDepressionSVG />,
        4: <BurnoutSixDriversSVG />,
      }} />
    </ToolPageShell>
  );
}
