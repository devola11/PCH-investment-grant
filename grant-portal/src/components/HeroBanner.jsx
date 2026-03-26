export default function HeroBanner() {
  const tiers = [
    { label: 'Standard Grant', amount: '$5,000', desc: 'For individuals with immediate financial need' },
    { label: 'Business Grant', amount: '$15,000', desc: 'For small business owners and entrepreneurs' },
    { label: 'Major Grant', amount: '$50,000', desc: 'For significant community impact projects' },
  ]

  return (
    <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)' }} className="text-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 sm:py-16 md:py-20">
        {/* Badge */}
        <div className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-5">
          Official Grant Program
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
          PCH Community<br />Investment Grant
        </h1>
        <p className="text-blue-100 text-sm sm:text-base md:text-lg max-w-xl mb-8">
          Supporting individuals and small businesses with financial assistance to build stronger communities.
        </p>

        {/* Grant Tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className="bg-white/10 border border-white/20 px-5 py-5"
            >
              <div className="text-2xl font-bold text-white mb-1">{tier.amount}</div>
              <div className="text-sm font-semibold text-blue-200 mb-2">{tier.label}</div>
              <div className="text-xs text-blue-100 leading-relaxed">{tier.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
