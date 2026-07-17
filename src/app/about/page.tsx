import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ProHealthIt — Editorial Standards, Sources & Author",
  description: "ProHealthIt is written and maintained by Ash K, a health and technology researcher based in India. Every article is built from WHO, NIH, ACOG, ADA, and CDC primary sources with a 4-step editorial process.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <h1 className="text-3xl font-extrabold text-slate-900 mb-3">About ProHealthIt</h1>
      <p className="text-lg text-slate-500 mb-10 leading-relaxed">
        A free health resource built on one principle: every number this site gives you should be explainable, sourced, and honest about its limitations.
      </p>

      {/* Author Card - the most important E-E-A-T element */}
      <div className="bg-white border-2 border-brand-200 rounded-2xl p-7 mb-10 shadow-sm">
        <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-5">Who Writes This</p>
        <div className="flex gap-5 items-start">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xl font-black shrink-0">AK</div>
          <div className="flex-1">
            <h2 className="font-extrabold text-slate-900 text-xl mb-1">Ash K</h2>
            <p className="text-sm text-brand-600 font-semibold mb-4">Founder, Researcher & Lead Writer · Dehradun, India</p>

            <div className="space-y-3 text-[15px] text-slate-600 leading-relaxed">
              <p>
                I built ProHealthIt because I kept running into the same problem: health calculators that give you a number with no explanation, or articles that bury the actual answer in 3,000 words of filler. I wanted a site that respects the reader&apos;s intelligence.
              </p>
              <p>
                I research and write every article on this site. My background is in technology and independent research — I am not a doctor or licensed medical professional, and I am transparent about that on every page. What I bring is a rigorous approach to primary sources: every factual claim I make traces back to a named guideline or peer-reviewed study, not to another website.
              </p>
              <p>
                I read clinical guidelines directly — ACOG committee opinions, NIH dietary reference intakes, CDC growth chart methodology papers, ADA standards of care, WHO classification criteria. When I write that &ldquo;the IOM recommends 25–35 lbs of weight gain for a normal-weight pregnancy,&rdquo; I have read the 2009 IOM report, not a summary of a summary.
              </p>
              <p>
                Every calculator on this site uses the published formula it claims to use. The Mifflin-St Jeor equation is implemented as Mifflin and St Jeor published it in the 1990 AJCN paper. The CDC growth chart percentiles match the CDC&apos;s own published lookup tables. I verify this when I build each tool, and I cite the original paper on the tool page.
              </p>
              <p>
                I update content when guidelines change. Every page shows its last-updated date. When ACOG updates a committee opinion or the ADA revises its diagnostic criteria, I revise the relevant content.
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-slate-100">
              <p className="text-sm text-slate-500">
                <strong className="text-slate-700">Not a medical professional.</strong> ProHealthIt is a health information resource, not a medical practice. Every page includes sources you can verify yourself, and a clear disclaimer that this site does not replace your doctor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What makes this different */}
      <div className="mb-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-5">What Makes This Different from Other Health Sites</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: "📌",
              title: "Primary sources only",
              desc: "We cite WHO, NIH, ACOG, ADA, CDC, and PubMed studies — not other health websites. If we can't find a primary source for a claim, we don't make the claim."
            },
            {
              icon: "⚖️",
              title: "Honest about limitations",
              desc: "Every calculator shows its margin of error. TDEE calculators are ±10–15% accurate. BMI has known limitations for athletes. We say this clearly, not in small print."
            },
            {
              icon: "🔢",
              title: "Formulas you can verify",
              desc: "Every tool page names the equation it uses and cites the original paper. You can check the math yourself. No black-box calculations."
            },
            {
              icon: "🚫",
              title: "No fake medical reviews",
              desc: "We do not list fictitious medical reviewers or fabricate credentials. Ash K writes the content. The sources are listed on every page. That's the honest model."
            },
            {
              icon: "📅",
              title: "Dated and updated",
              desc: "Every article shows its last-updated date. We review content when guidelines change — not just when it's convenient."
            },
            {
              icon: "🔒",
              title: "Your data stays private",
              desc: "All calculations run in your browser. We never send your health data to our servers. No account required. No data stored."
            },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Process */}
      <div className="mb-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">Editorial Process</h2>
        <p className="text-slate-500 text-sm mb-6">Every article and calculator on ProHealthIt follows the same four steps before it goes live.</p>
        <div className="space-y-4">
          {[
            {
              step: "01",
              title: "Source review",
              desc: "I identify the relevant clinical guidelines, diagnostic criteria, and peer-reviewed studies for the topic. For a pregnancy topic, that means reading the ACOG committee opinion. For a nutrition topic, that means reading the NIH Dietary Reference Intakes. I start with primary sources, not secondary summaries."
            },
            {
              step: "02",
              title: "Formula verification",
              desc: "For calculator pages, I locate and read the original published paper for the equation being implemented. I implement the formula exactly as published, then verify the output against known test cases from the literature."
            },
            {
              step: "03",
              title: "Writing with attribution",
              desc: "Every factual claim in the article is written with its source named inline — not as a footnote reference number, but in the sentence itself. 'According to ACOG...', 'The CDC estimates...', 'Research published in JAMA found...' If a claim can't be attributed, it doesn't go in."
            },
            {
              step: "04",
              title: "Limitations disclosed",
              desc: "Every tool and article includes an explicit section on what the information cannot tell you, when to see a doctor instead, and what the known limitations of the metric or formula are. We treat readers as adults who can handle honest uncertainty."
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-5 bg-white border border-slate-200 rounded-xl p-5">
              <div className="text-3xl font-black text-brand-100 shrink-0 w-10">{item.step}</div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-0 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="mb-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">Sources We Rely On</h2>
        <p className="text-slate-500 text-sm mb-6">These are the primary sources ProHealthIt uses across its content. We link to the specific guideline or study on each page.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { org: "WHO", name: "World Health Organization", use: "BMI classification, growth standards, public health guidelines" },
            { org: "NIH", name: "National Institutes of Health", use: "Dietary Reference Intakes, clinical trial data, nutrition research" },
            { org: "ACOG", name: "American College of Obstetricians and Gynecologists", use: "Pregnancy guidelines, nutrition in pregnancy, labor and delivery standards" },
            { org: "ADA", name: "American Diabetes Association", use: "A1C diagnostic criteria, blood sugar standards, diabetes care guidelines" },
            { org: "CDC", name: "Centers for Disease Control and Prevention", use: "Child/teen growth charts, BMI-for-age percentiles, food safety data" },
            { org: "FDA", name: "U.S. Food and Drug Administration", use: "Food safety guidelines, safe internal temperatures, pregnancy food safety" },
            { org: "PubMed", name: "National Library of Medicine", use: "Peer-reviewed studies cited for specific clinical claims and formula papers" },
            { org: "NHS", name: "National Health Service (UK)", use: "Evidence-based guidance on nutrition, pregnancy, and general health" },
          ].map((s) => (
            <div key={s.org} className="flex gap-3 bg-slate-50 rounded-xl p-4 border border-slate-200">
              <span className="font-black text-brand-600 text-sm shrink-0 w-12">{s.org}</span>
              <div>
                <p className="text-xs font-semibold text-slate-700 mb-0.5">{s.name}</p>
                <p className="text-xs text-slate-400 mb-0">{s.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Calculator methodology */}
      <div className="mb-10">
        <h2 className="text-xl font-extrabold text-slate-900 mb-2">Calculator Methodology</h2>
        <p className="text-slate-500 text-sm mb-5 leading-relaxed">
          Every calculator on this site uses the published formula it claims to use — not an approximation or a proprietary variant. Below are the key equations and their sources.
        </p>
        <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100">
                <th className="text-left px-4 py-3 text-slate-700 font-bold">Calculator</th>
                <th className="text-left px-4 py-3 text-slate-700 font-bold">Formula / Standard</th>
                <th className="text-left px-4 py-3 text-slate-700 font-bold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {[
                { calc: "TDEE / BMR", formula: "Mifflin-St Jeor equation", source: "Mifflin et al., AJCN 1990" },
                { calc: "Pregnancy weight gain", formula: "IOM 2009 gestational weight gain tables", source: "IOM / National Academies 2009" },
                { calc: "Teen BMI", formula: "CDC BMI-for-age growth charts", source: "CDC / Kuczmarski et al. 2000" },
                { calc: "Kidney function (GFR)", formula: "CKD-EPI 2021 equation", source: "Inker et al., NEJM 2021" },
                { calc: "A1C conversion", formula: "IFCC / NGSP conversion formula", source: "ADA Standards of Care 2024" },
                { calc: "Stress (PSS-10)", formula: "Perceived Stress Scale 10-item", source: "Cohen et al. 1983" },
                { calc: "Anxiety (GAD-7)", formula: "Generalized Anxiety Disorder 7-item", source: "Spitzer et al., JAMA 2006" },
                { calc: "Postpartum (EPDS)", formula: "Edinburgh Postnatal Depression Scale", source: "Cox et al. 1987" },
                { calc: "Burnout", formula: "Maslach Burnout Inventory framework", source: "Maslach & Jackson 1981" },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                  <td className="px-4 py-3 font-medium text-slate-700">{row.calc}</td>
                  <td className="px-4 py-3 text-slate-500">{row.formula}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs">{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
        <h2 className="text-base font-bold text-amber-900 mb-3">Medical Disclaimer</h2>
        <p className="text-sm text-amber-800 leading-relaxed mb-0">
          ProHealthIt is an educational health information resource. It is <strong>not a substitute for professional medical advice, diagnosis, or treatment</strong>. Calculators and screening tools on this site reflect published medical criteria — they are not diagnoses. Mental health screening scores are not diagnostic instruments. Pregnancy food safety guidance reflects FDA and ACOG guidelines but does not account for your individual health circumstances. Always consult your doctor, midwife, dietitian, or qualified healthcare provider with questions about your specific health situation.
        </p>
      </div>

      {/* Contact */}
      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-lg font-bold text-slate-900 mb-2">Contact & Corrections</h2>
        <p className="text-slate-500 text-sm mb-1">Found an error? Outdated information? I want to know.</p>
        <p className="text-sm">
          Email: <a href="mailto:hello@prohealthit.com" className="text-brand-600 font-semibold">hello@prohealthit.com</a>
        </p>
        <p className="text-sm text-slate-400 mt-4">Independent health information project · Dehradun, India · Updated May 2026</p>
        <p className="pt-5"><Link href="/tools" className="text-brand-600 font-semibold no-underline hover:underline">Browse all tools →</Link></p>
      </div>

    </div>
  );
}
