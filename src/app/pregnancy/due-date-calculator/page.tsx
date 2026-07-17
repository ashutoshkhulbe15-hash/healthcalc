import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { DueDateCalc } from "./DueDateCalc";
import { TrimesterTimelineSVG, DueDateAccuracySVG } from "@/components/ArticleSVGs";
import { getArticleContent, getLastUpdated } from "@/lib/content";
export const metadata: Metadata = { title: "Due Date Calculator — Estimate Your Due Date", description: "Calculate your estimated due date based on your last menstrual period using Naegele's rule. Trimester timeline, accuracy of different dating methods, and when due dates change.", alternates: { canonical: "/pregnancy/due-date-calculator" } };
export default function Page() { const content = getArticleContent("02-due-date-calculator.md");
  const lastUpdated = getLastUpdated("02-due-date-calculator.md"); return (
  <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Due Date Calculator" description="Estimate your delivery date from your last menstrual period using Naegele's rule — the clinical standard per ACOG." features={["📅 Naegele's rule","📊 Trimester timeline","🔬 ACOG standard","📖 Evidence-based"]} relatedTools={[{title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},{title:"HCG Calculator",desc:"Track doubling time.",href:"/pregnancy/hcg-doubling-time-calculator",category:"pregnancy"},{title:"IVF Due Date",desc:"IVF-specific dating.",href:"/pregnancy/ivf-due-date-calculator",category:"pregnancy"}]}>
    <DueDateCalc />
    <QuickAnswer answer="According to ACOG, the estimated due date is 280 days (40 weeks) from the first day of your last menstrual period per Naegele's rule. Only about 5% of babies arrive on their exact due date per published obstetric data. The normal delivery range is 37-42 weeks. First-trimester ultrasound is accurate within ±5-7 days." />
    <SplitArticle content={content} injections={{ 2: <TrimesterTimelineSVG />, 3: <DueDateAccuracySVG /> }} />
  </ToolPageShell>); }
