export default function EligibilityNotice() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-6">
      <div
        className="border border-gray-200 bg-blue-50 px-5 py-4"
        style={{ borderLeft: '4px solid #2563a8' }}
      >
        <div className="flex items-start gap-3">
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            style={{ color: '#2563a8' }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
          <div>
            <div className="font-semibold text-[#1a3c6e] mb-1 text-sm">Eligibility Requirements</div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Applicants must be 18 years of age or older, a legal resident, and demonstrate
              financial need. All information provided is subject to verification. False or
              misleading information will result in disqualification.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
