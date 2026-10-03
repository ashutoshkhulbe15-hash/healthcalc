import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { MethodNotice } from "@/components/MethodNotice";

export const metadata: Metadata = {
  title: "One-repetition maximum estimate information",
  description: "The estimated one-repetition maximum calculator is temporarily unavailable while its equation sources and applicability are reviewed.",
  alternates: { canonical: "/fitness/one-rep-max-calculator" },
};

export default function Page() {
  const article = "19-one-rep-max-calculator.md";
  return (
    <ToolPageShell lastUpdated={getLastUpdated(article)} category="fitness" title="One-repetition maximum estimate information"
      description="The estimator is temporarily unavailable while its source methods are reviewed."
      features={["Source review in progress"]} relatedTools={[]}>
      <MethodNotice><p>The calculator and training chart are unavailable while the formula sources and their applicable populations are checked. No load or exercise recommendation is provided.</p></MethodNotice>
      <SplitArticle content={getArticleContent(article)} />
    </ToolPageShell>
  );
}
