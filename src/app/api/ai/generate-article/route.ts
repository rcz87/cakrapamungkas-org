import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "API key OpenAI belum dikonfigurasi" },
      { status: 500 }
    );
  }

  try {
    const { topic, category, tone } = await request.json();

    if (!topic || !topic.trim()) {
      return NextResponse.json(
        { error: "Topik artikel wajib diisi" },
        { status: 400 }
      );
    }

    const systemPrompt = `Kamu adalah penulis artikel pertanian profesional untuk website CV. Cakra Pamungkas Mandiri, perusahaan agribisnis di Indonesia yang bergerak di penggilingan padi, jual beli gabah, dan sarana produksi pertanian.

Ketentuan penulisan:
1. Tulis artikel dalam Bahasa Indonesia yang informatif, akurat, dan relevan untuk petani/pelaku agribisnis Indonesia
2. Gunakan format Markdown yang rapi (## untuk heading, ### untuk sub-heading, - untuk list, **bold**, *italic*)
3. Panjang artikel 800-1500 kata
4. Sertakan pendahuluan, beberapa bagian utama, dan kesimpulan
5. Gunakan bahasa yang mudah dipahami namun tetap profesional
6. JANGAN sertakan judul utama (H1/#) karena judul sudah ada di field terpisah
7. Langsung mulai dari pendahuluan`;

    const userPrompt = `Buatkan artikel dengan detail berikut:
- Topik: ${topic.trim()}
- Kategori: ${category || "Umum"}
- Gaya penulisan: ${tone || "informatif dan profesional"}`;

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.8,
        max_tokens: 4096,
      }),
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => null);
      console.error("OpenAI API error:", errData);
      return NextResponse.json(
        { error: "Gagal menghubungi AI. Coba lagi nanti." },
        { status: 502 }
      );
    }

    const data = await res.json();
    const generatedText = data?.choices?.[0]?.message?.content || "";

    if (!generatedText) {
      return NextResponse.json(
        { error: "AI tidak menghasilkan konten. Coba topik lain." },
        { status: 422 }
      );
    }

    return NextResponse.json({ content: generatedText });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
