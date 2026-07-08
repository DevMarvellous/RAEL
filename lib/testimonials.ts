export interface Testimonial {
  /** The client's words, typed out (used as the readable quote). */
  quote: string
  /** Person's name, or company name if anonymous. */
  name: string
  /** Role + company, e.g. "Operations Lead · ABC Logistics". */
  role: string
  /** The client's industry — shown honestly (not every client is real estate). */
  industry?: string
  /** Short summary of what RAEL actually built for them. */
  built?: string
  /**
   * Screenshot of the real testimonial (WhatsApp chat, email, review, etc.).
   * Drop the file in /public/testimonials/ and reference it here,
   * e.g. '/testimonials/abc-logistics-chat.png'. This is the proof.
   */
  screenshot?: string
  /** Optional photo/logo of the person or company for the avatar. */
  image?: string
}

// Real testimonials only. Fill in the placeholder below with the real client's
// details, then add a screenshot to /public/testimonials/ and reference it.
export const testimonials: Testimonial[] = [
  {
    // TODO: replace all fields below with the real client's details before publishing.
    quote:
      'PLACEHOLDER — paste the client\'s real words here. e.g. "RAEL built and delivered exactly what we needed, on time and without stress."',
    name: 'Client / Company Name',
    role: 'Role · Company',
    industry: 'Logistics & Procurement',
    built:
      'PLACEHOLDER — describe what was built here. e.g. "A procurement tracking system and a WhatsApp bot that logs and confirms every order automatically."',
    // screenshot: '/testimonials/client-screenshot.png', // add the real screenshot file, then uncomment
    // image: '/testimonials/client-logo.png',
  },
]

/** First N testimonials, for a homepage preview (not currently used). */
export function getFeaturedTestimonials(count = 3): Testimonial[] {
  return testimonials.slice(0, count)
}
