import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";
export const metadata: Metadata = { title: "Understanding Total Daily Energy Expenditure", description: "The components of daily energy expenditure and the limits of predictive equations.", alternates: { canonical: "/blog/understanding-tdee-complete-guide" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Understanding Total Daily Energy Expenditure", description: "The components of daily energy expenditure and the limits of predictive equations.", url: "/blog/understanding-tdee-complete-guide", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Understanding Total Daily Energy Expenditure", description:"The components of daily energy expenditure and the limits of predictive equations.", images:["/og-image.png"]},
};
export default function Page() { const content = getArticleContent("36-understanding-tdee-complete-guide.md");
  const lastUpdated = getLastUpdated("36-understanding-tdee-complete-guide.md");
  const lastUpdatedISO = getLastUpdatedISO("36-understanding-tdee-complete-guide.md"); return (
  <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Understanding Total Daily Energy Expenditure" subtitle="How resting energy, food processing and physical activity contribute to daily total energy use." readTime="3 min" category="fitness" categoryLabel="Fitness" relatedTools={[{title:"TDEE Calculator",desc:"Model-based total-energy estimate.",href:"/fitness/tdee-calculator",category:"fitness"},{title:"BMR Calculator",desc:"Resting-energy equation estimate.",href:"/body-metrics/bmr-calculator",category:"body-metrics"},{title:"Calorie difference tool",desc:"Arithmetic from user-entered estimates.",href:"/fitness/calorie-deficit-calculator",category:"fitness"}]} url="/blog/understanding-tdee-complete-guide">
    <QuickAnswer answer="Total daily energy expenditure includes resting energy, the thermic effect of food and physical activity. The relative contributions vary. Predictive equations and activity factors estimate energy use; they do not directly measure an individual's daily requirement." />
    <SplitArticle content={content} />
  </BlogPageShell>); }
