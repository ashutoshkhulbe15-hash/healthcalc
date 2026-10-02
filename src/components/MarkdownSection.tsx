import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import React from "react";

function isInternalLink(href: string) {
  return href.startsWith("/");
}

function getCalloutType(children: React.ReactNode): { icon: string; color: string; bg: string; border: string } | null {
  const text = React.Children.toArray(children)
    .map((c) => {
      if (typeof c === "string") return c;
      if (React.isValidElement(c) && (c.props as Record<string,unknown>)?.children) {
        const inner = React.Children.toArray((c.props as Record<string,unknown>).children as React.ReactNode);
        return inner.map((i) => {
          if (typeof i === "string") return i;
          if (React.isValidElement(i) && (i.props as Record<string,unknown>)?.children) return String((i.props as Record<string,unknown>).children);
          return "";
        }).join("");
      }
      return "";
    }).join("").trim();

  if (text.startsWith("Key Takeaway:") || text.startsWith("Takeaway:"))
    return { icon: "💡", color: "text-amber-800", bg: "bg-amber-50", border: "border-amber-200" };
  if (text.startsWith("Tip:") || text.startsWith("Pro Tip:"))
    return { icon: "✅", color: "text-green-800", bg: "bg-green-50", border: "border-green-200" };
  if (text.startsWith("Warning:") || text.startsWith("Caution:") || text.startsWith("Important:"))
    return { icon: "⚠️", color: "text-red-800", bg: "bg-red-50", border: "border-red-200" };
  if (text.startsWith("Note:") || text.startsWith("Did you know:"))
    return { icon: "📌", color: "text-blue-800", bg: "bg-blue-50", border: "border-blue-200" };
  if (text.startsWith("Bottom Line:") || text.startsWith("The Bottom Line:"))
    return { icon: "🎯", color: "text-teal-800", bg: "bg-teal-50", border: "border-teal-200" };
  return null;
}

export function MarkdownSection({ content }: { content: string }) {
  return (
    <div className="article-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-[22px] font-bold text-slate-900 mt-12 mb-5 first:mt-0 pb-2 border-b border-slate-100">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-semibold text-slate-800 mt-8 mb-3">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-[15.5px] leading-[1.85] text-slate-600 mb-5">{children}</p>
          ),
          strong: ({ children }) => <strong className="text-slate-900 font-semibold">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
          a: ({ href, children }) => {
            if (href && isInternalLink(href)) {
              return <Link href={href} className="text-brand-600 font-medium underline underline-offset-2 decoration-brand-200 hover:text-brand-500 hover:decoration-brand-400 transition-colors">{children}</Link>;
            }
            return <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-600 underline underline-offset-2 decoration-brand-200 hover:text-brand-500">{children}</a>;
          },
          ul: ({ children }) => <ul className="pl-5 mb-5 space-y-2 text-[15.5px] leading-[1.8] text-slate-600">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-5 space-y-2 text-[15.5px] leading-[1.8] text-slate-600">{children}</ol>,
          li: ({ children }) => <li className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-[11px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-400">{children}</li>,
          table: ({ children }) => (
            <div className="overflow-x-auto my-6 rounded-xl border border-slate-200"><table className="w-full text-sm border-collapse">{children}</table></div>
          ),
          thead: ({ children }) => <thead className="bg-slate-50">{children}</thead>,
          th: ({ children }) => <th className="px-4 py-3 text-left font-semibold text-slate-700 border-b-2 border-slate-200 whitespace-nowrap">{children}</th>,
          td: ({ children }) => <td className="px-4 py-3 text-slate-600 border-b border-slate-100">{children}</td>,
          blockquote: ({ children }) => {
            const callout = getCalloutType(children);
            if (callout) {
              return (
                <div className={`${callout.bg} ${callout.border} border rounded-xl p-5 my-6`}>
                  <div className="flex gap-3 items-start">
                    <span className="text-xl mt-0.5 shrink-0">{callout.icon}</span>
                    <div className={`${callout.color} text-[15px] leading-[1.75] [&>p]:mb-2 [&>p:last-child]:mb-0`}>{children}</div>
                  </div>
                </div>
              );
            }
            return (
              <blockquote className="relative my-8 pl-6 py-3 border-l-4 border-brand-400 bg-slate-50 rounded-r-xl pr-5">
                <div className="text-[16px] leading-[1.75] text-slate-700 italic [&>p]:mb-0">{children}</div>
              </blockquote>
            );
          },
          hr: () => (
            <div className="my-10 flex items-center gap-3">
              <div className="flex-1 h-px bg-slate-200" /><div className="w-1.5 h-1.5 rounded-full bg-brand-300" /><div className="w-1.5 h-1.5 rounded-full bg-brand-200" /><div className="w-1.5 h-1.5 rounded-full bg-brand-300" /><div className="flex-1 h-px bg-slate-200" />
            </div>
          ),
          code: ({ children }) => <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-slate-700">{children}</code>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
