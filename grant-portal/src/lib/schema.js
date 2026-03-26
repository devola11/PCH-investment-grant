import { z } from 'zod'

export const applicationSchema = z.object({
  full_name: z.string().min(2, 'Full name must be at least 2 characters'),
  date_of_birth: z.string().min(1, 'Date of birth is required'),
  sex: z.enum(['Male', 'Female', 'Prefer not to say'], {
    required_error: 'Please select your sex',
  }),
  marital_status: z.enum(['Single', 'Married', 'Divorced', 'Widowed']).optional(),
  address: z.string().min(5, 'Please enter your full residential address'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  occupation: z.string().optional(),
  monthly_income: z.enum(
    ['Under $1,000', '$1,000–$2,999', '$3,000–$4,999', '$5,000–$7,499', '$7,500+'],
    { required_error: 'Please select your monthly income range' }
  ),
  grant_type: z.enum(
    [
      'Personal financial assistance',
      'Small business support',
      'Education grant',
      'Medical & emergency relief',
    ],
    { required_error: 'Please select a grant type' }
  ),
  disbursement_preference: z
    .enum(['Bank transfer', 'Check by mail', 'Digital payment'])
    .optional(),
  reason: z.string().optional(),
})
