import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ProHealthIt privacy policy — how we handle your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
      <div className="text-[15.5px] leading-[1.85] text-slate-600 space-y-5">
        <p>Last updated: March 2026</p>
        
        <h2 className="text-xl font-bold text-slate-900 pt-4">What We Collect</h2>
        <p>ProHealthIt does not collect personal information. All calculator inputs are processed in your browser and are never sent to our servers. We do not require user accounts, login, or registration.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Analytics</h2>
        <p>We use Google Analytics 4 (GA4) and Vercel Analytics to understand how visitors use our site. These services collect anonymized usage data including page views, session duration, approximate location (country/city level), device type, and referral source. No personally identifiable information is collected.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Cookies</h2>
        <p>Google Analytics uses cookies to distinguish unique visitors. You can disable cookies in your browser settings or use browser extensions to opt out of Google Analytics tracking.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Hosting</h2>
        <p>We use Vercel for hosting and analytics. Their privacy policy applies to data they process on our behalf.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Third-Party Links</h2>
        <p>Our articles may link to external medical sources (WHO, NIH, PubMed, etc.) for reference. We are not responsible for the privacy practices of external websites.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Data Security</h2>
        <p>Since we do not collect or store personal health data, there is no personal health information at risk. All calculator computations happen locally in your browser.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Children</h2>
        <p>Our site is not directed at children under 13. We do not knowingly collect information from children.</p>

        <h2 className="text-xl font-bold text-slate-900 pt-4">Contact</h2>
        <p>For privacy-related questions, email us at <a href="mailto:hello@prohealthit.com" className="text-brand-600 font-semibold">hello@prohealthit.com</a>.</p>
      </div>
    </div>
  );
}
