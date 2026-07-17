import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { Steps, ReferenceTable, CompareColumns, WarningBox } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "8 DPO Pregnancy Test: Can You Get a Positive?",
  description: "At 8 DPO, average hCG is 0.06 mIU/mL, far below test detection. See hCG levels by DPO, test sensitivity, line progression, and when to actually test.",
  alternates: { canonical: "/guides/8-dpo-pregnancy-test" },
};

export default function Page() {
  const content = getArticleContent("guide-8-dpo-pregnancy-test.md");
  const lastUpdated = getLastUpdated("guide-8-dpo-pregnancy-test.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-8-dpo-pregnancy-test.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="8 DPO Pregnancy Test" subtitle="Can you get a positive pregnancy test at 8 days past ovulation? The science of early testing, hCG timing, and line progression." readTime="9 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/8-dpo-pregnancy-test"
      relatedTools={[
        {title:"HCG Doubling Calculator",desc:"Track early HCG rise.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},
        {title:"Ovulation Calculator",desc:"Pin down your DPO count.",href:"/pregnancy/ovulation-calculator",category:"pregnancy"},
        {title:"Due Date Calculator",desc:"Estimate your due date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="A positive at 8 DPO is biologically possible but statistically rare. Average hCG at 8 DPO is about 0.06 mIU/mL, far below the 25 mIU/mL detection threshold of standard tests. A negative at 8 DPO tells you almost nothing. For a reliable result, test at 12-14 DPO with first morning urine; if testing early, use FRER from 10 DPO and watch for line progression." />
      <SplitArticle content={content} injections={{
        1: <Steps title="From Ovulation to a Positive Test" emoji="⏱️" steps={[
          { heading: "Ovulation (Day 0)", text: "The egg is released into the fallopian tube. The DPO clock starts here." },
          { heading: "Fertilization (0-24 hrs)", text: "If sperm is present, a single-cell zygote forms and begins dividing." },
          { heading: "Travel (1-5 DPO)", text: "The dividing cluster moves down the tube, becoming a blastocyst." },
          { heading: "Implantation (6-12 DPO, peak 8-10)", text: "The blastocyst burrows into the uterine lining. Only now can hCG begin." },
          { heading: "hCG becomes detectable (48-72 hrs later)", text: "Levels must build for two to three days before any test can register them." },
        ]} />,
        2: <ReferenceTable title="Average hCG by DPO vs Test Detection" emoji="📊"
          headers={["DPO", "Typical hCG", "Detectable?"]}
          rows={[
            ["6 DPO", "~0.02 mIU/mL", "No"],
            ["8 DPO", "~0.06 mIU/mL", "No"],
            ["10 DPO", "~1-4 mIU/mL", "Rarely"],
            ["12 DPO", "~15-50 mIU/mL", "Sometimes"],
            ["14 DPO", "~50-100 mIU/mL", "Usually"],
            ["16 DPO", "~100-500 mIU/mL", "Yes"],
          ]}
          highlightRow={1}
        />,
        4: <CompareColumns title="Reading Your 8 DPO Result" emoji="🔍"
          yesTitle="A positive (BFP) means..."
          noTitle="A negative (BFN) means..."
          yesItems={[
            "hCG is genuinely present - meaningful even if faint",
            "Likely early implantation (6-7 DPO)",
            "Confirm with another test in 48 hours",
            "A darkening line supports a rising-hCG pregnancy",
          ]}
          noItems={[
            "Almost nothing either way",
            "Most pregnancies still read negative this early",
            "hCG simply has not built up yet",
            "Never make a decision based on an 8 DPO negative",
          ]}
        />,
        6: <WarningBox title="Symptoms at 8 DPO Cannot Confirm Pregnancy">
          <p>Progesterone is elevated in every luteal phase, pregnant or not, and it causes the same bloating, breast tenderness, fatigue, and cramping people read as pregnancy signs.</p>
          <p>The only sign with biological plausibility this early is a triphasic BBT pattern, and even that is a soft hint rather than proof.</p>
        </WarningBox>,
        7: <ReferenceTable title="Test Sensitivity: Earliest Realistic Positive" emoji="🧪"
          headers={["Test Type", "Threshold", "Earliest Positive"]}
          rows={[
            ["Standard store tests", "25 mIU/mL", "12-14 DPO"],
            ["FRER (First Response)", "6.3 mIU/mL", "10-12 DPO"],
            ["Wondfo / Easy@Home strips", "10-25 mIU/mL", "11-13 DPO"],
            ["Clearblue Digital", "25 mIU/mL", "12-14 DPO"],
            ["Blood test (β-hCG)", "1-2 mIU/mL", "9-10 DPO"],
          ]}
          highlightRow={1}
        />,
        8: <Steps title="When to Test, Depending on Your Goal" emoji="✅" steps={[
          { heading: "Earliest reliable positive", text: "10-11 DPO with FRER and first morning urine." },
          { heading: "Most accurate with standard tests", text: "14 DPO, the day of your expected period." },
          { heading: "If you cannot resist testing early", text: "Test at 10 DPO with FRER, then confirm at 12 and 14 DPO." },
          { heading: "If 14 DPO is negative but no period", text: "Retest at 16-17 DPO. Late ovulation shifts everything later." },
          { heading: "If you want certainty", text: "Ask your provider for a blood β-hCG, readable from about 9-10 DPO." },
        ]} />,
      }} />
    </BlogPageShell>
  );
}
