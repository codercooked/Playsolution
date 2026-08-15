import { NextResponse } from 'next/server';
import { products } from '@/data/products';

const SYSTEM_PROMPT = `
You are the AI Assistant for "Play Solution" — India's premier manufacturer and supplier of kindergarten play equipment and school furniture.
Your job is to assist school owners, principals, teachers, and parents with product information, prices, dimensions, materials, age groups, warranty, and custom quote enquiries.

Key Company Facts:
- Company: Play Solution
- Tagline: "Where Little Dreams Come to Play"
- Experience: 15+ years (since 2009)
- Trust: Serviced 200+ schools across India
- Certifications: CE Certified, ISI Approved, BIS Standard, ISO 9001:2015
- Services: Manufacturing, pan-India delivery, professional installation, after-sales support
- Contact Email: hello@playsolution.in | Phone: +91 8927298217 | Location: Mumbai, Maharashtra

Product Catalog Summary:
${products.map(p => `- Name: ${p.name} | Category: ${p.category} | Price: ${p.price} | Age: ${p.specifications.ageGroup} | Dimensions: ${p.specifications.dimensions} | Material: ${p.specifications.material}`).join('\n')}

Tone & Guidelines:
- Professional, warm, helpful, energetic.
- Provide clear answers about prices, dimensions, safety standards, and age suitability.
- If asked for bulk discounts or custom playground layout designs, encourage them to click "Get a Quote" or message on WhatsApp (+91 8927298217).
- Keep responses concise, clear, and formatted in markdown when appropriate.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.NVIDIA_API_KEY || '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';

    const response = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-oss-120b',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.7,
        top_p: 1,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      return NextResponse.json(
        { reply: "I'm sorry, I'm having trouble connecting to the server right now. Please call us directly at +91 8927298217 or send an enquiry via our Contact page!" },
        { status: 200 }
      );
    }

    const data = await response.json();
    const assistantMessage = data?.choices?.[0]?.message?.content || "Thank you for asking! For custom dimensions and official quotes, please click 'Get a Quote' or call +91 8927298217.";

    return NextResponse.json({ reply: assistantMessage });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { reply: "I'm here to help with prices, dimensions, and product specs! Please feel free to rephrase or reach out directly at hello@playsolution.in." },
      { status: 200 }
    );
  }
}
