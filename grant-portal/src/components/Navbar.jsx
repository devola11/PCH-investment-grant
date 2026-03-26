import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Grant Types', to: '/grant-types' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (to) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: '#1a3c6e' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <Logo variant="light" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: isActive(link.to) ? '#f59e0b' : 'rgba(255,255,255,0.85)' }}
              >
                {link.label}
                {isActive(link.to) && (
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5"
                    style={{ backgroundColor: '#f59e0b' }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/"
              className="ml-3 px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#f59e0b', color: '#1a3c6e' }}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{
                transform: mobileOpen ? 'translateY(8px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-0.5 bg-white transition-all duration-200"
              style={{
                transform: mobileOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '320px' : '0',
          backgroundColor: '#152f58',
        }}
      >
        <div className="px-4 pt-2 pb-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 text-sm font-medium border-b border-white/10"
              style={{ color: isActive(link.to) ? '#f59e0b' : 'rgba(255,255,255,0.85)' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-2.5 text-sm font-semibold text-center"
            style={{ backgroundColor: '#f59e0b', color: '#1a3c6e' }}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
