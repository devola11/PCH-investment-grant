import { useState } from 'react'

const faqs = [
  {
    question: 'Who is eligible to apply?',
    answer:
      'Anyone 18 years or older who is a legal resident and can demonstrate financial need. There are no restrictions based on employment status.',
  },
  {
    question: 'Is there a fee to apply?',
    answer:
      'No. Applying is completely free. We will never ask you to pay a fee to receive your grant.',
  },
  {
    question: 'How long does the process take?',
    answer:
      'Applications are reviewed within 5–7 business days. Once approved, funds are disbursed within 10 business days via your chosen payment method.',
  },
  {
    question: 'How will I receive my funds?',
    answer:
      'You can choose between bank transfer, check by mail, or digital payment when submitting your application.',
  },
]

function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1a3c6e] text-sm sm:text-base leading-snug">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
          style={{ color: '#2563a8' }}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          )}
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '200px' : '0' }}
      >
        <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(idx) {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }

  return (
    <main className="pt-16">
      {/* Page hero */}
      <div style={{ background: 'linear-gradient(135deg, #1a3c6e 0%, #2563a8 100%)' }} className="text-white">
        <div className="max-w-3xl mx-auto px-4 py-16 sm:py-20 text-center">
          <div className="inline-block bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest px-3 py-1 mb-5">
            Support
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-100 text-base sm:text-lg">
            Everything you need to know about applying for a PCH grant
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white border border-gray-200">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onClick={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
