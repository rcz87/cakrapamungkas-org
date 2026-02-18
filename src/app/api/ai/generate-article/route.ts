import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest } from "@/lib/auth";
import { checkRateLimit } from "@/lib/rate-limit";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_TIMEOUT_MS = 30000;

export async function POST(request: NextRequest) {
  const isAuth = await authenticateRequest();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Rate limit: max 5 AI generations per 15 minutes per IP
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const { allowed, retryAfterSeconds } = checkRateLimit(`ai:${ip}`);
  if (!allowed) {
    return NextResponse.json(
      { error: `Terlalu banyak permintaan AI. Coba lagi dalam ${Math.ceil(retryAfterSeconds / 60)} menit.` },
      { status: 429 }
    );
  }

  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "API key OpenAI belum dikonfigurasi" },
      { status: 500 }
    );
  }

  try {
    const { topic, category, tone } = await request.json();

    if (!topic || !String(topic).trim()) {
      return NextResponse.json(
        { error: "Topik artikel wajib diisi" },
        { status: 400 }
      );
    }

    const trimmedTopic = String(topic).trim().slice(0, 500);

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
- Topik: ${trimmedTopic}
- Kategori: ${category || "Umum"}
- Gaya penulisan: ${tone || "informatif dan profesional"}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

    try {
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
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
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
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof DOMException && err.name === "AbortError") {
        return NextResponse.json(
          { error: "Permintaan ke AI timeout. Coba lagi." },
          { status: 504 }
        );
      }
      throw err;
    }
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
