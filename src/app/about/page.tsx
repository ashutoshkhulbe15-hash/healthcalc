import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us", description: "ProHealthIt is an evidence-based health knowledge site with interactive tools. Learn about our mission, methodology, and editorial standards." };

export default function AboutPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">About ProHealthIt</h1>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 space-y-4">
        <p>ProHealthIt is a free health knowledge site that pairs in-depth, evidence-based articles with interactive tools. We cover pregnancy, fitness, nutrition, body metrics, mental health, and medical conditions — each topic explained by expert-level guides with citations from WHO, NIH, ACOG, and peer-reviewed research.</p>
        <p>Every calculator on this site uses established, published formulas — Mifflin-St Jeor for TDEE, IOM 2009 guidelines for pregnancy weight gain, CKD-EPI 2021 for kidney function, PSS-10 for stress, GAD-7 for anxiety, and more. We cite the exact equation and original paper on every page.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Our Methodology</h2>
        <p>Articles pull information exclusively from authoritative sources: WHO, NIH, ACOG, Mayo Clinic, and PubMed studies. Every key claim is cross-referenced against at least two major medical references. We do not publish unsubstantiated health claims.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">What We Are Not</h2>
        <p>ProHealthIt is not a substitute for professional medical advice, diagnosis, or treatment. Our tools are educational and informational. Always consult your healthcare provider with questions about your health.</p>
        <p className="pt-4"><Link href="/tools" className="text-brand-600 font-semibold no-underline hover:underline">Browse all tools →</Link></p>
      </div>
    </div>
  );
}
