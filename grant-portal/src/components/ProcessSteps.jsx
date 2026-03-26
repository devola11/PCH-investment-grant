const steps = [
  {
    number: 1,
    title: 'Apply',
    desc: 'Complete the online application form with your personal and financial details.',
  },
  {
    number: 2,
    title: 'Review',
    desc: 'Our grants committee reviews your submission within 5–7 business days.',
  },
  {
    number: 3,
    title: 'Decision',
    desc: 'You will be notified by email with the outcome of your application.',
  },
  {
    number: 4,
    title: 'Disbursement',
    desc: 'Approved funds are disbursed via your preferred payment method.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-xl font-bold text-[#1a3c6e] mb-6 uppercase tracking-wide">
        How It Works
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {steps.map((step, idx) => (
          <div key={step.number} className="flex flex-col items-start">
            {/* Connector line for desktop only */}
            <div className="flex items-center w-full mb-3 md:mb-4">
              <div
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                style={{ backgroundColor: '#2563a8' }}
              >
                {step.number}
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block flex-1 h-px bg-blue-200 ml-2" />
              )}
            </div>
            <div className="font-bold text-[#1a3c6e] mb-1 text-sm md:text-base">{step.title}</div>
            <div className="text-xs md:text-sm text-gray-500 leading-relaxed">{step.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
