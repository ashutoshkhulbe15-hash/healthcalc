import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { FrameSizeCalc } from "./FrameSizeCalc";
import { FrameSizeChartSVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Body Frame Size Calculator — NIH Method", description: "Determine your body frame size (small, medium, large) using wrist circumference or elbow breadth. NIH reference chart. Adjusts ideal weight by ±10%.", alternates: { canonical: "/body-metrics/body-frame-size-calculator" } };
export default function Page() { const content = getArticleContent("28-body-frame-size-calculator.md");
  const lastUpdated = getLastUpdated("28-body-frame-size-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="body-metrics" title="Body Frame Size Calculator" description="Determine your frame size using the NIH wrist measurement method. Adds context to BMI and ideal weight calculations." features={["📏 NIH wrist method","📊 Frame classification","🔬 Health metric context","📖 Evidence-based guide"]} relatedTools={[{title:"Ideal Weight",desc:"Four formulas compared.",href:"/body-metrics/ideal-weight-calculator",category:"body-metrics"},{title:"BMI Calculator",desc:"Standard BMI check.",href:"/body-metrics/bmi-calculator",category:"body-metrics"},{title:"Body Fat Calculator",desc:"Navy method estimation.",href:"/fitness/body-fat-calculator",category:"fitness"}]}>
    <FrameSizeCalc />
    <QuickAnswer answer="Body frame size is determined by bone structure, primarily wrist circumference per NIH standards. Small frame: wrist under 5.5 in (women) / 6.5 in (men). Medium: 5.5-5.75 / 6.5-7.5. Large: over 5.75 / 7.5. Frame size explains why two people of the same height may have different healthy weight ranges." />
    <SplitArticle content={content} injections={{ 2: <FrameSizeChartSVG /> }} />
  </ToolPageShell>); }
