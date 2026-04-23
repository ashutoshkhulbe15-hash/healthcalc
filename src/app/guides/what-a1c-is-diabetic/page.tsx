import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { A1CRangesSVG, DPPStudySVG, BloodSugarRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "What A1C Level Is Considered Diabetic?",
  description: "Understand A1C ranges — normal, prediabetes, and diabetes thresholds. What your A1C means and what to do if it is high.",
  alternates: { canonical: "/guides/what-a1c-is-diabetic" },
};

export default function Page() {
  const content = getArticleContent("guide-what-a1c-is-diabetic.md");
  return (
    <BlogPageShell title="What A1C Level Is Considered Diabetic?" subtitle="A1C ranges explained — normal, prediabetes, diabetes, and what to do."
      readTime="9 min" category="conditions" categoryLabel="Health Guide"
      relatedTools={[
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"Blood Sugar Guide",desc:"Levels by age.",href:"/guides/blood-sugar-levels-by-age",category:"conditions"},
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
      ]} url="/guides/what-a1c-is-diabetic">
      <QuickAnswer answer="A1C of 6.5% or higher on two separate tests = diabetes. A1C of 5.7-6.4% = prediabetes (reversible with lifestyle changes). Below 5.7% = normal. A1C reflects your 2-3 month average blood sugar, not a single-day snapshot." />
      <SplitArticle content={content} injections={{
        1: <A1CRangesSVG />,
        3: <DPPStudySVG />,
        4: <BloodSugarRangesSVG />,
      }} />
    </BlogPageShell>
  );
}
