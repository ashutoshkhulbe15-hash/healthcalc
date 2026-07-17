import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { PregnancyWeightGainCalc } from "./PregnancyWeightGainCalc";
import { ReferenceTable, KeyFacts, Steps, WarningBox } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator & Chart",
  description: "Track pregnancy weight gain week by week against IOM guidelines. Weight gain chart by BMI in kg and lbs, trimester breakdown, and twin pregnancy ranges.",
  alternates: { canonical: "/pregnancy/weight-gain-calculator" },
};

export default function Page() {
  const content = getArticleContent("01-pregnancy-weight-gain-calculator.md");
  const lastUpdated = getLastUpdated("01-pregnancy-weight-gain-calculator.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Pregnancy Weight Gain Calculator"
      description="Track your weight gain week by week against IOM guidelines, with a BMI-adjusted chart in kg and lbs."
      features={["📊 Weight gain chart by week", "📋 IOM 2009 guidelines", "👶 Twin support", "📖 Evidence-based guide"]}
      relatedTools={[
        {title:"Due Date Calculator",desc:"Find your delivery date.",href:"/pregnancy/due-date-calculator",category:"pregnancy"},
        {title:"Safe Food Checker",desc:"Is this food safe?",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Fetal Weight Percentile",desc:"Track baby's growth.",href:"/pregnancy/fetal-weight-percentile",category:"pregnancy"},
      ]}>
      <PregnancyWeightGainCalc />
      <QuickAnswer answer="Healthy pregnancy weight gain depends on your pre-pregnancy BMI: 25-35 lbs (11.5-16 kg) for normal weight, 15-25 lbs for overweight, 28-40 lbs for underweight, and 11-20 lbs for obese. Enter your details above to track week by week against IOM guidelines." />
      <SplitArticle content={content} injections={{
        0: <ReferenceTable title="Pregnancy Weight Gain Chart by BMI (IOM)" emoji="📊"
          headers={["Pre-pregnancy BMI", "Total Gain (kg)", "Total Gain (lbs)", "Weekly (2nd/3rd tri)"]}
          rows={[
            ["Underweight (< 18.5)", "12.5 - 18", "28 - 40", "~0.5 kg/wk"],
            ["Normal (18.5 - 24.9)", "11.5 - 16", "25 - 35", "~0.4 kg/wk"],
            ["Overweight (25 - 29.9)", "7 - 11.5", "15 - 25", "~0.3 kg/wk"],
            ["Obese (>= 30)", "5 - 9", "11 - 20", "~0.2 kg/wk"],
          ]}
          highlightRow={1}
        />,
        2: <Steps title="How to Use the Tracker" emoji="📝" steps={[
          { heading: "Enter your height", text: "In feet/inches or cm. This sets your pre-pregnancy BMI category." },
          { heading: "Enter pre-pregnancy weight", text: "Your starting weight, or your weight at the first prenatal visit. This is the anchor for every calculation." },
          { heading: "Enter current weight and week", text: "The tool places you on the IOM curve for your gestational week." },
          { heading: "Check the multiple-pregnancy box if twins", text: "This shifts your target range upward using the IOM twin guidelines." },
          { heading: "Read the trend, not the day", text: "Some weeks you gain more, some less. The overall trajectory is what matters." },
        ]} />,
        3: <KeyFacts title="Gain by Trimester at a Glance" emoji="👶" items={[
          { value: "1-4 lbs", label: "Typical first trimester total" },
          { value: "~40%", label: "Share of total gain in 2nd trimester" },
          { value: "~0.4 kg", label: "Weekly gain, 2nd/3rd (normal BMI)" },
          { value: "~2/3", label: "Of gain is baby, fluid, and tissue - not fat" },
        ]} />,
        7: <WarningBox title="When to Call Your Provider">
          <p>A sudden gain over 1 kg (2.2 lbs) in one week after week 20, especially with facial or hand swelling, headache, or vision changes, can signal preeclampsia. Call the same day.</p>
          <p>Also flag persistent weight loss after the first trimester, or gaining well outside your IOM range week after week.</p>
        </WarningBox>,
      }} />
    </ToolPageShell>
  );
}
