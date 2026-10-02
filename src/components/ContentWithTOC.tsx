import { TableOfContents } from "./TableOfContents";
import { extractHeadings } from "@/lib/headings";

export function ContentWithTOC({
  content,
  children,
}: {
  content?: string;
  children: React.ReactNode;
}) {
  const headings = content ? extractHeadings(content) : [];

  return (
    <div className="flex gap-0 items-start">
      {headings.length > 2 && (
        <div className="hidden lg:block w-[200px] shrink-0 border-r border-slate-200 pr-0">
          <TableOfContents headings={headings} />
        </div>
      )}
      <div className={`flex-1 min-w-0 ${headings.length > 2 ? "lg:pl-8" : ""}`}>
        {children}
      </div>
    </div>
  );
}
