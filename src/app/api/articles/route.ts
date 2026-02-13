import { NextRequest, NextResponse } from "next/server";
import { getDynamicArticles, saveDynamicArticle } from "@/lib/articles-db";

export async function GET() {
  const articles = getDynamicArticles();
  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, category, categoryColor, content, excerpt, readTime } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Judul dan konten wajib diisi" },
        { status: 400 }
      );
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    // Check for duplicate slug
    const existing = getDynamicArticles();
    if (existing.some((a) => a.slug === slug)) {
      return NextResponse.json(
        { error: "Artikel dengan judul serupa sudah ada" },
        { status: 409 }
      );
    }

    const article = {
      slug,
      title,
      category: category || "Umum",
      categoryColor: categoryColor || "bg-gray-100 text-gray-700",
      excerpt: excerpt || content.substring(0, 200) + "...",
      readTime: readTime || "5 min",
      image: "/images/desa-petani.png",
      datePublished: new Date().toISOString().split("T")[0],
      content,
      createdAt: new Date().toISOString(),
    };

    saveDynamicArticle(article);

    return NextResponse.json(
      { success: true, slug: article.slug },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
