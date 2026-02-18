import { NextRequest, NextResponse } from "next/server";
import {
  getDynamicArticleBySlug,
  updateDynamicArticle,
  deleteDynamicArticle,
} from "@/lib/articles-db";
import { authenticateRequest } from "@/lib/auth";
import { VALID_CATEGORIES, getCategoryColor } from "@/data/categories";

const MAX_TITLE_LENGTH = 200;
const MAX_CONTENT_LENGTH = 50000;
const MAX_EXCERPT_LENGTH = 500;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { slug } = await params;
  const article = await getDynamicArticleBySlug(slug);

  if (!article) {
    return NextResponse.json(
      { error: "Artikel tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const isAuth = await authenticateRequest();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, category, content, excerpt, readTime, image } = body;

    const updates: Record<string, string> = {};

    if (title) {
      const trimmed = String(title).trim();
      if (trimmed.length > MAX_TITLE_LENGTH) {
        return NextResponse.json(
          { error: `Judul maksimal ${MAX_TITLE_LENGTH} karakter` },
          { status: 400 }
        );
      }
      updates.title = trimmed;
    }

    if (content) {
      const trimmed = String(content).trim();
      if (trimmed.length > MAX_CONTENT_LENGTH) {
        return NextResponse.json(
          { error: `Konten maksimal ${MAX_CONTENT_LENGTH} karakter` },
          { status: 400 }
        );
      }
      updates.content = trimmed;
    }

    if (excerpt) {
      const trimmed = String(excerpt).trim();
      if (trimmed.length > MAX_EXCERPT_LENGTH) {
        return NextResponse.json(
          { error: `Ringkasan maksimal ${MAX_EXCERPT_LENGTH} karakter` },
          { status: 400 }
        );
      }
      updates.excerpt = trimmed;
    }

    if (category) {
      if (VALID_CATEGORIES.includes(category)) {
        updates.category = category;
        updates.categoryColor = getCategoryColor(category);
      }
    }

    if (readTime) {
      updates.readTime = String(readTime).slice(0, 20);
    }

    if (image && typeof image === "string") {
      updates.image = image.slice(0, 500);
    }

    const updated = await updateDynamicArticle(slug, updates);

    if (!updated) {
      return NextResponse.json(
        { error: "Artikel tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, article: updated });
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

export async function DELETE(_request: NextRequest, { params }: Props) {
  const isAuth = await authenticateRequest();
  if (!isAuth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slug } = await params;
  const deleted = await deleteDynamicArticle(slug);

  if (!deleted) {
    return NextResponse.json(
      { error: "Artikel tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
