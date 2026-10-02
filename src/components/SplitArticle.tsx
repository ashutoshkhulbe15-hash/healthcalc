import { MarkdownSection } from "./MarkdownSection";
import { FAQSchema } from "./Schema";
import { extractFAQs } from "@/lib/faq";
import { extractHeadings } from "@/lib/headings";
import { TableOfContents } from "./TableOfContents";
import React from "react";

export function SplitArticle({
  content,
  injections = {},
}: {
  content: string;
  injections?: Record<number, React.ReactNode>;
}) {
  const faqs = extractFAQs(content);
  const headings = extractHeadings(content);

  const stripped = content
    .replace(/^<!--.*?-->\n?/m, "")
    .replace(/^#\s+.+\n/m, "")
    .replace(/^\*Written by.+\*\n?/m, "")
    .replace(/^\*Last updated.+\*\n?/m, "")
    .replace(/^\*Evidence-based.+\*\n?/m, "")
    .replace(/^---\n?/m, "")
    .trim();

  const parts = stripped.split(/(?=^## )/m).filter((s) => s.trim());

  const getSectionId = (section: string) => {
    const headingMatch = section.match(/^## (.+)$/m);
    if (!headingMatch) return undefined;
    return headingMatch[1]
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 60);
  };

  const hasTOC = headings.length > 2;

  const articleContent = (
    <article className="mb-8 min-w-0">
      {parts.map((section, i) => (
        <React.Fragment key={i}>
          <div id={getSectionId(section)} className="scroll-mt-24">
            <MarkdownSection content={section} />
          </div>
          {injections[i] && (
            <div className="my-2">{injections[i]}</div>
          )}
        </React.Fragment>
      ))}
    </article>
  );

  return (
    <>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      {hasTOC ? (
        <div className="flex gap-0" style={{ alignItems: "stretch" }}>
          <div className="hidden lg:block w-[200px] shrink-0 pr-6 pt-2 relative">
            <TableOfContents headings={headings} />
          </div>
          <div className="flex-1 min-w-0 lg:pl-6 lg:border-l lg:border-slate-200">
            {articleContent}
          </div>
        </div>
      ) : (
        articleContent
      )}
    </>
  );
}
