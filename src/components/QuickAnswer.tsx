export function QuickAnswer({ answer }: { answer: string }) {
  return (
    <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 mb-8">
      <div className="flex gap-3 items-start">
        <span className="text-xl mt-0.5 shrink-0">⚡</span>
        <div>
          <div className="text-xs font-bold text-brand-600 uppercase tracking-wider mb-1.5">Quick Answer</div>
          <p className="text-[15px] leading-[1.7] text-brand-900 mb-0 font-medium">{answer}</p>
        </div>
      </div>
    </div>
  );
}
