import { MarkdownSection } from "./MarkdownSection";
import { FAQSchema } from "./Schema";
import { extractFAQs } from "@/lib/faq";
import React from "react";

/**
 * SplitArticle renders markdown content split by H2 headings,
 * allowing React components (SVGs, diagrams) to be inserted between sections.
 * 
 * Usage:
 * <SplitArticle content={content} injections={{
 *   2: <MySVG />,        // After section 2
 *   4: <AnotherSVG />,   // After section 4
 * }} />
 */
export function SplitArticle({
  content,
  injections = {},
}: {
  content: string;
  injections?: Record<number, React.ReactNode>;
}) {
  const faqs = extractFAQs(content);

  // Strip frontmatter
  const stripped = content
    .replace(/^#\s+.+\n/m, "")
    .replace(/^\*Written by.+\*\n?/m, "")
    .replace(/^\*Last updated.+\*\n?/m, "")
    .replace(/^\*Evidence-based.+\*\n?/m, "")
    .replace(/^---\n?/m, "")
    .trim();

  // Split by H2 headings, keeping the heading with its section
  const parts = stripped.split(/(?=^## )/m).filter((s) => s.trim());

  return (
    <>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 mb-8 shadow-sm">
        <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-100">
          Written by the ProHealthIt Editorial Team · Last updated: April 2026 · Sources cited below
        </p>
        {parts.map((section, i) => (
          <React.Fragment key={i}>
            <MarkdownSection content={section} />
            {injections[i] && (
              <div className="my-2">{injections[i]}</div>
            )}
          </React.Fragment>
        ))}
      </article>
    </>
  );
}
