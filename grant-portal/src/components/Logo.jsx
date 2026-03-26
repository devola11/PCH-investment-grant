export default function Logo({ variant = 'light' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#1a3c6e'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.75)' : '#2563a8'
  const shieldFill = variant === 'light' ? 'rgba(255,255,255,0.15)' : 'rgba(26,60,110,0.08)'
  const shieldStroke = variant === 'light' ? 'rgba(255,255,255,0.6)' : '#2563a8'
  const markColor = variant === 'light' ? '#ffffff' : '#1a3c6e'

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Shield SVG */}
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shield body */}
        <path
          d="M17 1L3 6.5V17.5C3 25.5 9.5 33 17 36C24.5 33 31 25.5 31 17.5V6.5L17 1Z"
          fill={shieldFill}
          stroke={shieldStroke}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Checkmark inside shield */}
        <path
          d="M11 19L14.5 22.5L23 14"
          stroke={markColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text block */}
      <div className="flex flex-col leading-none">
        <span className="font-bold text-xl tracking-tight" style={{ color: textColor }}>
          PCH
        </span>
        <span className="text-xs font-medium tracking-wide" style={{ color: subColor }}>
          Grant Portal
        </span>
      </div>
    </div>
  )
}
