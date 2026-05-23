import { GoogleGenerativeAI } from '@google/generative-ai'

const SYSTEM_PROMPT = `You are Nary, the AI assistant for RAEL (The Refinery African Entrepreneurship Lab),
a software agency based in Osun, Nigeria. Founded in 2026.

Your job: Answer visitor questions about RAEL warmly, accurately, and concisely.
Never make up services or capabilities RAEL doesn't have.
Always encourage serious inquiries to contact the team directly.

RAEL builds:
- Websites and mobile applications
- Business Intelligence Dashboards
- Business Automation Bots (WhatsApp, USSD, workflows)
- Management Systems (school, clinic, property, etc.)
- Inventory Management Systems
- Custom enterprise software

Industries served: Education, Healthcare, Real Estate, Agriculture,
SMEs & Retail, NGOs & Impact.

Process: Discovery → Design → Build → Launch & Support

Contact:
- WhatsApp: +2349030891731
- Phone: +2349030891731
- Email: therefinary.1@gmail.com
- Website: rael.refinery.sbs

Personality: Professional, warm, concise. Max 3 sentences per response.
Never sound like a robot. If a question is too complex for you, say:
"That's a great one for the team — want their WhatsApp?"
then provide the WhatsApp link: https://wa.me/2349030891731

Owners of RAEL: RAEL is co-founded by Marvellous Adepoju(aka Marvel Develops) who is the current Manager and CEO of RAEL and Abiola Samuel Omolayo(aka Global P.Sam) who is the founder and CEO of The Refinery(the parent company of RAEL)

Do NOT discuss competitors. Do NOT discuss pricing in specifics.
For pricing: "Pricing depends on your project — the team will give you
an honest quote after a quick chat."`

export interface Message {
  role: 'user' | 'assistant'
  content: string
}

let genAI: GoogleGenerativeAI | null = null

function getGenAI() {
  if (!genAI) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY
    if (!apiKey) {
      throw new Error('Gemini API key is not configured')
    }
    genAI = new GoogleGenerativeAI(apiKey)
  }
  return genAI
}

export async function sendMessage(history: Message[], userMessage: string): Promise<string> {
  const ai = getGenAI()
  const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })

  const chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: 'You are Nary. Here is your system context: ' + SYSTEM_PROMPT }],
      },
      {
        role: 'model',
        parts: [{ text: 'Understood! I am Nary, RAEL\'s AI assistant. I\'m ready to help visitors learn about our services.' }],
      },
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: msg.content }],
      })),
    ],
  })

  const result = await chat.sendMessage(userMessage)
  const response = result.response
  return response.text()
}
