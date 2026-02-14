import { NextRequest, NextResponse } from "next/server";
import {
  getDynamicArticleBySlug,
  updateDynamicArticle,
  deleteDynamicArticle,
} from "@/lib/articles-db";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, { params }: Props) {
  const { slug } = await params;
  const article = getDynamicArticleBySlug(slug);

  if (!article) {
    return NextResponse.json(
      { error: "Artikel tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json(article);
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const { slug } = await params;
    const body = await request.json();
    const { title, category, categoryColor, content, excerpt, readTime, image } =
      body;

    const updated = updateDynamicArticle(slug, {
      ...(title && { title }),
      ...(category && { category }),
      ...(categoryColor && { categoryColor }),
      ...(content && { content }),
      ...(excerpt && { excerpt }),
      ...(readTime && { readTime }),
      ...(image && { image }),
    });

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
  const { slug } = await params;
  const deleted = deleteDynamicArticle(slug);

  if (!deleted) {
    return NextResponse.json(
      { error: "Artikel tidak ditemukan" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true });
}
