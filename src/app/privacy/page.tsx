import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "ProHealthIt privacy policy — how we handle your data.",
  alternates: { canonical: "/privacy" }, };

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
      <p className="text-sm text-slate-400 mb-6">Last updated: April 2026</p>
      <div className="text-[15.5px] leading-[1.8] text-slate-600 space-y-4">
        <h2 className="text-xl font-bold text-slate-900 pt-4">What We Collect</h2>
        <p>ProHealthIt uses Vercel Analytics and Speed Insights to collect anonymous usage data including page views, referrers, and performance metrics. We do not collect personally identifiable information. No account or signup is required to use any tool on this site.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Calculator Data</h2>
        <p>All calculations are performed entirely in your browser. The numbers you enter into our calculators are never sent to our servers, stored, or shared with any third party. Your health data stays on your device.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Cookies</h2>
        <p>We use essential cookies only for site functionality. We do not use tracking cookies or sell data to advertisers.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Third-Party Services</h2>
        <p>We use Vercel for hosting and analytics. Their privacy policy applies to data they process on our behalf. We may display advertisements through Google AdSense in the future, which uses cookies for ad personalization.</p>
        <h2 className="text-xl font-bold text-slate-900 pt-4">Contact</h2>
        <p>For privacy-related questions, email us at hello@prohealthit.com.</p>
      </div>
    </div>
  );
}
