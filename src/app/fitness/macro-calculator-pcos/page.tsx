import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { getArticleContent, getLastUpdated } from "@/lib/content";
import { TOOLS } from "@/lib/data";
import { PcosCalc } from "./PcosCalc";
export const metadata:Metadata={title:"PCOS Nutrition \u2014 Example Macro Planner",description:"Convert an illustrative adult maintenance estimate and example macro split into grams.",alternates:{canonical:"/fitness/macro-calculator-pcos"},
  openGraph: { type: "website", siteName: "ProHealthIt", title: "PCOS Nutrition — Example Macro Planner", description: "Convert an illustrative adult maintenance estimate and example macro split into grams.", url: "/fitness/macro-calculator-pcos", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"PCOS Nutrition — Example Macro Planner", description:"Convert an illustrative adult maintenance estimate and example macro split into grams.", images:["/og-image.png"]},
};
export default function Page(){return <ToolPageShell category="fitness" title={"PCOS Nutrition \u2014 Example Macro Planner"} description={"Convert an illustrative adult maintenance estimate and example macro split into grams."} lastUpdated={getLastUpdated("32-macro-calculator-pcos.md")} features={["Method and limits explained","Source links","Educational information"]} relatedTools={TOOLS.filter(t=>t.category==="fitness"&&t.slug!=="macro-calculator-pcos").slice(0,3).map(t=>({title:t.name,desc:t.desc,href:`/${t.category}/${t.slug}`,category:t.category}))}><PcosCalc/><QuickAnswer answer={"No single macro split is established as best for PCOS. This planner applies no PCOS-specific calorie reduction or subtype prescription."}/><SplitArticle content={getArticleContent("32-macro-calculator-pcos.md")}/></ToolPageShell>;}
