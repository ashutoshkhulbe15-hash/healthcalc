import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "What A1C Level Is in the Diabetes Range?",
  description: "NIDDK A1C ranges for nonpregnant people, confirmation requirements, and situations that may affect interpretation.",
  alternates: { canonical: "/guides/what-a1c-is-diabetic" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "What A1C Level Is in the Diabetes Range?", description: "NIDDK A1C ranges for nonpregnant people, confirmation requirements, and situations that may affect interpretation.", url: "/guides/what-a1c-is-diabetic", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"What A1C Level Is in the Diabetes Range?", description:"NIDDK A1C ranges for nonpregnant people, confirmation requirements, and situations that may affect interpretation.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("guide-what-a1c-is-diabetic.md");
  const lastUpdated = getLastUpdated("guide-what-a1c-is-diabetic.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-what-a1c-is-diabetic.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="What A1C Level Is in the Diabetes Range?" subtitle="Diagnostic ranges, confirmatory testing and test limitations for nonpregnant people."
      readTime="3 min" category="conditions" categoryLabel="Health Guide"
      relatedTools={[
        {title:"A1C Converter",desc:"Convert A1C to glucose.",href:"/conditions/a1c-blood-sugar-converter",category:"conditions"},
        {title:"Blood Sugar Tests",desc:"Diagnostic thresholds and protocol differences.",href:"/guides/blood-sugar-levels-by-age",category:"conditions"},
        {title:"BMI Calculator",desc:"Check your BMI.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},
      ]} url="/guides/what-a1c-is-diabetic">
      <QuickAnswer answer="For nonpregnant people, NIDDK lists A1C below 5.7% as normal, 5.7–6.4% as prediabetes and 6.5% or above as in the diabetes range. In the absence of clear symptoms, confirmatory testing is required. These criteria are not personal treatment targets." />
      <SplitArticle content={content} />
    </BlogPageShell>
  );
}
