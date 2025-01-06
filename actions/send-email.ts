'use server'

import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  content: z.string().min(1, 'Message is required'),
})

export async function sendEmail(formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    content: formData.get('content'),
  })

  if (!validatedFields.success) {
    return { error: 'Invalid form data' }
  }

  const { name, email, content } = validatedFields.data

  // Here you would typically use an email sending service
  // For this example, we'll just log the data
  console.log('Sending email:', { name, email, content })

  // Simulate sending email
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: 'Email sent successfully' }
}
