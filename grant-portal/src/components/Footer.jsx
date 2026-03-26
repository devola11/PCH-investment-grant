import { Link } from 'react-router-dom'
import Logo from './Logo'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Apply Now', to: '/#apply' },
  { label: 'Check Status', to: '/status' },
  { label: 'FAQ', to: '/faq' },
]

const grantTypes = [
  { label: 'Personal', to: '/grant-types' },
  { label: 'Business', to: '/grant-types' },
  { label: 'Education', to: '/grant-types' },
  { label: 'Medical', to: '/grant-types' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a' }}>
      {/* Main footer body */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand column — centered on mobile */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
              The PCH Community Investment Grant program supports individuals and small businesses
              with financial assistance across the nation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f59e0b' }}>
              Quick Links
            </h4>
            <ul className="space-y-2 text-center sm:text-left">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#94a3b8' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Grant Types */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f59e0b' }}>
              Grant Types
            </h4>
            <ul className="space-y-2 text-center sm:text-left">
              {grantTypes.map((g) => (
                <li key={g.label}>
                  <Link
                    to={g.to}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: '#94a3b8' }}
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#f59e0b' }}>
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm w-full" style={{ color: '#94a3b8' }}>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@pchgrant.org</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>1-800-PCH-GRANT</span>
              </li>
              <li className="flex items-start justify-center sm:justify-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Mon–Fri 9am–5pm EST</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar — stacks vertically on mobile */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-center sm:text-left" style={{ color: '#64748b' }}>
            &copy; 2026 PCH Grant Portal. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs" style={{ color: '#64748b' }}>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
