export default function SuccessModal({ referenceNumber, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white w-full max-w-md rounded-xl shadow-2xl overflow-hidden">

        {/* Green checkmark circle */}
        <div className="flex flex-col items-center pt-8 pb-4 px-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h2 className="text-xl font-bold text-gray-900 text-center mb-3">
            Application Submitted Successfully
          </h2>

          <p className="text-sm text-gray-600 text-center leading-relaxed mb-6">
            Congratulations, you are eligible to receive your grant from the PCH. Kindly contact
            your claiming agent,{' '}
            <span className="font-semibold text-[#1a3c6e]">Mr. Howie Guja</span>, to receive
            your grant!
          </p>

          {/* Reference number */}
          <div
            className="w-full border border-blue-200 bg-blue-50 px-4 py-4 mb-6 rounded"
            style={{ borderLeft: '4px solid #2563a8' }}
          >
            <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Your Reference Number
            </div>
            <div className="text-2xl font-bold text-[#1a3c6e] tracking-wider">
              {referenceNumber}
            </div>
          </div>
        </div>

        {/* Close button */}
        <div className="px-6 pb-7">
          <button
            onClick={onClose}
            className="w-full py-3 text-sm font-semibold text-white rounded cursor-pointer transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#2563a8' }}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}
