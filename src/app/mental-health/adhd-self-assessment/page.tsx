import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { AdhdCalc } from "./AdhdCalc";
import { ReferenceTable, Steps, CompareColumns, KeyFacts } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "ADHD Self-Assessment (ASRS) & Scoring Guide",
  description: "Take the WHO Adult ADHD Self-Report Scale (ASRS v1.1). How the ASRS is scored, score interpretation, ADHD vs OCD, and conditions that mimic ADHD.",
  alternates: { canonical: "/mental-health/adhd-self-assessment" },
};

export default function Page() {
  const content = getArticleContent("26-adhd-self-assessment.md");
  const lastUpdated = getLastUpdated("26-adhd-self-assessment.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="ADHD Self-Assessment (ASRS)"
      description="The WHO Adult ADHD Self-Report Scale screens for ADHD symptoms in adults. This is a screening instrument, not a diagnostic tool."
      features={["📋 WHO ASRS v1.1", "📊 Score interpretation", "🧠 Adult ADHD explained", "🔍 Conditions that mimic ADHD"]}
      relatedTools={[
        {title:"Anxiety Assessment (GAD-7)",desc:"Screen for anxiety symptoms.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
        {title:"Burnout Quiz",desc:"Burnout vs stress distinction.",href:"/mental-health/burnout-quiz",category:"mental-health"},
        {title:"Stress Level Test",desc:"Perceived Stress Scale.",href:"/mental-health/stress-level-test",category:"mental-health"},
      ]}>
      <AdhdCalc />
      <QuickAnswer answer="The ASRS is a WHO-validated screening tool for adult ADHD, not a diagnosis. It scores the six Part A questions by counting responses in shaded frequency zones: four or more is a positive screen. A positive result means a clinical evaluation is warranted, not that you have ADHD. Many symptoms overlap with anxiety, depression, sleep disorders, and burnout." />
      <SplitArticle content={content} injections={{
        0: <ReferenceTable title="ASRS Score Interpretation" emoji="📊"
          headers={["Part A Result", "Interpretation", "Recommended Next Step"]}
          rows={[
            ["0-3 shaded responses", "Low probability", "Evaluation not indicated unless other concerns exist"],
            ["4+ shaded responses", "Positive screen", "Schedule evaluation with a mental health professional"],
            ["High symptom frequency", "Strong positive", "Prioritize assessment with a psychiatrist or ADHD specialist"],
          ]}
          highlightRow={1}
        />,
        1: <Steps title="How the ASRS Is Scored" emoji="🧮" steps={[
          { heading: "Six Part A questions", text: "Each asks how often a symptom occurs over the past 6 months, on a five-point scale." },
          { heading: "Look for the shaded zone", text: "Certain frequency answers fall into a shaded box on the official form." },
          { heading: "Count the shaded responses", text: "Scoring is about how many answers land in the shaded zone, not a raw point total." },
          { heading: "Four or more is a positive screen", text: "This threshold best predicted a clinical ADHD diagnosis in validation research." },
          { heading: "The calculator does this for you", text: "You answer the frequency options and it computes the result automatically." },
        ]} />,
        4: <CompareColumns title="ADHD or Something Else?" emoji="🔍"
          yesTitle="Points toward ADHD"
          noTitle="Points toward a mimic"
          yesItems={[
            "Symptoms traceable to childhood",
            "Difficulty with boring tasks, hyperfocus on engaging ones",
            "Lifelong, consistent pattern",
            "Executive-function struggles across many areas",
          ]}
          noItems={[
            "Clear onset in adult life",
            "Concentration tied to worry (anxiety) or low mood (depression)",
            "Follows poor sleep, stress, or burnout",
            "Resolves when the other condition is treated",
          ]}
        />,
        6: <KeyFacts title="Adult ADHD at a Glance" emoji="📈" items={[
          { value: "2.5-5%", label: "Of adults estimated to have ADHD" },
          { value: "4+", label: "Shaded responses = positive ASRS screen" },
          { value: "68.7%", label: "ASRS Part A sensitivity" },
          { value: "99.5%", label: "ASRS Part A specificity" },
        ]} />,
      }} />
    </ToolPageShell>
  );
}
