import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { applicationSchema } from '../lib/schema'
import { useSubmitApplication } from '../hooks/useSubmitApplication'
import FormSection from './FormSection'
import SuccessModal from './SuccessModal'

function Field({ label, error, required, children, fullWidth }) {
  return (
    <div className={fullWidth ? 'sm:col-span-2' : ''}>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

const inputClass =
  'w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-[#2563a8] focus:ring-1 focus:ring-[#2563a8]'
const selectClass =
  'w-full border border-gray-300 px-3 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#2563a8] focus:ring-1 focus:ring-[#2563a8] appearance-none'

export default function ApplicationForm() {
  const { submitApplication, isSubmitting } = useSubmitApplication()
  const [submittedRef, setSubmittedRef] = useState(null)
  const [serverError, setServerError] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(applicationSchema) })

  async function onSubmit(data) {
    setServerError(null)
    const result = await submitApplication(data)
    if (result.success) {
      setSubmittedRef(result.reference_number)
    } else {
      setServerError('Submission failed. Please try again or contact support.')
    }
  }

  function handleModalClose() {
    setSubmittedRef(null)
    reset()
  }

  return (
    <>
      {submittedRef && (
        <SuccessModal referenceNumber={submittedRef} onClose={handleModalClose} />
      )}

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#1a3c6e] uppercase tracking-wide mb-1">
            Grant Application Form
          </h2>
          <p className="text-sm text-gray-500">
            All fields marked with <span className="text-red-500">*</span> are required.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {/* Section 1 — Personal Information */}
          <FormSection title="Section 1 — Personal Information">
            <Field label="Full Name" error={errors.full_name?.message} required>
              <input {...register('full_name')} className={inputClass} placeholder="e.g. Jane Doe" />
            </Field>

            <Field label="Date of Birth" error={errors.date_of_birth?.message} required>
              <input {...register('date_of_birth')} type="date" className={inputClass} />
            </Field>

            <Field label="Sex" error={errors.sex?.message} required>
              <div className="relative">
                <select {...register('sex')} className={selectClass} defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </Field>

            <Field label="Marital Status" error={errors.marital_status?.message}>
              <div className="relative">
                <select {...register('marital_status')} className={selectClass} defaultValue="">
                  <option value="">Select...</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </Field>

            <Field label="Residential Address" error={errors.address?.message} required fullWidth>
              <input
                {...register('address')}
                className={inputClass}
                placeholder="Street address, city, state, ZIP"
              />
            </Field>
          </FormSection>

          {/* Section 2 — Contact Details */}
          <FormSection title="Section 2 — Contact Details">
            <Field label="Email Address" error={errors.email?.message} required>
              <input
                {...register('email')}
                type="email"
                className={inputClass}
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Phone Number" error={errors.phone?.message} required>
              <input
                {...register('phone')}
                type="tel"
                className={inputClass}
                placeholder="e.g. +1 555 000 0000"
              />
            </Field>
          </FormSection>

          {/* Section 3 — Financial Information */}
          <FormSection title="Section 3 — Financial Information">
            <Field label="Occupation" error={errors.occupation?.message}>
              <input
                {...register('occupation')}
                className={inputClass}
                placeholder="e.g. Self-employed, Teacher..."
              />
            </Field>

            <Field label="Monthly Income Range" error={errors.monthly_income?.message} required>
              <div className="relative">
                <select {...register('monthly_income')} className={selectClass} defaultValue="">
                  <option value="" disabled>Select range...</option>
                  <option>Under $1,000</option>
                  <option>$1,000–$2,999</option>
                  <option>$3,000–$4,999</option>
                  <option>$5,000–$7,499</option>
                  <option>$7,500+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </Field>

            <Field label="Grant Type" error={errors.grant_type?.message} required>
              <div className="relative">
                <select {...register('grant_type')} className={selectClass} defaultValue="">
                  <option value="" disabled>Select grant type...</option>
                  <option>Personal financial assistance</option>
                  <option>Small business support</option>
                  <option>Education grant</option>
                  <option>Medical & emergency relief</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </Field>

            <Field label="Preferred Disbursement" error={errors.disbursement_preference?.message}>
              <div className="relative">
                <select {...register('disbursement_preference')} className={selectClass} defaultValue="">
                  <option value="">Select method...</option>
                  <option>Bank transfer</option>
                  <option>Check by mail</option>
                  <option>Digital payment</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </Field>

            <Field label="Reason for Application" error={errors.reason?.message} fullWidth>
              <textarea
                {...register('reason')}
                rows={4}
                className={inputClass + ' resize-none'}
                placeholder="Briefly describe why you are applying for this grant..."
              />
            </Field>
          </FormSection>

          {/* Server error */}
          {serverError && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-200 text-sm text-red-700">
              {serverError}
            </div>
          )}

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-8 py-3 text-sm font-semibold text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundColor: '#2563a8' }}
            >
              {isSubmitting && (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
