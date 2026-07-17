import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CompareColumns, WarningBox, ReferenceTable, KeyFacts } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Everyday Foods in Pregnancy: Myths vs Facts",
  description: "Pineapple, papaya, honey, tofu, chocolate, spicy food, hummus and more. Which pregnancy food fears are myths and which cautions are backed by the FDA.",
  alternates: { canonical: "/guides/everyday-foods-pregnancy" },
};

export default function Page() {
  const content = getArticleContent("guide-everyday-foods-pregnancy.md");
  const lastUpdated = getLastUpdated("guide-everyday-foods-pregnancy.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-everyday-foods-pregnancy.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Everyday Foods in Pregnancy"
      subtitle="Fruits, sweets and pantry staples: the myths worth dropping, and the few cautions that are genuinely real."
      readTime="11 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/everyday-foods-pregnancy"
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search any food.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Drinks During Pregnancy",desc:"Caffeine and tea guide.",href:"/guides/drinks-pregnancy",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Evidence-based eating.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="Most everyday food fears are myths. Pineapple, ripe papaya, honey, tofu, chocolate, spicy food, yogurt, store-bought mayo and commercial ice cream are all considered safe. The genuine cautions are narrow: raw sprouts (FDA warning), green papaya, raw-egg mayonnaise or ice cream, machine soft-serve, and deli-counter hummus." />
      <SplitArticle content={content} injections={{
        0: <CompareColumns title="Myths vs Real Cautions" emoji="🍍"
          yesTitle="Considered safe (the myths)"
          noTitle="Genuine cautions"
          yesItems={[
            "Pineapple - bromelain myth, would need 7-10 whole fruits",
            "Honey - botulism risk is infants under 12 months only",
            "Tofu & soy - phytoestrogen worry unsupported at food levels",
            "Chocolate - just count the caffeine",
            "Spicy food - heartburn only, no fetal risk",
          ]}
          noItems={[
            "Raw sprouts - specific FDA warning, washing does not help",
            "Green/unripe papaya - papain latex",
            "Homemade mayo or ice cream with raw eggs",
            "Machine soft-serve - Listeria in dispensers",
            "Deli-counter or salad-bar hummus",
          ]}
        />,
        3: <WarningBox title="Raw Sprouts: Why Washing Does Not Work">
          <p>Bacteria can live inside the seed before sprouting begins, so rinsing the finished sprout cannot reach them. The warm, humid sprouting process then multiplies whatever is present by millions.</p>
          <p>The FDA warns against all raw sprouts (alfalfa, clover, radish, mung bean). Homegrown carries the same risk since the problem starts with the seed. Cooked sprouts in hot dishes are considered safe.</p>
        </WarningBox>,
        5: <ReferenceTable title="Caffeine in Chocolate" emoji="🍫"
          headers={["Type", "Per 1 oz", "Typical bar (1.5 oz)", "% of 200mg limit"]}
          rows={[
            ["Dark chocolate (70%+)", "20-30 mg", "30-45 mg", "15-23%"],
            ["Dark chocolate (50-69%)", "12-20 mg", "18-30 mg", "9-15%"],
            ["Milk chocolate", "5-10 mg", "8-15 mg", "4-8%"],
            ["White chocolate", "0-2 mg", "0-3 mg", "~0%"],
            ["One square of dark (~10g)", "6-8 mg", "n/a", "3-4%"],
          ]}
          highlightRow={4}
        />,
        8: <KeyFacts title="Nutrition Standouts in This Group" emoji="🥣" items={[
          { value: "15-20 g", label: "Protein per cup of Greek yogurt" },
          { value: "10 g", label: "Protein per half cup of tofu" },
          { value: "200 mg", label: "Calcium per cup of Greek yogurt" },
          { value: "4 g", label: "Plant protein per hummus serving, plus folate & iron" },
        ]} />,
      }} />
    </BlogPageShell>
  );
}
