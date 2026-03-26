export default function FormSection({ title, children }) {
  return (
    <div className="bg-white border border-gray-200 mb-6">
      <div className="px-6 py-3 border-b border-gray-200" style={{ backgroundColor: '#f8fafc' }}>
        <h3 className="text-sm font-bold text-[#1a3c6e] uppercase tracking-wide">{title}</h3>
      </div>
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">{children}</div>
      </div>
    </div>
  )
}
