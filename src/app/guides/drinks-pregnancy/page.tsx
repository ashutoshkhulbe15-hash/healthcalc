import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ReferenceTable, CompareColumns, WarningBox, KeyFacts } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Drinks During Pregnancy: Caffeine & Tea Guide",
  description: "Caffeine limits in pregnancy, green tea and EGCG, chai, which herbal teas are safe, kombucha, soda, and why ACOG says avoid energy drinks entirely.",
  alternates: { canonical: "/guides/drinks-pregnancy" },
};

export default function Page() {
  const content = getArticleContent("guide-drinks-pregnancy.md");
  const lastUpdated = getLastUpdated("guide-drinks-pregnancy.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-drinks-pregnancy.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Drinks During Pregnancy"
      subtitle="Caffeine budgets, which herbal teas are safe, and the drinks worth skipping. Every common beverage covered."
      readTime="11 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/drinks-pregnancy"
      relatedTools={[
        {title:"Coffee During Pregnancy",desc:"The full caffeine breakdown.",href:"/pregnancy/safe-food/coffee",category:"pregnancy"},
        {title:"Safe Food Checker",desc:"Search any food or drink.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Alcohol During Pregnancy",desc:"What the evidence says.",href:"/pregnancy/safe-food/alcohol",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="ACOG advises under 200mg caffeine daily, counted across all sources. Green tea (1-2 cups), chai (1-2 cups), and moderate soda are considered safe. Safe herbal teas: ginger, peppermint, rooibos, lemon balm. Avoid: pennyroyal, dong quai, cohosh, mugwort, unpasteurized juice, homebrew kombucha, and energy drinks (ACOG says avoid entirely, not just limit)." />
      <SplitArticle content={content} injections={{
        0: <ReferenceTable title="Caffeine by Drink vs the 200mg Limit" emoji="☕"
          headers={["Drink", "Serving", "Caffeine", "% of 200mg budget"]}
          rows={[
            ["Brewed coffee", "12 oz", "120-140 mg", "60-70%"],
            ["Black tea", "8 oz", "40-70 mg", "20-35%"],
            ["Chai latte (large)", "16 oz", "~95 mg", "~48%"],
            ["Matcha", "1 tsp", "60-70 mg", "30-35%"],
            ["Green tea", "8 oz", "25-50 mg", "13-25%"],
            ["Chai (homemade/bag)", "8 oz", "25-60 mg", "13-30%"],
            ["Cola", "12 oz", "35-45 mg", "18-23%"],
            ["Mountain Dew", "12 oz", "54 mg", "27%"],
            ["Kombucha", "8 oz", "15-30 mg", "8-15%"],
            ["Decaf green tea", "8 oz", "2-5 mg", "~2%"],
            ["Dirty chai (2 shots)", "16 oz", "~220 mg", "Over limit"],
          ]}
          highlightRow={10}
        />,
        3: <CompareColumns title="Herbal Teas: Safe vs Avoid" emoji="🌿"
          yesTitle="Generally considered safe (1-3 cups)"
          noTitle="Avoid during pregnancy"
          yesItems={[
            "Ginger - ACOG-supported for nausea",
            "Peppermint - nausea and digestion",
            "Rooibos - caffeine-free, antioxidant-rich",
            "Lemon balm - mild calming effect",
            "Chamomile & raspberry leaf - probably safe in moderation",
          ]}
          noItems={[
            "Pennyroyal - uterine contractions, liver toxicity",
            "Dong quai - uterine stimulant",
            "Blue & black cohosh - uterine stimulant",
            "Mugwort - uterine stimulant",
            "Excessive licorice root - linked to preterm delivery",
          ]}
        />,
        6: <WarningBox title="Why ACOG Says Avoid Energy Drinks Entirely">
          <p>This is not a limit-your-intake situation like coffee. Energy drinks add guarana (a caffeine source at ~40mg per gram, often uncounted on the label, so a can listing 150mg may deliver 200-250mg), taurine at 1,000-2,000mg per can, ginseng, and B-vitamin megadoses.</p>
          <p>None of these have adequate pregnancy safety data. Sugar-free versions carry identical concerns, since removing sugar does not remove the stimulants.</p>
        </WarningBox>,
        8: <KeyFacts title="Drinks at a Glance" emoji="💧" items={[
          { value: "200 mg", label: "ACOG daily caffeine ceiling, all sources" },
          { value: "1-2 cups", label: "Green tea or chai considered safe daily" },
          { value: "27 mg", label: "Daily iron need - keep tea away from it" },
          { value: "~50%", label: "Blood volume increase - water matters" },
        ]} />,
      }} />
    </BlogPageShell>
  );
}
