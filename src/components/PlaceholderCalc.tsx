"use client";

export function PlaceholderCalc({ name }: { name: string }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 md:p-10 mb-8 shadow-sm">
      <div className="text-center py-12">
        <div className="text-4xl mb-4">🔧</div>
        <h2 className="text-lg font-bold text-slate-700 mb-2">
          {name} — Coming Soon
        </h2>
        <p className="text-sm text-slate-400 max-w-md mx-auto">
          The interactive calculator for this page is being built. The
          evidence-based article below is ready for you.
        </p>
      </div>
    </div>
  );
}
