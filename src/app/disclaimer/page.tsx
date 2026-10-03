import type { Metadata } from "next";

export const metadata: Metadata = { title: "Medical Disclaimer", description: "ProHealthIt medical disclaimer — important information about our health tools and content.",
  alternates: { canonical: "/disclaimer" },
  openGraph: { type: "website", siteName: "ProHealthIt", title: "Medical Disclaimer", description: "ProHealthIt medical disclaimer — important information about our health tools and content.", url: "/disclaimer", images: [{url:"/og-image.png",width:1200,height:630}] },
  twitter: {card:"summary_large_image", title:"Medical Disclaimer", description:"ProHealthIt medical disclaimer — important information about our health tools and content.", images:["/og-image.png"]},
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Medical Disclaimer</h1>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 space-y-4">
        <p className="font-semibold text-slate-900">ProHealthIt provides health information and interactive tools for educational and informational purposes only.</p>
        <p>The content on this website, including text, graphics, calculators, and other material, is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
        <p>Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor, go to the emergency department, or call emergency services immediately.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Calculator Accuracy</h2>
        <p>Calculator methods and evidence differ by tool. Each tool should be read with its own method, source and limitations; outputs are estimates or arithmetic results and may not reflect an individual&apos;s health status.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Mental Health Screening Tools</h2>
        <p>The GAD-7 page provides a screening questionnaire, not a diagnosis. The stress and sleep pages provide information or arithmetic estimates; the burnout and ADHD pages provide source information and do not administer assessments. None of these pages diagnoses a mental health condition.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">No Doctor-Patient Relationship</h2>
        <p>Use of this website does not create a doctor-patient or therapist-patient relationship. ProHealthIt does not provide medical consultations or personalized health recommendations.</p>
      </div>
    </div>
  );
}
