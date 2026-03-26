const stats = [
  { value: '10,000+', label: 'Applicants Served' },
  { value: '$2M+', label: 'Total Awarded' },
  { value: 'Since 2020', label: 'Years in Service' },
]

const steps = [
  {
    number: 1,
    title: 'Submit Your Application',
    desc: 'Complete our secure online application form with your personal and financial details.',
  },
  {
    number: 2,
    title: 'Committee Review',
    desc: 'Our dedicated grants committee evaluates each submission based on eligibility and need.',
  },
  {
    number: 3,
    title: 'Receive Your Decision',
    desc: 'Applicants are notified by email within 5–7 business days with a final decision.',
  },
  {
    number: 4,
    title: 'Funds Disbursed',
    desc: 'Approved applicants receive funds via their preferred payment method promptly.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)' }} className="text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <div className="inline-block bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-5">
            Our Mission
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-5">
            About PCH Grant Portal
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl leading-relaxed">
            We are committed to empowering individuals and communities through accessible financial
            assistance programs that create lasting positive change.
          </p>
        </div>
      </div>

      {/* Mission statement */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-[#1a3c6e] uppercase tracking-wide mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The PCH Community Investment Grant program was established to bridge the financial gap
              for individuals facing hardship and small businesses seeking growth capital. We believe
              that access to financial resources should not be limited by circumstance, and we are
              dedicated to providing transparent, fair, and timely assistance to those who need it most.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each application is reviewed by our experienced grants committee, ensuring that funds
              reach eligible applicants quickly and efficiently. We uphold the highest standards of
              integrity and accountability in every decision we make.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-gray-200 px-6 py-6 sm:py-8 text-center w-full"
                style={{ borderTop: '3px solid #2563a8' }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#1a3c6e] mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold text-[#1a3c6e] uppercase tracking-wide mb-8">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-3 sm:gap-4 border border-gray-200 p-4 sm:p-5 bg-gray-50">
                <div
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: '#1a3c6e' }}
                >
                  {step.number}
                </div>
                <div>
                  <div className="font-bold text-[#1a3c6e] mb-1">{step.title}</div>
                  <div className="text-sm text-gray-500 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
