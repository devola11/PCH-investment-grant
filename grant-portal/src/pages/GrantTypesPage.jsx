import { Link } from 'react-router-dom'

const grants = [
  {
    title: 'Personal Financial Assistance',
    amount: 'Up to $5,000',
    desc: 'For individuals facing unexpected financial hardship, covering expenses such as housing, utilities, food, and other essential needs.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Small Business Support',
    amount: 'Up to $15,000',
    desc: 'Designed to help entrepreneurs and small business owners with startup costs, operational expenses, equipment, or business expansion.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Education Grant',
    amount: 'Up to $10,000',
    desc: 'Supporting students and lifelong learners with tuition, books, certification programs, vocational training, and other educational costs.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Medical & Emergency Relief',
    amount: 'Up to $8,000',
    desc: 'For individuals facing sudden medical expenses, emergency situations, or disaster recovery costs that create immediate financial burden.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function GrantTypesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)' }} className="text-white">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
          <div className="inline-block bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-5">
            Funding Programs
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Available Grant Types
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-xl">
            Choose the grant that best fits your needs and apply today. Our committee reviews every
            application individually.
          </p>
        </div>
      </div>

      {/* Grant cards */}
      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
            {grants.map((grant) => (
              <div
                key={grant.title}
                className="bg-white border border-gray-200 flex flex-col"
                style={{ borderTop: '3px solid #2563a8' }}
              >
                <div className="px-4 lg:px-5 pt-5 pb-4 flex-1">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: '#1a3c6e' }}
                  >
                    {grant.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#1a3c6e] mb-1">{grant.title}</h3>

                  {/* Amount badge */}
                  <div
                    className="inline-block text-xs font-bold uppercase tracking-wide px-2 py-1 mb-3"
                    style={{ backgroundColor: '#fef3c7', color: '#92400e' }}
                  >
                    {grant.amount}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{grant.desc}</p>
                </div>

                <div className="px-4 lg:px-5 pb-5">
                  <Link
                    to="/#application-form"
                    onClick={() => {
                      setTimeout(() => {
                        const el = document.getElementById('application-form')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }, 100)
                    }}
                    className="inline-block w-full text-center bg-blue-700 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Info notice */}
          <div
            className="mt-8 border border-gray-200 bg-blue-50 px-5 py-4"
            style={{ borderLeft: '4px solid #2563a8' }}
          >
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-[#1a3c6e]">Note: </span>
              Grant amounts are subject to committee review and available funding. Final disbursement
              may vary based on eligibility assessment and demonstrated financial need.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
