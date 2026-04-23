import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with the ProHealthIt team.",
  alternates: { canonical: "/contact" }, };

export default function ContactPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Contact Us</h1>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 space-y-4">
        <p>Have a question, suggestion, or found an error? We want to hear from you.</p>
        <p>Email us at: <a href="mailto:hello@prohealthit.com" className="text-brand-600 font-semibold">hello@prohealthit.com</a></p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Content Corrections</h2>
        <p>If you find a factual error in any of our guides or tools, please email us with the page URL and the specific claim you believe is incorrect. We take accuracy seriously and will review and correct verified errors promptly.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Partnership & Media</h2>
        <p>For partnership inquiries, media requests, or advertising questions, please reach out via email.</p>
      </div>
    </div>
  );
}
