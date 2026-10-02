export const CATEGORIES = [
  { slug: "pregnancy", name: "Pregnancy", icon: "🤰", tools: 9, accent: "#EC4899", accentLight: "#FDF2F8", accentBorder: "rgba(236,72,153,0.2)", desc: "Due dates, weight tracking, fetal growth, ovulation" },
  { slug: "fitness", name: "Fitness", icon: "💪", tools: 8, accent: "#8B5CF6", accentLight: "#F5F3FF", accentBorder: "rgba(139,92,246,0.2)", desc: "TDEE, macros, body composition, strength" },
  { slug: "body-metrics", name: "Body Metrics", icon: "📐", tools: 9, accent: "#10B981", accentLight: "#ECFDF5", accentBorder: "rgba(16,185,129,0.2)", desc: "BMI, BMR, ideal weight, body frame" },
  { slug: "mental-health", name: "Mental Health", icon: "🧠", tools: 7, accent: "#3B82F6", accentLight: "#EFF6FF", accentBorder: "rgba(59,130,246,0.2)", desc: "Stress, anxiety, burnout, sleep quality" },
  { slug: "conditions", name: "Conditions", icon: "🩺", tools: 7, accent: "#F59E0B", accentLight: "#FFFBEB", accentBorder: "rgba(245,158,11,0.2)", desc: "A1C, GFR, anemia, kidney function" },
] as const;

export const TOOLS = [
  { slug: "weight-gain-calculator", name: "Pregnancy Weight Gain Calculator", category: "pregnancy", desc: "Pre-pregnancy BMI, current gain and total-gain guidance for singletons or twins.", popular: true, live: true },
  { slug: "tdee-calculator", name: "TDEE Calculator", category: "fitness", desc: "Total Daily Energy Expenditure using Mifflin-St Jeor equation.", popular: true, live: true },
  { slug: "bmi-calculator", name: "BMI Calculator", category: "body-metrics", desc: "Adult BMI from height and weight; screening limitations explained.", popular: false, live: true },
  { slug: "stress-level-test", name: "Stress Level Test", category: "mental-health", desc: "PSS-10 perceived stress score and limitations.", popular: false, live: true },
  { slug: "due-date-calculator", name: "Due Date Calculator", category: "pregnancy", desc: "Estimated delivery date from LMP, conception, or IVF transfer.", popular: false, live: true },
  { slug: "macro-calculator", name: "Macro Calculator", category: "fitness", desc: "Illustrative macro splits for selected calorie and diet preferences.", popular: false, live: true },
  { slug: "hcg-doubling-time-calculator", name: "HCG Doubling Time", category: "pregnancy", desc: "Arithmetic hCG change and doubling or halving time; no pregnancy diagnosis.", popular: false, live: true },
  { slug: "a1c-blood-sugar-converter", name: "A1C to Blood Sugar Converter", category: "conditions", desc: "Convert A1C percentage to estimated average blood sugar.", popular: false, live: true },
  { slug: "body-fat-calculator", name: "Body Fat Calculator", category: "fitness", desc: "Circumference-based body fat estimate using a published Navy equation.", popular: false, live: true },
  { slug: "calorie-deficit-calculator", name: "Calorie Deficit Calculator", category: "fitness", desc: "Show an estimated calorie target, actual deficit and a static projection.", popular: false, live: true },
  { slug: "ovulation-calculator", name: "Ovulation Calculator", category: "pregnancy", desc: "Estimated six-day calendar window with explicit assumptions and limits.", popular: false, live: true },
  { slug: "sleep-quality-calculator", name: "Sleep Quality Calculator", category: "mental-health", desc: "Estimate sleep duration and efficiency from a diary.", popular: false, live: true },
  { slug: "fetal-weight-percentile", name: "Fetal Weight Percentile Guide", category: "pregnancy", desc: "Understand ultrasound weight percentiles and clinical references.", popular: false, live: true },
  { slug: "protein-intake-calculator", name: "Protein Intake Calculator", category: "fitness", desc: "Daily protein needs based on weight, activity, and goals.", popular: false, live: true },
  { slug: "bmi-calculator-teens", name: "BMI Calculator for Teens", category: "body-metrics", desc: "Age and sex-specific BMI percentiles for ages 2-19.", popular: false, live: true },
  { slug: "gfr-calculator", name: "GFR Calculator", category: "conditions", desc: "Estimate kidney function using the CKD-EPI 2021 equation.", popular: false, live: true },
  { slug: "safe-food-checker", name: "Pregnancy Safe Food Checker", category: "pregnancy", desc: "Find source-linked food guidance; preparation and food type matter during pregnancy.", popular: false, live: true },
  { slug: "bmr-calculator", name: "BMR Calculator", category: "body-metrics", desc: "Basal Metabolic Rate using Mifflin-St Jeor and Harris-Benedict.", popular: false, live: true },
  { slug: "one-rep-max-calculator", name: "One Rep Max Calculator", category: "fitness", desc: "Estimate your 1RM with percentage-based training chart.", popular: false, live: true },
  { slug: "ideal-weight-calculator", name: "Ideal Weight Calculator", category: "body-metrics", desc: "Four formulas compared — Devine, Robinson, Miller, Hamwi.", popular: false, live: true },
  { slug: "burnout-quiz", name: "Burnout Guidance", category: "mental-health", desc: "Work-related burnout guidance and official assessment options.", popular: false, live: true },
  { slug: "anxiety-self-assessment", name: "Anxiety Self-Assessment", category: "mental-health", desc: "GAD-7 symptom score; screening is not diagnosis.", popular: false, live: true },
  { slug: "lean-body-mass-calculator", name: "Lean Body Mass Calculator", category: "fitness", desc: "Estimate lean mass using Boer and James formulas.", popular: false, live: true },
  { slug: "calorie-calculator-women-over-50", name: "Calorie Calculator for Women Over 50", category: "body-metrics", desc: "Daily calorie needs with menopause and sarcopenia considerations.", popular: false, live: true },
  { slug: "contraction-timer", name: "Contraction Timer", category: "pregnancy", desc: "Record contraction duration and start-to-start intervals; no labor assessment.", popular: false, live: true },
  { slug: "adhd-self-assessment", name: "ADHD Self-Assessment", category: "mental-health", desc: "Official adult ADHD screening resources and limits.", popular: false, live: true },
  { slug: "anemia-risk-checker", name: "Anemia Risk Checker", category: "conditions", desc: "Why anemia symptoms need clinical assessment and testing.", popular: false, live: true },
  { slug: "body-frame-size-calculator", name: "Body Frame Size Calculator", category: "body-metrics", desc: "Determine small, medium, or large frame from wrist measurement.", popular: false, live: true },
  { slug: "tdee-calculator-teens", name: "Teen Energy Needs Guide", category: "body-metrics", desc: "Nutrition guidance for growing teenagers.", popular: false, live: true },
  { slug: "protein-needs-seniors", name: "Protein Needs for Seniors", category: "body-metrics", desc: "Daily protein targets for 65+ to prevent sarcopenia.", popular: false, live: true },
  { slug: "kidney-function-calculator", name: "Kidney Function Calculator", category: "conditions", desc: "Detailed CKD staging with action recommendations.", popular: false, live: true },
  { slug: "macro-calculator-pcos", name: "Macro Calculator for PCOS", category: "fitness", desc: "An illustrative adult macro planner; no PCOS-specific prescription.", popular: false, live: true },
  { slug: "ivf-due-date-calculator", name: "IVF Due Date Calculator", category: "pregnancy", desc: "Due date from IVF transfer — 3-day or 5-day, fresh or FET.", popular: false, live: true },
  { slug: "baby-growth-percentile", name: "WHO Baby Weight-for-age Percentile", category: "pregnancy", desc: "WHO daily weight-for-age reference from birth to five years; local clinical chart guidance may differ.", popular: false, live: true },
  { slug: "sleep-calculator", name: "Sleep Calculator", category: "mental-health", desc: "Plan bedtime using wake time and desired sleep duration.", popular: false, live: true },
  { slug: "cholesterol-ratio-calculator", name: "Cholesterol Ratio Calculator", category: "conditions", desc: "TC/HDL, LDL/HDL, and triglyceride/HDL ratios.", popular: false, live: true },
  { slug: "waist-to-hip-ratio-calculator", name: "Waist-to-Hip Ratio", category: "body-metrics", desc: "Waist divided by hip circumference; measurement limits explained.", popular: false, live: true },
  { slug: "vitamin-d-calculator", name: "Vitamin D Calculator", category: "conditions", desc: "US age-based recommended total intake reference.", popular: false, live: true },
  { slug: "thyroid-function-calculator", name: "Thyroid Function Calculator", category: "conditions", desc: "Compare values with your own laboratory reference intervals.", popular: false, live: true },
  { slug: "postpartum-depression-screening", name: "Postpartum Depression Screening", category: "mental-health", desc: "Edinburgh Postnatal Depression Scale (EPDS).", popular: false, live: true },
];

export const FEATURED_ARTICLES = [
  { title: "BMI vs Body Fat Percentage: Which Actually Matters?", category: "body-metrics", readTime: "8 min", desc: "BMI is the most used health metric — but it's also one of the most misleading. Here's what you should actually pay attention to." },
  { title: "Understanding TDEE: The Number Behind Every Diet", category: "fitness", readTime: "10 min", desc: "Every calorie deficit, every bulk, every maintenance phase starts with one number. Learn how TDEE is calculated and why most online calculators get it wrong." },
  { title: "Pregnancy Weight Gain: What the Science Actually Says", category: "pregnancy", readTime: "12 min", desc: "The IOM guidelines are 15 years old. Here's what they got right, what's changed, and how to use them without stressing." },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
