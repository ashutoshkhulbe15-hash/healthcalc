import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { MethodNotice } from "@/components/MethodNotice";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Body Frame Size Method Withdrawn",
  description: "The site's previous frame-size calculation has been withdrawn while its method and supporting source are reviewed.",
  alternates: { canonical: "/body-metrics/body-frame-size-calculator" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Body Frame Size Method Withdrawn", description: "The site's previous frame-size calculation has been withdrawn while its method and supporting source are reviewed.", url: "/body-metrics/body-frame-size-calculator", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Body Frame Size Method Withdrawn", description:"The site's previous frame-size calculation has been withdrawn while its method and supporting source are reviewed.", images:["/og-image.png"]},
};

export default function Page() {
  const file="28-body-frame-size-calculator.md";
  return <ToolPageShell lastUpdated={getLastUpdated(file)} category="body-metrics" title="Body Frame Size Method Withdrawn" description="The previous method and result have been removed pending verification." features={["Calculation withheld","Method under review"]} relatedTools={[]}>
    <MethodNotice><p>The site&apos;s previous body-frame calculation and related weight-adjustment guidance have been withdrawn because the page&apos;s table and calculator used different methods. No frame category or weight target is shown.</p></MethodNotice>
    <SplitArticle content={getArticleContent(file)} />
  </ToolPageShell>;
}
