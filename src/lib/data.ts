export const CATEGORIES = [
  { slug: "pregnancy", name: "Pregnancy", icon: "🤰", tools: 9, accent: "#EC4899", accentLight: "#FDF2F8", accentBorder: "rgba(236,72,153,0.2)", desc: "Due dates, weight tracking, fetal growth, ovulation" },
  { slug: "fitness", name: "Fitness", icon: "💪", tools: 8, accent: "#8B5CF6", accentLight: "#F5F3FF", accentBorder: "rgba(139,92,246,0.2)", desc: "TDEE, macros, body composition, strength" },
  { slug: "body-metrics", name: "Body Metrics", icon: "📐", tools: 9, accent: "#10B981", accentLight: "#ECFDF5", accentBorder: "rgba(16,185,129,0.2)", desc: "BMI, BMR, and body measurement guides" },
  { slug: "mental-health", name: "Mental Health", icon: "🧠", tools: 7, accent: "#3B82F6", accentLight: "#EFF6FF", accentBorder: "rgba(59,130,246,0.2)", desc: "Stress, anxiety, burnout, sleep quality" },
  { slug: "conditions", name: "Conditions", icon: "🩺", tools: 7, accent: "#F59E0B", accentLight: "#FFFBEB", accentBorder: "rgba(245,158,11,0.2)", desc: "A1C, GFR, anemia, kidney function" },
] as const;

export const TOOLS = [
  { slug: "weight-gain-calculator", name: "Pregnancy Weight Gain Calculator", category: "pregnancy", desc: "Pre-pregnancy BMI, current gain and total-gain guidance for singletons or twins.", popular: true, live: true },
  { slug: "tdee-calculator", name: "TDEE Estimate", category: "fitness", desc: "Mifflin–St Jeor resting estimate times an explicitly labeled site activity assumption.", popular: true, live: true },
  { slug: "bmi-calculator", name: "BMI Calculator", category: "body-metrics", desc: "Adult BMI from height and weight; screening limitations explained.", popular: false, live: true },
  { slug: "stress-level-test", name: "Perceived Stress Scale information", category: "mental-health", desc: "PSS permission and interpretation information.", popular: false, live: true },
  { slug: "due-date-calculator", name: "Due Date Calculator", category: "pregnancy", desc: "Estimated delivery date from LMP, conception, or IVF transfer.", popular: false, live: true },
  { slug: "macro-calculator", name: "Macro Calculator", category: "fitness", desc: "Illustrative macro splits for selected calorie and diet preferences.", popular: false, live: true },
  { slug: "hcg-doubling-time-calculator", name: "HCG Doubling Time", category: "pregnancy", desc: "Arithmetic hCG change and doubling or halving time; no pregnancy diagnosis.", popular: false, live: true },
  { slug: "a1c-blood-sugar-converter", name: "A1C to Blood Sugar Converter", category: "conditions", desc: "Convert A1C percentage to estimated average blood sugar.", popular: false, live: true },
  { slug: "body-fat-calculator", name: "Body Composition Estimate", category: "fitness", desc: "Apply a documented military circumference equation to entered measurements.", popular: false, live: true },
  { slug: "calorie-deficit-calculator", name: "Calorie Difference Calculator", category: "fitness", desc: "Subtract user-entered calorie values; no target or rate is recommended.", popular: false, live: true },
  { slug: "ovulation-calculator", name: "Ovulation Calculator", category: "pregnancy", desc: "Estimated six-day calendar window with explicit assumptions and limits.", popular: false, live: true },
  { slug: "sleep-quality-calculator", name: "Sleep Quality Calculator", category: "mental-health", desc: "Estimate sleep duration and efficiency from a diary.", popular: false, live: true },
  { slug: "fetal-weight-percentile", name: "Fetal Weight Percentile Guide", category: "pregnancy", desc: "Understand ultrasound weight percentiles and clinical references.", popular: false, live: true },
  { slug: "protein-intake-calculator", name: "Protein Intake Reference", category: "fitness", desc: "Apply the current U.S. guideline range to an entered weight; not a personal prescription.", popular: false, live: true },
  { slug: "bmi-calculator-teens", name: "BMI Calculator for Teens", category: "body-metrics", desc: "Age and sex-specific BMI percentiles for ages 2-19.", popular: false, live: true },
  { slug: "gfr-calculator", name: "GFR Calculator", category: "conditions", desc: "Estimate kidney function using the CKD-EPI 2021 equation.", popular: false, live: true },
  { slug: "safe-food-checker", name: "Pregnancy Safe Food Checker", category: "pregnancy", desc: "Find source-linked food guidance; preparation and food type matter during pregnancy.", popular: false, live: true },
  { slug: "bmr-calculator", name: "Resting Energy Estimate", category: "body-metrics", desc: "Mifflin–St Jeor estimate for its original healthy adult age range.", popular: false, live: true },
  { slug: "one-rep-max-calculator", name: "One-repetition maximum estimate information", category: "fitness", desc: "Estimator temporarily unavailable during source-method review.", popular: false, live: true },
  { slug: "ideal-weight-calculator", name: "Historical Weight Equations", category: "body-metrics", desc: "Four historical equation outputs; not personal weight targets.", popular: false, live: true },
  { slug: "burnout-quiz", name: "WHO Burnout Guidance", category: "mental-health", desc: "WHO definition of burnout and occupational scope.", popular: false, live: true },
  { slug: "anxiety-self-assessment", name: "GAD-7 Screening Questionnaire", category: "mental-health", desc: "Seven-item symptom screen and its study-specific limits.", popular: false, live: true },
  { slug: "lean-body-mass-calculator", name: "Lean Body Mass Equation Estimate", category: "fitness", desc: "Calculate the Boer equation output with study limits.", popular: false, live: true },
  { slug: "calorie-calculator-women-over-50", name: "Resting Energy Estimate for Women 50–78", category: "body-metrics", desc: "Female Mifflin–St Jeor resting-energy estimate, not a calorie intake target.", popular: false, live: true },
  { slug: "contraction-timer", name: "Contraction Timer", category: "pregnancy", desc: "Record contraction duration and start-to-start intervals; no labor assessment.", popular: false, live: true },
  { slug: "adhd-self-assessment", name: "ADHD Self-Assessment", category: "mental-health", desc: "Official adult ADHD screening resources and limits.", popular: false, live: true },
  { slug: "anemia-risk-checker", name: "Anemia Risk Checker", category: "conditions", desc: "Why anemia symptoms need clinical assessment and testing.", popular: false, live: true },
  { slug: "body-frame-size-calculator", name: "Body Frame Size Method Withdrawn", category: "body-metrics", desc: "Previous calculation withdrawn pending source and method verification.", popular: false, live: false },
  { slug: "tdee-calculator-teens", name: "Teen Nutrition Guidance", category: "body-metrics", desc: "USDA teen nutrition information; no calorie target.", popular: false, live: true },
  { slug: "protein-needs-seniors", name: "Protein Reference for Healthy Older Adults", category: "body-metrics", desc: "ESPEN European population guidance; arithmetic range, not a personal prescription.", popular: false, live: true },
  { slug: "kidney-function-calculator", name: "Adult eGFR Equation Calculator", category: "conditions", desc: "Calculate an adult CKD-EPI 2021 eGFR estimate; no diagnosis or treatment guidance.", popular: false, live: true },
  { slug: "macro-calculator-pcos", name: "PCOS Nutrition Guidance", category: "fitness", desc: "Evidence-based guidance on diet composition for PCOS.", popular: false, live: true },
  { slug: "ivf-due-date-calculator", name: "IVF Due Date Calculator", category: "pregnancy", desc: "Due date from IVF transfer — 3-day or 5-day, fresh or FET.", popular: false, live: true },
  { slug: "baby-growth-percentile", name: "WHO Baby Weight-for-age Percentile", category: "pregnancy", desc: "WHO daily weight-for-age reference from birth to five years; local clinical chart guidance may differ.", popular: false, live: true },
  { slug: "sleep-calculator", name: "Sleep Calculator", category: "mental-health", desc: "Plan bedtime using wake time and desired sleep duration.", popular: false, live: true },
  { slug: "cholesterol-ratio-calculator", name: "Cholesterol Ratio Calculator", category: "conditions", desc: "TC/HDL, LDL/HDL, and triglyceride/HDL ratios.", popular: false, live: true },
  { slug: "waist-to-hip-ratio-calculator", name: "Waist-to-Hip Ratio", category: "body-metrics", desc: "Waist divided by hip circumference; measurement limits explained.", popular: false, live: true },
  { slug: "vitamin-d-calculator", name: "Vitamin D Calculator", category: "conditions", desc: "US age-based recommended total intake reference.", popular: false, live: true },
  { slug: "thyroid-function-calculator", name: "Thyroid Function Calculator", category: "conditions", desc: "Compare values with your own laboratory reference intervals.", popular: false, live: true },
  { slug: "postpartum-depression-screening", name: "EPDS information", category: "mental-health", desc: "Screening limits, source information and reproduction conditions.", popular: false, live: true },
];

export const FEATURED_ARTICLES = [
  { title: "BMI vs Body Fat Percentage: Which Actually Matters?", category: "body-metrics", readTime: "8 min", desc: "BMI is the most used health metric — but it's also one of the most misleading. Here's what you should actually pay attention to." },
  { title: "Understanding TDEE: The Number Behind Every Diet", category: "fitness", readTime: "10 min", desc: "Every calorie deficit, every bulk, every maintenance phase starts with one number. Learn how TDEE is calculated and why most online calculators get it wrong." },
  { title: "Pregnancy Weight Gain: What the Science Actually Says", category: "pregnancy", readTime: "12 min", desc: "The IOM guidelines are 15 years old. Here's what they got right, what's changed, and how to use them without stressing." },
];

export function getCategoryBySlug(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}
