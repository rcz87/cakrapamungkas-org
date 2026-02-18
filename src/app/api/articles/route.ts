import { NextRequest, NextResponse } from "next/server";
import { getDynamicArticles, saveDynamicArticle } from "@/lib/articles-db";
import { authenticateRequest } from "@/lib/auth";
import { VALID_CATEGORIES, getCategoryColor } from "@/data/categories";

const MAX_TITLE_LENGTH = 200;
const MAX_CONTENT_LENGTH = 50000;
const MAX_EXCERPT_LENGTH = 500;

export async function GET() {
  const articles = await getDynamicArticles();
  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  const isAuth = await authenticateRequest();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, category, content, excerpt, readTime, image } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Judul dan konten wajib diisi" },
        { status: 400 }
      );
    }

    const trimmedTitle = String(title).trim();
    const trimmedContent = String(content).trim();
    const trimmedExcerpt = excerpt ? String(excerpt).trim() : "";

    if (trimmedTitle.length > MAX_TITLE_LENGTH) {
      return NextResponse.json(
        { error: `Judul maksimal ${MAX_TITLE_LENGTH} karakter` },
        { status: 400 }
      );
    }

    if (trimmedContent.length > MAX_CONTENT_LENGTH) {
      return NextResponse.json(
        { error: `Konten maksimal ${MAX_CONTENT_LENGTH} karakter` },
        { status: 400 }
      );
    }

    if (trimmedExcerpt.length > MAX_EXCERPT_LENGTH) {
      return NextResponse.json(
        { error: `Ringkasan maksimal ${MAX_EXCERPT_LENGTH} karakter` },
        { status: 400 }
      );
    }

    const validCategory =
      category && VALID_CATEGORIES.includes(category) ? category : "Umum";

    const slug = trimmedTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    if (!slug) {
      return NextResponse.json(
        { error: "Judul tidak valid untuk membuat URL" },
        { status: 400 }
      );
    }

    // Check for duplicate slug
    const existing = await getDynamicArticles();
    if (existing.some((a) => a.slug === slug)) {
      return NextResponse.json(
        { error: "Artikel dengan judul serupa sudah ada" },
        { status: 409 }
      );
    }

    const article = {
      slug,
      title: trimmedTitle,
      category: validCategory,
      categoryColor: getCategoryColor(validCategory),
      excerpt: trimmedExcerpt || trimmedContent.substring(0, 200) + "...",
      readTime: readTime ? String(readTime).slice(0, 20) : "5 min",
      image: image && typeof image === "string" ? image.slice(0, 500) : "/images/desa-petani.png",
      datePublished: new Date().toISOString().split("T")[0],
      content: trimmedContent,
      createdAt: new Date().toISOString(),
    };

    await saveDynamicArticle(article);

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
