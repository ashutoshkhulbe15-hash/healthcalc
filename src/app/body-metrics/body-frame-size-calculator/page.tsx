import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { MethodNotice } from "@/components/MethodNotice";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Body Frame Size Reference and Limits",
  description: "Read the MedlinePlus wrist-and-height reference and its limits. No weight target or frame category is calculated.",
  alternates: { canonical: "/body-metrics/body-frame-size-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Body Frame Size Reference and Limits", description: "Read the MedlinePlus wrist-and-height reference and its limits. No weight target or frame category is calculated.", url: "/body-metrics/body-frame-size-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Body Frame Size Reference and Limits", description:"Read the MedlinePlus wrist-and-height reference and its limits. No weight target or frame category is calculated.", images:["/og-image.png"]},
};

export default function Page() {
  const file="28-body-frame-size-calculator.md";
  return <ToolPageShell lastUpdated={getLastUpdated(file)} category="body-metrics" title="Body Frame Size Reference and Limits" description="Wrist reference intervals, coverage limits and a distinction from weight targets." features={["Calculation withheld","MedlinePlus reference"]} relatedTools={[]}>
    <MethodNotice><p>The site&apos;s previous body-frame calculation and related weight-adjustment guidance have been withdrawn because the page&apos;s table and calculator used different methods. No frame category or weight target is calculated. <a className="underline" href="https://medlineplus.gov/ency/imagepages/17182.htm">MedlinePlus reference</a></p></MethodNotice>
    <SplitArticle content={getArticleContent(file)} />
  </ToolPageShell>;
}
