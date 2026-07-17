"use client";
import { useEffect, useState } from "react";

export function TableOfContents({ headings }: { headings: { id: string; text: string }[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div style={{ position: "sticky", top: "5.5rem" }}>
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Contents</p>
      <div className="border-l-2 border-slate-200 pl-3 space-y-0.5 max-h-[calc(100vh-8rem)] overflow-y-auto">
        {headings.map(({ id, text }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`block text-[12.5px] leading-relaxed py-1 no-underline transition-colors ${
              activeId === id
                ? "text-brand-600 font-semibold border-l-2 border-brand-500 -ml-[14px] pl-[11px]"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {text}
          </a>
        ))}
      </div>
    </div>
  );
}
