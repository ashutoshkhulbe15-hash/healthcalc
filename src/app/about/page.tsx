import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Our Editorial Process & Standards",
  description: "Learn about ProHealthIt's editorial process, medical review standards, and how we ensure accuracy across 40+ health calculators and 100+ evidence-based guides.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">About ProHealthIt</h1>
      <div className="text-[15.5px] leading-[1.85] text-slate-600 space-y-5">
        <p>ProHealthIt is a free health knowledge platform that pairs interactive calculators with comprehensive, evidence-based guides. We cover pregnancy, fitness, nutrition, body metrics, mental health, and medical conditions — each topic supported by peer-reviewed research and authoritative medical sources.</p>

        <div className="bg-brand-50 border border-brand-200 rounded-xl p-6 my-8">
          <h2 className="text-lg font-bold text-brand-800 mb-3">Our Mission</h2>
          <p className="text-brand-700 mb-0">Most health calculator sites give you a number and leave. We give you the number, explain what it means, show you where it fits in the clinical context, and cite the exact research behind it. Every page is designed to make you more informed, not more anxious.</p>
        </div>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Editorial Process</h2>
        <p>Every piece of content on ProHealthIt follows a structured editorial process:</p>

        <div className="grid sm:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">1. Research</h3>
            <p className="text-sm text-slate-500 mb-0">Every article begins with a review of current clinical guidelines, peer-reviewed studies, and authoritative medical references (WHO, NIH, ACOG, ADA, PubMed).</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="text-2xl mb-2">✍️</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">2. Writing</h3>
            <p className="text-sm text-slate-500 mb-0">Content is written by our editorial team with a focus on accuracy, clarity, and practical usefulness. We avoid medical jargon where plain language works.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="text-2xl mb-2">🔬</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">3. Fact-Check</h3>
            <p className="text-sm text-slate-500 mb-0">Every factual claim is cross-referenced against at least two independent medical sources. Calculator formulas are verified against their original published papers.</p>
          </div>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <div className="text-2xl mb-2">🔄</div>
            <h3 className="font-bold text-slate-900 text-sm mb-1">4. Updates</h3>
            <p className="text-sm text-slate-500 mb-0">Content is reviewed and updated when new guidelines are published or when clinical standards change. Every page shows its last update date.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Our Sources</h2>
        <p>We rely exclusively on authoritative, evidence-based sources:</p>
        <ul className="space-y-2 my-4">
          <li className="flex gap-2"><span className="font-bold text-brand-600">WHO</span> — World Health Organization growth standards, BMI classifications, public health guidelines</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">NIH</span> — National Institutes of Health nutritional research, clinical trial data</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">ACOG</span> — American College of Obstetricians and Gynecologists pregnancy guidelines</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">ADA</span> — American Diabetes Association diagnostic criteria and standards of care</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">PubMed</span> — Peer-reviewed studies and meta-analyses from major medical journals</li>
          <li className="flex gap-2"><span className="font-bold text-brand-600">CDC</span> — Centers for Disease Control and Prevention growth charts, screening tools</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Calculator Methodology</h2>
        <p>Every calculator on this site uses established, published formulas. We cite the exact equation and the original paper on every tool page. Our calculators use Mifflin-St Jeor for TDEE/BMR, IOM 2009 guidelines for pregnancy weight gain, CKD-EPI 2021 for kidney function, WHO growth standards for child development, PSS-10 for stress, GAD-7 for anxiety, and EPDS for postpartum depression screening.</p>
        <p>All calculations run entirely in your browser. We never send your health data to our servers.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">What We Are Not</h2>
        <div className="bg-red-50 border border-red-200 rounded-xl p-5 my-4">
          <p className="text-red-800 mb-0">ProHealthIt is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment. Our tools are educational and informational. Mental health screening tools are not diagnostic instruments. Always consult your healthcare provider with questions about your health.</p>
        </div>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Contact</h2>
        <p>Questions, corrections, or feedback: <a href="mailto:hello@prohealthit.com" className="text-brand-600 font-semibold">hello@prohealthit.com</a></p>
        <p className="pt-4"><Link href="/tools" className="text-brand-600 font-semibold no-underline hover:underline">Browse all tools →</Link></p>
      </div>
    </div>
  );
}
