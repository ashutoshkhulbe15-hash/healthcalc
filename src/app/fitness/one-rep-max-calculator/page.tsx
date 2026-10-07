import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { MethodNotice } from "@/components/MethodNotice";

export const metadata: Metadata = {
  title: "One-repetition maximum estimate information",
  description: "Read published one-repetition maximum equations, worked arithmetic and study population limits. No active estimator or training prescription.",
  openGraph: { url: "/fitness/one-rep-max-calculator" },
  alternates: { canonical: "/fitness/one-rep-max-calculator" },
};

export default function Page() {
  const article = "19-one-rep-max-calculator.md";
  return (
    <ToolPageShell lastUpdated={getLastUpdated(article)} category="fitness" title="One-repetition maximum estimate information"
      description="Published equations, worked arithmetic and study population limits; no active estimator."
      features={["Published coefficients and limits"]} relatedTools={[]}>
      <MethodNotice><p>The calculator and training chart remain unavailable. The article explains source-checked equation coefficients and their population limits; it does not provide a load or exercise recommendation.</p></MethodNotice>
      <SplitArticle content={getArticleContent(article)} />
    </ToolPageShell>
  );
}
