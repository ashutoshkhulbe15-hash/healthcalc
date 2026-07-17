import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BmiTeensCalc } from "./BmiTeensCalc";
import { KeyFacts, CompareColumns, Steps, ReferenceTable } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "BMI Calculator for Teens - CDC Percentiles",
  description: "Calculate BMI for teens aged 2-19 using CDC percentile charts. Healthy BMI ranges by age for boys and girls. Not the adult BMI scale.",
  alternates: { canonical: "/body-metrics/bmi-calculator-teens" },
};

export default function Page() {
  const content = getArticleContent("15-bmi-calculator-teens.md");
  const lastUpdated = getLastUpdated("15-bmi-calculator-teens.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="BMI Calculator for Teens"
      description="Calculate BMI for teens aged 2-19 using CDC growth charts. Results show age-and-sex-specific percentiles, not adult categories, because teen bodies are still developing."
      features={["📊 CDC percentile charts", "👦👧 Age and sex adjusted", "📈 Normal ranges by age", "📖 Parent and teen guide"]}
      relatedTools={[
        {title:"BMI Calculator (Adult)",desc:"Standard WHO-based BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"},
        {title:"TDEE Calculator for Teens",desc:"Daily calorie needs by age.",href:"/body-metrics/tdee-calculator-teens",category:"body-metrics"},
      ]}>
      <BmiTeensCalc />
      <QuickAnswer answer="Teen BMI uses CDC age-and-sex-specific percentiles, not the adult BMI scale. A BMI of 22 could be the 89th percentile (overweight) at age 12 and the 41st percentile (healthy) at age 18. Healthy weight falls between the 5th and 85th percentile for your exact age and sex." />
      <SplitArticle content={content} injections={{
        0: <KeyFacts title="BMI for Teens: Key Facts" emoji="📊" items={[
          { value: "2-19", label: "Age range" },
          { value: "CDC", label: "Growth charts" },
          { value: "5th-85th", label: "Healthy range" },
          { value: "Age+Sex", label: "Specific" },
        ]} />,
        2: <ReferenceTable title="CDC Percentile Categories" emoji="🔍" 
          headers={["Weight Status", "Percentile Range", "Meaning"]}
          rows={[
            ["Underweight", "Below 5th", "May indicate nutritional concern"],
            ["Healthy weight", "5th to 84th", "Normal range for age and sex"],
            ["Overweight", "85th to 94th", "Above average, monitor"],
            ["Obese", "95th or above", "Evaluation recommended"],
          ]}
        />,
        3: <CompareColumns title="Same BMI, Different Meaning by Age" emoji="🔄"
          yesTitle="BMI 22 is healthy at these ages"
          noTitle="BMI 22 is overweight at these ages"
          yesItems={[
            "15 year old girl: 58th percentile",
            "18 year old girl: 41st percentile",
            "17 year old boy: 48th percentile",
            "19 year old boy: 39th percentile",
          ]}
          noItems={[
            "12 year old girl: 89th percentile",
            "11 year old girl: 91st percentile",
            "12 year old boy: 85th percentile",
            "10 year old boy: 88th percentile",
          ]}
        />,
        5: <Steps title="What to Do With Your Result" emoji="📋" steps={[
          { heading: "Note your percentile category", text: "Healthy weight is 5th to 85th percentile. The category matters more than the raw BMI number." },
          { heading: "Compare to your own trend", text: "Ask your pediatrician to show your growth curve. Consistent tracking along YOUR curve is what matters." },
          { heading: "Talk to your doctor if concerned", text: "A percentile outside the healthy range warrants conversation, not panic. Your doctor evaluates the full picture." },
        ]} />,
      }} />
    </ToolPageShell>
  );
}
