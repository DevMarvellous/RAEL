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

  // 1. Notify the RAEL team of the new submission.
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

  // 2. Send a warm confirmation to the person who submitted.
  //    Uses a separate "auto-reply" EmailJS template whose body is written
  //    to sound human (see NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID).
  //    Optional — if the env var is unset, we simply skip it without failing
  //    the submission (the team notification above already succeeded).
  const autoReplyTemplateId = process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID
  if (autoReplyTemplateId) {
    try {
      await emailjs.send(
        serviceId,
        autoReplyTemplateId,
        {
          to_name: data.fullName,
          to_email: data.email,
          first_name: data.fullName.trim().split(' ')[0] || data.fullName,
          business_name: data.businessName,
          service_needed: data.service,
        },
        publicKey
      )
    } catch (err) {
      // Don't fail the whole submission if only the confirmation bounces.
      console.error('Auto-reply email failed:', err)
    }
  }
}
