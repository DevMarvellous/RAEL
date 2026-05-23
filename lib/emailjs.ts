import emailjs from '@emailjs/browser'

export interface ContactFormData {
  fullName: string
  businessName: string
  email: string
  whatsapp: string
  industry: string
  service: string
  message: string
}

export async function sendContactForm(data: ContactFormData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS configuration is missing')
  }

  await emailjs.send(
    serviceId,
    templateId,
    {
      from_name: data.fullName,
      business_name: data.businessName,
      from_email: data.email,
      whatsapp_number: data.whatsapp,
      industry: data.industry,
      service_needed: data.service,
      message: data.message,
    },
    publicKey
  )
}
