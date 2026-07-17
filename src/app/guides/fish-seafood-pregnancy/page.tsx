import type { Metadata } from "next";
import { BlogPageShell } from "@/components/BlogPageShell";
import { SplitArticle } from "@/components/SplitArticle";
import { QuickAnswer } from "@/components/QuickAnswer";
import { ReferenceTable, CompareColumns, WarningBox, Steps } from "@/components/VisualComponents";
import { getArticleContent, getLastUpdated, getLastUpdatedISO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fish & Seafood During Pregnancy: Full Guide",
  description: "Which fish are safe in pregnancy? FDA mercury categories, weekly limits, shrimp, crab, lobster, sardines, mackerel, smoked salmon, and safe cooking temps.",
  alternates: { canonical: "/guides/fish-seafood-pregnancy" },
};

export default function Page() {
  const content = getArticleContent("guide-fish-seafood-pregnancy.md");
  const lastUpdated = getLastUpdated("guide-fish-seafood-pregnancy.md");
  const lastUpdatedISO = getLastUpdatedISO("guide-fish-seafood-pregnancy.md");
  return (
    <BlogPageShell lastUpdated={lastUpdated} lastUpdatedISO={lastUpdatedISO} title="Fish and Seafood During Pregnancy"
      subtitle="The complete species-by-species safety guide: mercury categories, weekly limits, and how to get DHA without the risk."
      readTime="11 min read" category="pregnancy" categoryLabel="Pregnancy" url="/guides/fish-seafood-pregnancy"
      relatedTools={[
        {title:"Safe Food Checker",desc:"Search any food.",href:"/pregnancy/safe-food-checker",category:"pregnancy"},
        {title:"Salmon During Pregnancy",desc:"The top DHA choice.",href:"/pregnancy/safe-food/salmon",category:"pregnancy"},
        {title:"Tuna During Pregnancy",desc:"Which types, what limits.",href:"/pregnancy/safe-food/tuna",category:"pregnancy"},
      ]}>
      <QuickAnswer answer="The FDA recommends pregnant women eat 8-12 oz (2-3 servings) of low-mercury fish per week, not avoid fish. Best Choice: shrimp, salmon, cod, tilapia, catfish, sardines, crab, lobster. Limit to 1 serving/week: albacore tuna, Spanish mackerel. Avoid entirely: shark, swordfish, king mackerel, tilefish. Cook all seafood to 145°F and skip raw and cold-smoked preparations." />
      <SplitArticle content={content} injections={{
        0: <ReferenceTable title="FDA Fish Categories & Mercury Levels" emoji="🐟"
          headers={["Fish", "Mercury (ppm)", "FDA Category", "Weekly Limit"]}
          rows={[
            ["Shrimp / Prawns", "0.01", "Best Choice", "2-3 servings"],
            ["Tilapia", "0.013", "Best Choice", "2-3 servings"],
            ["Sardines", "0.013", "Best Choice", "2-3 servings"],
            ["Catfish", "0.024", "Best Choice", "2-3 servings"],
            ["King / Snow crab", "0.027-0.040", "Best Choice", "2-3 servings"],
            ["Atlantic mackerel", "0.050", "Best Choice", "2-3 servings"],
            ["Blue / Dungeness crab", "0.065", "Best Choice", "2-3 servings"],
            ["Lobster", "0.10", "Best Choice", "2-3 servings"],
            ["Spanish mackerel", "0.182", "Good Choice", "1 serving"],
            ["Albacore tuna", "0.35", "Good Choice", "1 serving"],
            ["King mackerel", "0.730", "Avoid", "None"],
          ]}
          highlightRow={10}
        />,
        1: <CompareColumns title="Seafood: Eat vs Avoid" emoji="🍽️"
          yesTitle="Considered safe (cooked)"
          noTitle="Avoid in pregnancy"
          yesItems={[
            "Shrimp, prawns, crab, lobster, imitation crab",
            "Salmon, sardines, cod, tilapia, catfish",
            "Atlantic mackerel, canned light tuna",
            "Hot-smoked salmon, canned seafood",
          ]}
          noItems={[
            "Shark, swordfish, king mackerel, tilefish",
            "Raw fish: sushi, sashimi, ceviche",
            "Raw oysters, clams, and mussels",
            "Cold-smoked salmon / lox (unless heated to 165°F)",
          ]}
        />,
        6: <WarningBox title="Mackerel: Always Check the Species">
          <p>Atlantic mackerel (0.050 ppm) is an FDA Best Choice with excellent DHA. King mackerel (0.730 ppm) is one of only four fish the FDA says to avoid entirely during pregnancy.</p>
          <p>A menu or fish counter that just says &quot;mackerel&quot; is ambiguous. Ask which species. If they cannot tell you, skip it.</p>
        </WarningBox>,
        10: <Steps title="Cooking Seafood Safely in Pregnancy" emoji="🌡️" steps={[
          { heading: "Cook to 145°F", text: "The universal target for all fish and shellfish. A digital thermometer beats guessing on thick fillets." },
          { heading: "Know the visual cues", text: "Fish flakes and turns opaque. Shrimp turns pink and curls into a C. Lobster shell turns bright red." },
          { heading: "Skip raw preparations", text: "No sushi, sashimi, ceviche, or raw oysters. The risk is bacteria and viruses, not mercury." },
          { heading: "Canned and pre-cooked is fine", text: "Canned sardines, salmon, tuna, and imitation crab are already cooked. No further heating needed." },
          { heading: "Avoid cross-contamination", text: "Separate cutting board for raw seafood, wash hands and surfaces, refrigerate leftovers within 2 hours." },
        ]} />,
      }} />
    </BlogPageShell>
  );
}
