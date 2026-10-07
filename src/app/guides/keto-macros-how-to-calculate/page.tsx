import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Keto Macro Calculator: Understanding the Arithmetic",
  description: "Learn what calorie-to-gram arithmetic in a macro calculator means, and why its output is not a ketogenic diet recommendation.",
  alternates: { canonical: "/guides/keto-macros-how-to-calculate" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Keto Macro Calculator: Understanding the Arithmetic", description: "Learn what calorie-to-gram arithmetic in a macro calculator means, and why its output is not a ketogenic diet recommendation.", url: "/guides/keto-macros-how-to-calculate", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Keto Macro Calculator: Understanding the Arithmetic", description:"Learn what calorie-to-gram arithmetic in a macro calculator means, and why its output is not a ketogenic diet recommendation.", images:["/og-image.png"]},
};

export default function Page() {
  const content = getArticleContent("guide-keto-macros.md");
  const lastUpdated = getLastUpdated("guide-keto-macros.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-keto-macros.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Keto Macro Calculator: Understanding the Arithmetic" subtitle="Calculator arithmetic does not establish a personal diet target or clinical suitability." readTime="8 min read" category="fitness" categoryLabel="Fitness" url="/guides/keto-macros-how-to-calculate"
      relatedTools={[
        {title:"Macro Calculator",desc:"Convert assumed calorie shares into grams.",href:"/fitness/macro-calculator",category:"fitness"},
        {title:"TDEE Calculator",desc:"Model-based estimate; not a personal dietary target.",href:"/fitness/tdee-calculator",category:"fitness"},
        {title:"Lean Body Mass Calculator",desc:"Boer equation estimate and study limits.",href:"/fitness/lean-body-mass-calculator",category:"fitness"},
      ]}>
      <QuickAnswer source={{href:"https://diabetesteachingcenter.ucsf.edu/living-diabetes/diet-nutrition",label:"UCSF: calorie factors and individual targets"}} answer="This calculator can convert user-entered percentages and calorie estimates to grams. Its output is arithmetic; it does not measure ketosis or recommend a ketogenic diet or personal macro target." />
      <SplitArticle content={content} />
    </BlogPageShell>
  );
}
