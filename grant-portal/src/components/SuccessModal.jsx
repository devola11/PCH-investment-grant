export default function SuccessModal({ referenceNumber, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-md border border-gray-200 shadow-xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200" style={{ backgroundColor: '#1a3c6e' }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-white font-bold text-lg">Application Received</h2>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-7">
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Thank you for submitting your application to the PCH Community Investment Grant program.
            Your submission has been received and is now under review.
          </p>

          <div className="bg-blue-50 border border-blue-200 px-4 py-4 mb-6" style={{ borderLeft: '4px solid #2563a8' }}>
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Your Reference Number
            </div>
            <div className="text-2xl font-bold text-[#1a3c6e] tracking-wider">
              {referenceNumber}
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#2563a8]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>
              A confirmation has been sent to your email address. Please check your inbox and keep
              your reference number for future correspondence.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-sm font-semibold text-white cursor-pointer"
            style={{ backgroundColor: '#2563a8' }}
          >
            Close & Submit Another Application
          </button>
        </div>
      </div>
    </div>
  )
}
