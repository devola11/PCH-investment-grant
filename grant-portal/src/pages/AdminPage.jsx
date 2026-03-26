import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function AdminPage() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchApplications() {
      const { data, error } = await supabase
        .from('grant_applications')
        .select('created_at, full_name, email, grant_type, monthly_income, reference_number')
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
      } else {
        setApplications(data)
      }
      setLoading(false)
    }

    fetchApplications()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div style={{ backgroundColor: '#1a3c6e' }} className="text-white px-6 py-5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">PCH Grant Portal — Admin</h1>
          <p className="text-blue-200 text-sm mt-0.5">All submitted grant applications</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-16 text-gray-500">Loading submissions...</div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-500">
                {applications.length} submission{applications.length !== 1 ? 's' : ''} total
              </p>
            </div>

            <div className="bg-white border border-gray-200 overflow-x-auto">
              {applications.length === 0 ? (
                <div className="text-center py-16 text-gray-400 text-sm">
                  No applications submitted yet.
                </div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200" style={{ backgroundColor: '#f8fafc' }}>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Date
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Name
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Email
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Grant Type
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Income Range
                      </th>
                      <th className="text-left px-4 py-3 font-semibold text-[#1a3c6e] text-xs uppercase tracking-wide">
                        Reference #
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, idx) => (
                      <tr
                        key={app.reference_number}
                        className={`border-b border-gray-100 ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                          {new Date(app.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </td>
                        <td className="px-4 py-3 font-medium text-gray-800">{app.full_name}</td>
                        <td className="px-4 py-3 text-gray-600">{app.email}</td>
                        <td className="px-4 py-3 text-gray-600">{app.grant_type}</td>
                        <td className="px-4 py-3 text-gray-600">{app.monthly_income}</td>
                        <td className="px-4 py-3">
                          <span
                            className="text-xs font-mono font-semibold px-2 py-1"
                            style={{ backgroundColor: '#e8f0fb', color: '#1a3c6e' }}
                          >
                            {app.reference_number}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
