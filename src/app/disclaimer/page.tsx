import type { Metadata } from "next";

export const metadata: Metadata = { title: "Medical Disclaimer", description: "ProHealthIt medical disclaimer — important information about our health tools and content.",
  alternates: { canonical: "/disclaimer" }, };

export default function DisclaimerPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Medical Disclaimer</h1>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 space-y-4">
        <p className="font-semibold text-slate-900">ProHealthIt provides health information and interactive tools for educational and informational purposes only.</p>
        <p>The content on this website, including text, graphics, calculators, and other material, is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        <p>Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Calculator Accuracy</h2>
        <p>Our calculators use established, peer-reviewed formulas and are designed to provide reasonable estimates. However, all results are approximations based on population-level data and may not reflect your individual health status. Individual variation is normal and expected.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Mental Health Screening Tools</h2>
        <p>Mental health assessments on this site (stress, anxiety, burnout, ADHD, sleep quality) are screening tools only. They do not diagnose mental health conditions. A diagnosis requires comprehensive evaluation by a qualified mental health professional. If you are in crisis, contact your local emergency services or a crisis helpline.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">No Doctor-Patient Relationship</h2>
        <p>Use of this website does not create a doctor-patient or therapist-patient relationship. ProHealthIt does not provide medical consultations or personalized health recommendations.</p>
      </div>
    </div>
  );
}
