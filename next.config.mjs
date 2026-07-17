/** @type {import('next').NextConfig} */

// Consolidated pages: thin per-food pages absorbed into comprehensive hub guides.
// Permanent redirects preserve any link equity and prevent 404s.
const mapTo = (dest, slugs) =>
  slugs.map((slug) => ({
    source: `/pregnancy/safe-food/${slug}`,
    destination: dest,
    permanent: true,
  }));

const CONSOLIDATION_REDIRECTS = [
  ...mapTo("/guides/fish-seafood-pregnancy", [
    "catfish",
    "tilapia",
    "prawns",
    "mackerel",
    "sardines",
    "smoked-salmon",
    "lobster",
    "crab",
    "shrimp",
    "oysters",
    "imitation-crab",
  ]),
  ...mapTo("/guides/meat-deli-pregnancy", [
    "bacon",
    "ham",
    "pepperoni",
    "hot-dogs",
    "deli-meats",
    "beef-jerky",
    "liver",
    "chicken-salad",
  ]),
  ...mapTo("/guides/drinks-pregnancy", [
    "green-tea",
    "herbal-tea",
    "chai-tea",
    "kombucha",
    "soda",
    "energy-drinks",
    "unpasteurized-juice",
  ]),
  ...mapTo("/pregnancy/safe-food/soft-cheese", [
    "cream-cheese",
    "ricotta",
    "mozzarella",
    "parmesan",
    "goat-cheese",
  ]),
  ...mapTo("/guides/everyday-foods-pregnancy", [
    "papaya",
    "pineapple",
    "honey",
    "chocolate",
    "ice-cream",
    "mayonnaise",
    "hummus",
    "sprouts",
    "tofu",
    "spicy-food",
    "artificial-sweeteners",
    "protein-powder",
    "yogurt",
  ]),
];

const nextConfig = {
  async redirects() {
    return [...CONSOLIDATION_REDIRECTS];
  },
};

export default nextConfig;
