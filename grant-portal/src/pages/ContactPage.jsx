const contactCards = [
  {
    title: 'Email Support',
    primary: 'support@pchgrant.org',
    note: 'We respond within 24 hours',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
  },
  {
    title: 'Call Us',
    primary: '1-800-PCH-GRANT',
    secondary: '1-800-724-4726',
    note: 'Mon–Fri, 9am–5pm EST',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
  {
    title: 'Office Hours',
    primary: 'Monday – Friday',
    secondary: '9:00am – 5:00pm EST',
    note: 'Closed on public holidays',
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <main className="pt-16">
      {/* Page hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)' }} className="text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <div className="inline-block bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-5">
            Contact
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
            Still have questions? Get in touch
          </h1>
          <p className="text-blue-100 text-base sm:text-lg">
            Our support team is happy to help
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center transition-shadow duration-200 hover:shadow-md"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#2563a8' }}
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-[#1a3c6e] mb-2">{card.title}</h3>
                <p className="text-sm font-medium text-gray-800 mb-0.5">{card.primary}</p>
                {card.secondary && (
                  <p className="text-sm text-gray-600 mb-0.5">{card.secondary}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
