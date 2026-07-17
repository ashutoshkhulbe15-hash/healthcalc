import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { EpdsCalc } from "./EpdsCalc";
import { Steps, ReferenceTable, CompareColumns, KeyFacts } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "EPDS Postpartum Depression Screening & Score",
  description: "Free EPDS calculator with instant scoring. Learn how the Edinburgh scale is scored, what a score of 7, 9, 11, or 15 means, and PPD vs baby blues.",
  alternates: { canonical: "/mental-health/postpartum-depression-screening" },
};

export default function Page() {
  const content = getArticleContent("tool-postpartum-depression-screening.md");
  const lastUpdated = getLastUpdated("tool-postpartum-depression-screening.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="mental-health" title="Postpartum Depression Screening (EPDS)"
      description="The Edinburgh Postnatal Depression Scale screens for postpartum depression during the first year after delivery. A screening tool, not a diagnosis."
      features={["📋 EPDS validated tool", "📊 Instant score interpretation", "🤱 PPD vs baby blues", "📞 Crisis resources"]}
      relatedTools={[
        {title:"Anxiety Assessment (GAD-7)",desc:"Screen for anxiety symptoms.",href:"/mental-health/anxiety-self-assessment",category:"mental-health"},
        {title:"Burnout Quiz",desc:"Exhaustion assessment.",href:"/mental-health/burnout-quiz",category:"mental-health"},
        {title:"Sleep Quality Calculator",desc:"Sleep and mood connection.",href:"/mental-health/sleep-quality-calculator",category:"mental-health"},
      ]}>
      <EpdsCalc />
      <QuickAnswer answer="The EPDS is scored 0-3 per question across 10 questions, for a total of 0-30. Score bands: 0-8 PPD unlikely, 9-11 possible, 12-13 high possibility, 14+ probable. A score of 10+ is the common positive threshold. Any positive answer on the self-harm question (Q10) warrants immediate provider contact regardless of total. PPD affects about 1 in 7 mothers (ACOG)." />
      <SplitArticle content={content} injections={{
        0: <Steps title="How the EPDS Is Scored" emoji="🧮" steps={[
          { heading: "10 questions, 0-3 points each", text: "Every answer maps to a point value based on the past 7 days. Total range is 0 to 30." },
          { heading: "Most items score 0 to 3", text: "The first option is worth 0 points, the last is worth 3." },
          { heading: "Items 1, 2, and 4 are reverse-scored", text: "On these positively-worded items, the first option is worth 3 and the last is worth 0." },
          { heading: "Add all ten for your total", text: "The calculator does this automatically, including the reverse-scored items." },
        ]} />,
        1: <ReferenceTable title="EPDS Score Sheet & Interpretation" emoji="📊"
          headers={["Score", "Interpretation", "Recommended Action"]}
          rows={[
            ["0 - 8", "PPD not likely", "Routine follow-up at next visit"],
            ["9 - 11", "Possible PPD", "Schedule provider assessment"],
            ["12 - 13", "High possibility", "Prompt mental health evaluation"],
            ["14 - 30", "Probable PPD", "Timely professional assessment"],
            ["Q10 > 0", "Self-harm thoughts", "Contact provider immediately"],
          ]}
          highlightRow={1}
        />,
        2: <CompareColumns title="PPD vs Baby Blues" emoji="🤱"
          yesTitle="Baby Blues"
          noTitle="Postpartum Depression"
          yesItems={[
            "Affects 50-80% of new mothers",
            "Appears 2-5 days after delivery",
            "Resolves within 2 weeks on its own",
            "Mild mood swings and tearfulness",
          ]}
          noItems={[
            "Affects about 1 in 7 mothers",
            "Can develop any time in the first year",
            "Persists and worsens beyond 2 weeks",
            "Impairs daily functioning and infant care",
          ]}
        />,
        6: <KeyFacts title="Postpartum Depression at a Glance" emoji="📈" items={[
          { value: "1 in 7", label: "New mothers affected by PPD (ACOG)" },
          { value: "10+", label: "EPDS score treated as a positive screen" },
          { value: "8-10%", label: "New fathers who experience PPD" },
          { value: "87-100%", label: "EPDS sensitivity for major depression at 10+" },
        ]} />,
      }} />
    </ToolPageShell>
  );
}
