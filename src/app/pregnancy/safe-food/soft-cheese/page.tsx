import type { Metadata } from "next";
import { ToolPageShell } from "@/components/ToolPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CompareColumns, ReferenceTable, WarningBox, Steps } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated } from "@/lib/content";

export const metadata: Metadata = {
  title: "Soft Cheese During Pregnancy: Safe or Not?",
  description: "Pasteurized soft cheese (brie, feta, mozzarella, cream cheese) is considered safe in pregnancy. Unpasteurized carries Listeria risk. Cheese-by-cheese guide.",
  alternates: { canonical: "/pregnancy/safe-food/soft-cheese" },
};

export default function Page() {
  const content = getArticleContent("food-soft-cheese.md");
  const lastUpdated = getLastUpdated("food-soft-cheese.md");
  return (
    <ToolPageShell lastUpdated={lastUpdated} category="pregnancy" title="Can I Eat Soft Cheese During Pregnancy?"
      description="Pasteurized soft cheese is considered safe. Unpasteurized soft cheese carries Listeria risk. Hard cheeses are considered safe regardless."
      features={["🧀 Cheese-by-cheese chart", "📋 Label checking guide", "⚠️ Listeria explained", "🔵 Blue cheese covered"]}
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search more foods.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Pre-Made Salads",desc:"Another Listeria risk food.",href:"/pregnancy/safe-food/pre-made-salads",category:"pregnancy"},
        {title:"Pregnancy Nutrition Guide",desc:"Evidence-based eating guide.",href:"/blog/pregnancy-nutrition-guide",category:"pregnancy"},
      ]}
      relatedHeading="More Pregnancy Tools">
      <QuickAnswer answer="Pasteurized soft cheese (brie, feta, camembert, ricotta, mozzarella, cream cheese) is considered safe during pregnancy. Check the label for &quot;made from pasteurized milk.&quot; Unpasteurized soft cheese carries Listeria risk and should be avoided. Hard cheeses (cheddar, parmesan, Swiss, gruyere) are considered safe regardless of pasteurization." />
      <SplitArticle content={content} injections={{
        0: <CompareColumns title="Soft Cheese: Safe vs Avoid" emoji="🧀"
          yesTitle="Considered safe"
          noTitle="Avoid"
          yesItems={[
            "Any soft cheese labeled pasteurized",
            "Brie, feta, mozzarella, ricotta, cream cheese (pasteurized)",
            "All hard cheeses (cheddar, parmesan, Swiss, gruyere)",
            "Soft cheese cooked until steaming hot",
          ]}
          noItems={[
            "Any soft cheese made from unpasteurized (raw) milk",
            "Imported or artisanal cheese with no pasteurization label",
            "Farmers market or farm-made soft cheeses, unless verified",
            "Uncooked mold-ripened blue cheese unless pasteurized",
          ]}
        />,
        1: <ReferenceTable title="Cheese-by-Cheese Pregnancy Guide" emoji="📋"
          headers={["Cheese", "Usually pasteurized (US)?", "Verdict"]}
          rows={[
            ["Brie", "Yes (commercial)", "Safe if pasteurized"],
            ["Feta", "Yes (commercial)", "Safe if pasteurized"],
            ["Mozzarella (fresh)", "Yes", "Safe if pasteurized"],
            ["Mozzarella (shredded/string)", "Yes", "Considered safe"],
            ["Ricotta", "Almost always", "Safe if pasteurized"],
            ["Cream cheese", "Almost always", "Considered safe"],
            ["Cottage cheese", "Almost always", "Considered safe"],
            ["Goat cheese (chevre)", "Varies", "Check label"],
            ["Blue cheese", "Varies", "Safest cooked + pasteurized"],
            ["Camembert", "Yes (commercial)", "Safe if pasteurized"],
            ["Parmesan / Parmigiano", "Hard aged cheese", "Safe regardless"],
            ["Cheddar / Swiss / Gruyere", "Hard aged cheese", "Safe regardless"],
          ]}
          highlightRow={10}
        />,
        3: <WarningBox title="Why Listeria Matters in Pregnancy">
          <p>Pregnant individuals are about 10 times more likely to develop listeriosis (CDC). Listeria can cross the placenta and may cause miscarriage, stillbirth, preterm labor, or severe neonatal infection.</p>
          <p>Listeria uniquely keeps growing at fridge temperatures, and maternal symptoms can be mild and flu-like. Pasteurization reliably kills it, which is why the label check matters.</p>
        </WarningBox>,
        6: <ReferenceTable title="Soft Cheese Nutrition (per 1 oz)" emoji="🥗"
          headers={["Nutrient", "Per 1 oz", "Why it matters"]}
          rows={[
            ["Calcium", "150-220 mg", "Fetal bone mineralization"],
            ["Protein", "5-8 g", "Fetal tissue growth"],
            ["Vitamin B12", "0.3-0.5 mcg", "Nervous system development"],
            ["Zinc", "0.5-1.0 mg", "Immune function, cell division"],
            ["Phosphorus", "100-150 mg", "Bone mineralization"],
          ]}
        />,
        8: <Steps title="How to Verify Pasteurization" emoji="🔍" steps={[
          { heading: "Read the label first", text: "Look for 'made from pasteurized milk' or 'pasteurized' on the panel." },
          { heading: "Watch for raw-milk wording", text: "'Raw milk cheese' or 'made from unpasteurized milk' means avoid it." },
          { heading: "At a counter or restaurant, ask", text: "'Is this cheese made from pasteurized milk?' is a normal question." },
          { heading: "Be extra careful with imports", text: "French brie/camembert, Greek feta, and farm cheeses are more often raw milk." },
          { heading: "Store and use safely", text: "Keep at 35-40°F, use within a few days of opening, avoid long room-temp exposure." },
        ]} />,
      }} />
    </ToolPageShell>
  );
}
