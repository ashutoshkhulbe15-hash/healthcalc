import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { BloodSugarRangesSVG, BloodSugarByAgeSVG, A1CRangesSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blood Sugar Levels by Age — Normal Ranges Chart",
  description: "Normal blood sugar ranges by age group: children, teens, adults, seniors, and pregnancy. Fasting, post-meal, and A1C values with ADA diagnostic thresholds. Complete reference chart.",
  alternates: { canonical: "/guides/blood-sugar-levels-by-age" },
};

export default function Page() {
  const content = getArticleContent("guide-blood-sugar-levels-by-age.md");
  const lastUpdated = getLastUpdated("guide-blood-sugar-levels-by-age.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-blood-sugar-levels-by-age.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Blood Sugar Levels Chart by Age" subtitle="Normal blood sugar ranges by age — fasting, post-meal, and A1C."
      readTime="10 min" category="conditions" categoryLabel="Health Guide"
      relatedTools={[
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
        {title:"GFR Calculator",desc:"Kidney function.",href:"/conditions/gfr-calculator",category:"conditions"},
      ]} url="/guides/blood-sugar-levels-by-age">
      <QuickAnswer answer="Normal fasting blood sugar is under 100 mg/dL. Prediabetes is 100-125. Diabetes is 126+. A1C under 5.7% is normal. These ranges shift slightly with age — older adults naturally have higher baselines." />
      <SplitArticle content={content} injections={{
        1: <BloodSugarRangesSVG />,
        2: <BloodSugarByAgeSVG />,
        7: <A1CRangesSVG />,
      }} />
    </BlogPageShell>
  );
}
