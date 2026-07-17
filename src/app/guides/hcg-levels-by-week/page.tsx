import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ReferenceTable, KeyFacts, WarningBox, CompareColumns } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "HCG Levels by Week: Normal Ranges & Chart",
  description: "Normal hCG levels by week from 3-40 weeks, plus a week-by-week chart, doubling time, day-by-day context, and when beta hCG results are concerning.",
  alternates: { canonical: "/guides/hcg-levels-by-week" },
};

export default function Page() {
  const content = getArticleContent("guide-hcg-levels-by-week.md");
  const lastUpdated = getLastUpdated("guide-hcg-levels-by-week.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-hcg-levels-by-week.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="HCG Levels by Week" subtitle="What your pregnancy blood test numbers actually mean, and why the doubling trend matters more than any single value." readTime="9 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/hcg-levels-by-week"
      relatedTools={[
        {title:"HCG Doubling Calculator",desc:"Calculate your HCG doubling time.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Find your estimated delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Ovulation Calculator",desc:"Track your fertile window.",href:"/pregnancy/ovulation-calculator",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="hCG levels vary enormously between healthy pregnancies. At 6 weeks, normal ranges span 1,080 to 56,500 mIU/mL, so a single number tells you almost nothing. The doubling trend, roughly every 48-72 hours in early pregnancy, is what your provider uses to assess viability." />
      <SplitArticle content={content} injections={{
        0: <ReferenceTable title="Normal hCG Ranges by Week (LMP)" emoji="📊"
          headers={["Week (LMP)", "hCG Range (mIU/mL)", "Doubling Time"]}
          rows={[
            ["3 weeks", "5 - 50", "n/a"],
            ["4 weeks", "5 - 426", "Every 48-72 hrs"],
            ["4-5 weeks", "18 - 7,340", "Every 48-72 hrs"],
            ["5-6 weeks", "1,080 - 56,500", "Every 48-72 hrs"],
            ["7-8 weeks", "25,000 - 288,000", "Every 72-96 hrs"],
            ["9-12 weeks", "68,000 - 680,000", "Peaks ~10-11 wks"],
            ["13-16 weeks", "10,000 - 100,000", "Declining"],
            ["17-25 weeks", "4,060 - 165,400", "Declining"],
            ["25-40 weeks", "3,640 - 117,000", "Stable, low"],
          ]}
          highlightRow={3}
        />,
        3: <KeyFacts title="hCG Doubling at a Glance" emoji="⏱️" items={[
          { value: "48-72 hrs", label: "Doubling time before 1,200 mIU/mL" },
          { value: "72-96 hrs", label: "Doubling time above 1,200 mIU/mL" },
          { value: "50%+", label: "Healthy rise every 48 hours" },
          { value: "10-11 wk", label: "When hCG typically peaks" },
        ]} />,
        4: <WarningBox title="hCG Patterns That Warrant a Closer Look">
          <p>A rise below 35% in 48 hours, or a plateau or decline before 8 to 10 weeks, can signal a non-viable or ectopic pregnancy. None of these is diagnostic on its own.</p>
          <p>Your provider confirms with serial draws 48 to 72 hours apart plus ultrasound. Rising hCG with severe one-sided pain, bleeding, or dizziness is an emergency: seek care immediately.</p>
        </WarningBox>,
        7: <CompareColumns title="Twins vs Singleton hCG" emoji="👶"
          yesTitle="What hCG can suggest"
          noTitle="What hCG cannot do"
          yesItems={[
            "Twins average 30-50% higher hCG",
            "Very high values may prompt an earlier scan",
            "A faster rise can hint at multiples",
          ]}
          noItems={[
            "Confirm twins - the overlap is huge",
            "Rule out a high-producing singleton",
            "Replace ultrasound, which confirms sacs by 6-7 weeks",
          ]}
        />,
      }} />
    </BlogPageShell>
  );
}
