import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { DeliMeatSafetySVG, DeliMeatTypesSVG, ListeriaSVG } from "@/components/ArticleSVGs";
import { getArticleContent } from "@/lib/content";
export const metadata: Metadata = {
  title: "Can I Eat Deli Meats During Pregnancy? Listeria Safety Guide",
  description: "Deli meats must be heated to steaming (165°F) during pregnancy due to Listeria risk. Turkey, ham, salami safety guide with heating methods.",
  alternates: { canonical: "/pregnancy/safe-food/deli-meats" },
};
export default function Page() {
  const content = getArticleContent("food-deli-meats.md");
  return (
    <ToolPageShell category="pregnancy" title="Can I Eat Deli Meats During Pregnancy?"
      description="Evidence-based guide to deli meat safety. Listeria risks, three safe heating methods, and which meats carry higher risk."
      features={["🥪 Safety guide","🌡️ Heating methods","🦠 Listeria prevention","📖 Evidence-based"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Hot Dogs Guide",desc:"Similar Listeria risk.",href:"/pregnancy/safe-food/hot-dogs",category:"pregnancy"},
        {title:"Weight Gain Calculator",desc:"Track pregnancy weight.",href:"/pregnancy/weight-gain-calculator",category:"pregnancy"},
      ]} relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Deli meats (turkey, ham, roast beef, salami) must be heated to steaming hot (165°F) before eating during pregnancy. Never eat cold cuts straight from the package — Listeria can contaminate deli meats during slicing even when the meat was originally cooked." />
      <SplitArticle content={content} injections={{
        1: <ListeriaSVG />,
        2: <DeliMeatSafetySVG />,
        3: <DeliMeatTypesSVG />,
      }} />
    </ToolPageShell>
  );
}
