import { NextRequest, NextResponse } from 'next/server';
import { getSystemContext } from '@/lib/aiConfig';

const MAX_MESSAGE_LENGTH = 2000;
const MODEL_NAME = 'gemini-flash-latest';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 415 });
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    if (
      typeof body !== 'object' ||
      body === null ||
      !('message' in body) ||
      typeof (body as Record<string, unknown>).message !== 'string'
    ) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const rawMessage = ((body as Record<string, unknown>).message as string).trim();

    if (!rawMessage) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 });
    }

    if (rawMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: `Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` },
        { status: 400 }
      );
    }

    const message = rawMessage.replace(/<[^>]*>/g, '').replace(/[<>]/g, '');

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not configured');
      return NextResponse.json(
        { error: 'AI service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    const systemContext = getSystemContext();
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent`;

    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemContext}\n\nUser message: ${message}`,
              },
            ],
          },
        ],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.7,
        },
        safetySettings: [
          { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
          { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        ],
      }),
    });

    if (!geminiResponse.ok) {
      let errorMessage = geminiResponse.statusText;
      try {
        const errorData = await geminiResponse.json();
        errorMessage = errorData?.error?.message || errorMessage;
      } catch {
        // ignore
      }
      console.error('Gemini API error:', geminiResponse.status, errorMessage);
      return NextResponse.json(
        { error: 'Failed to get a response from AI service. Please try again.' },
        { status: 502 }
      );
    }

    const data = await geminiResponse.json();
    const aiMessage: string =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      'Sorry, I could not generate a response. Please try again.';

    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'Cache-Control': 'no-store',
    });

    return NextResponse.json(
      { success: true, message: aiMessage },
      { status: 200, headers }
    );

  } catch (error) {
    console.error('Chat API unhandled error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}


