export function MedicalDisclaimer() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-8">
      <div className="flex gap-3 items-start">
        <span className="text-lg">⚕️</span>
        <div>
          <div className="text-[13px] font-semibold text-amber-800 mb-1">
            Medical Disclaimer
          </div>
          <p className="text-[13px] text-amber-900 leading-relaxed">
            This tool is for informational and educational purposes only. It is
            not a substitute for professional medical advice, diagnosis, or
            treatment. Always consult your healthcare provider with questions
            about your health.
          </p>
        </div>
      </div>
    </div>
  );
}
