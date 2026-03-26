import { useState } from 'react'
import { supabase } from '../lib/supabase'

function generateReferenceNumber() {
  const year = new Date().getFullYear()
  const digits = Math.floor(10000 + Math.random() * 90000)
  return `PCH-${year}-${digits}`
}

export function useSubmitApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [referenceNumber, setReferenceNumber] = useState(null)
  const [error, setError] = useState(null)

  async function submitApplication(data) {
    setIsSubmitting(true)
    setError(null)

    const reference_number = generateReferenceNumber()

    const { error: supabaseError } = await supabase
      .from('grant_applications')
      .insert([{ ...data, reference_number }])

    setIsSubmitting(false)

    if (supabaseError) {
      setError(supabaseError.message)
      return { success: false }
    }

    setReferenceNumber(reference_number)
    return { success: true, reference_number }
  }

  return { submitApplication, isSubmitting, referenceNumber, error }
}
