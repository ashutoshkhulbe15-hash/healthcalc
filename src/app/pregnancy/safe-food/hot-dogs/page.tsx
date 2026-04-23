import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { HotDogTempSVG, ProcessedMeatRisksSVG, ListeriaSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Hot Dogs During Pregnancy? Listeria Safety Guide",
  description: "Hot dogs must be heated to steaming (165°F) during pregnancy. Listeria risk, safe preparation methods, and nutritional considerations explained.",
  alternates: { canonical: "/pregnancy/safe-food/hot-dogs" },
};
export default function Page() {
  const content = getArticleContent("food-hot-dogs.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Hot Dogs During Pregnancy?"
      description="Evidence-based guide to hot dog safety. Listeria risk, proper heating methods, and how to eat processed meats safely."
      features={["🌭 Safety guide","🌡️ Heating methods","🦠 Listeria prevention","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Deli Meats Guide",desc:"Similar risks and rules.",href:"/pregnancy/safe-food/deli-meats",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Hot dogs are safe during pregnancy ONLY when heated to steaming hot (165°F/74°C). Never eat them cold from the package — Listeria can survive in pre-cooked, refrigerated meats. Boil, grill, or microwave until steaming." />
      <SplitArticle content={content} injections={{
        1: <ListeriaSVG />,
        2: <HotDogTempSVG />,
        3: <ProcessedMeatRisksSVG />,
      }} />
    </ToolPageShell>
  );
}
