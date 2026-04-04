import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { FAQSchema } from "./Schema";
import { extractFAQs } from "@/lib/faq";

function isInternalLink(href: string) {
  return href.startsWith("/");
}

export function MarkdownArticle({ content }: { content: string }) {
  // Extract FAQs for schema markup
  const faqs = extractFAQs(content);

  // Strip the frontmatter (title, byline, hr) - we handle those in the page shell
  const stripped = content
    .replace(/^#\s+.+\n/m, "") // remove H1
    .replace(/^\*Written by.+\*\n?/m, "") // remove byline
    .replace(/^\*Last updated.+\*\n?/m, "")
    .replace(/^\*Evidence-based.+\*\n?/m, "")
    .replace(/^---\n?/m, "")
    .trim();

  return (
    <>
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 mb-8 shadow-sm">
      <p className="text-sm text-slate-400 mb-6 pb-6 border-b border-slate-100">
        Written by the ProHealthIt Editorial Team · Last updated: April 2026 ·
        Sources cited below
      </p>
      <div className="article-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-xl font-bold text-slate-900 mt-10 mb-4 first:mt-0">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-[15.5px] leading-[1.8] text-slate-600 mb-4">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="text-slate-900 font-semibold">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic">{children}</em>
            ),
            a: ({ href, children }) => {
              if (href && isInternalLink(href)) {
                return (
                  <Link
                    href={href}
                    className="text-brand-600 underline underline-offset-2 hover:text-brand-500"
                  >
                    {children}
                  </Link>
                );
              }
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-600 underline underline-offset-2 hover:text-brand-500"
                >
                  {children}
                </a>
              );
            },
            ul: ({ children }) => (
              <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[15.5px] leading-[1.8] text-slate-600">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[15.5px] leading-[1.8] text-slate-600">
                {children}
              </ol>
            ),
            li: ({ children }) => <li>{children}</li>,
            table: ({ children }) => (
              <div className="overflow-x-auto my-5">
                <table className="w-full text-sm border-collapse">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-slate-50">{children}</thead>
            ),
            th: ({ children }) => (
              <th className="px-3.5 py-2.5 text-left font-semibold text-slate-700 border-b-2 border-slate-200 whitespace-nowrap">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-3.5 py-2.5 text-slate-600 border-b border-slate-100">
                {children}
              </td>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-brand-200 pl-4 my-4 italic text-slate-500">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="my-8 border-slate-200" />,
            code: ({ children }) => (
              <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">
                {children}
              </code>
            ),
          }}
        >
          {stripped}
        </ReactMarkdown>
      </div>
    </article>
    </>
  );
}
