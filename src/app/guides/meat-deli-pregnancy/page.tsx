import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { CompareColumns, Steps, ReferenceTable, WarningBox } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meat & Deli During Pregnancy: Safety Guide",
  description: "Deli meat, ham, bacon, pepperoni, hot dogs in pregnancy: heat to 165°F and they are considered safe. Plus liver, deli salads, jerky, and the nitrate truth.",
  alternates: { canonical: "/guides/meat-deli-pregnancy" },
};

export default function Page() {
  const content = getArticleContent("guide-meat-deli-pregnancy.md");
  const lastUpdated = getLastUpdated("guide-meat-deli-pregnancy.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-meat-deli-pregnancy.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Meat and Deli During Pregnancy"
      subtitle="One rule covers almost all of it: heat ready-to-eat meat to 165°F. Here is the complete breakdown, plus the two exceptions."
      readTime="10 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/meat-deli-pregnancy"
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search any food.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Steak During Pregnancy",desc:"Doneness and Toxoplasma.",href:"/pregnancy/safe-food/steak",category:"pregnancy"},
        {title:"Fish & Seafood Guide",desc:"Mercury and safe species.",href:"/guides/fish-seafood-pregnancy",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="Cold ready-to-eat meats (deli meat, ham, pepperoni, salami, hot dogs) should be avoided in pregnancy due to Listeria. Heated to 165°F until steaming, they are considered safe. Cook bacon until crispy, steak to 160°F, poultry to 165°F. Two exceptions heat cannot fix: limit liver (vitamin A) and skip premade deli salads (FDA names them specifically)." />
      <SplitArticle content={content} injections={{
        0: <CompareColumns title="Meat in Pregnancy: Safe vs Avoid" emoji="🌡️"
          yesTitle="Considered safe"
          noTitle="Avoid"
          yesItems={[
            "Any deli meat heated to 165°F (steaming)",
            "Pepperoni or ham baked on pizza or in hot dishes",
            "Bacon cooked until crispy",
            "Hot dogs grilled, boiled, or microwaved until steaming",
            "Homemade chicken salad (chicken cooked to 165°F)",
          ]}
          noItems={[
            "Cold deli meat, ham, salami, or bologna",
            "Room-temperature charcuterie boards",
            "Cold or lukewarm hot dogs",
            "Premade deli chicken, ham, or seafood salad",
            "Liver in large or daily portions (vitamin A)",
          ]}
        />,
        1: <Steps title="How to Heat Deli Meat Safely" emoji="🥪" steps={[
          { heading: "Target 165°F, steaming hot", text: "Not warm, not lightly toasted. Visible steam is the practical cue." },
          { heading: "Microwave 30-60 seconds", text: "The fastest method for a few slices. Heat the meat itself, not just the sandwich." },
          { heading: "Or use a pan, panini press, or toaster oven", text: "Heat until edges curl or the meat sizzles throughout." },
          { heading: "Check it is hot all the way through", text: "Surface warmth is not enough. Uneven heating leaves cold spots where Listeria survives." },
          { heading: "At sandwich shops, ask specifically", text: "Request the meat be heated until steaming and mention it is a pregnancy precaution." },
        ]} />,
        6: <ReferenceTable title="Safe Cooking Temperatures by Meat" emoji="🥩"
          headers={["Meat", "Primary Risk", "Safe Preparation"]}
          rows={[
            ["Deli meats (cold cuts)", "Listeria", "Heat to 165°F (steaming)"],
            ["Hot dogs", "Listeria", "Heat until steaming"],
            ["Bacon", "Listeria, Toxoplasma", "Cook until crispy"],
            ["Pepperoni / salami", "Listeria", "Heat to 165°F or bake on pizza"],
            ["Steak / beef", "Toxoplasma, E. coli", "Cook to 160°F"],
            ["Chicken / poultry", "Salmonella", "Cook to 165°F"],
            ["Liver", "Vitamin A (retinol)", "Limit portions; heat does not help"],
          ]}
          highlightRow={0}
        />,
        7: <WarningBox title="Two Exceptions Heat Cannot Fix">
          <p><strong>Liver:</strong> 3 oz of chicken liver contains over 12,000 IU vitamin A against a 10,000 IU pregnancy upper limit. Excess preformed vitamin A (retinol) is teratogenic. Cooking changes nothing. ACOG advises limiting intake.</p>
          <p><strong>Deli salads:</strong> The FDA names premade ham salad, chicken salad, and seafood salad on its avoid list. Homemade versions with properly cooked chicken and pasteurized mayo are considered safe.</p>
        </WarningBox>,
      }} />
    </BlogPageShell>
  );
}
