import Link from "next/link";

/**
 * Visible author + last-updated byline.
 * This is a human-facing E-E-A-T signal: readers and reviewers should be able to
 * see who wrote a page and when it was last reviewed, without digging into schema.
 */
export function AuthorByline({
  lastUpdated,
  readTime,
  accent,
}: {
  lastUpdated?: string;
  readTime?: string;
  accent?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px]">
      <div className="flex items-center gap-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-black shrink-0"
          style={{ background: accent ?? "#0d9488" }}
          aria-hidden="true"
        >
          AK
        </div>
        <span className="text-slate-600">
          Written by{" "}
          <Link
            href="/about"
            className="font-semibold text-slate-800 no-underline hover:underline"
          >
            Ash K
          </Link>
        </span>
      </div>

      {lastUpdated && (
        <>
          <span className="text-slate-300" aria-hidden="true">
            •
          </span>
          <span className="text-slate-500">Updated {lastUpdated}</span>
        </>
      )}

      {readTime && (
        <>
          <span className="text-slate-300" aria-hidden="true">
            •
          </span>
          <span className="text-slate-500">{readTime} read</span>
        </>
      )}

      <>
        <span className="text-slate-300" aria-hidden="true">
          •
        </span>
        <Link
          href="/about"
          className="text-slate-500 no-underline hover:underline"
        >
          Editorial process
        </Link>
      </>
    </div>
  );
}

/**
 * Compact trust strip shown below article content.
 * States plainly how the page was sourced and that it is not medical advice.
 */
export function SourcesNote() {
  return (
    <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-[13px] font-bold text-slate-700 mb-2">
        How this page was researched
      </p>
      <p className="text-[13px] text-slate-600 leading-relaxed mb-3">
        Written by Ash K from primary sources: clinical guidelines (ACOG, CDC,
        FDA, WHO, NIH) and peer-reviewed literature, cited at the end of this
        page. Ash K is a health researcher, not a licensed medical professional,
        and this site does not use fabricated medical reviewers.
      </p>
      <p className="text-[13px] text-slate-500 mb-0">
        This is health information, not medical advice. It does not replace your
        doctor.{" "}
        <Link
          href="/about"
          className="text-brand-600 font-medium no-underline hover:underline"
        >
          Read our editorial process
        </Link>
        {" · "}
        <Link
          href="/disclaimer"
          className="text-brand-600 font-medium no-underline hover:underline"
        >
          Medical disclaimer
        </Link>
      </p>
    </div>
  );
}
