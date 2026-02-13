import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getDynamicArticleBySlug } from "@/lib/articles-db";
import { ArticleContent } from "./article-content";
import { BreadcrumbJsonLd, ArticleJsonLd } from "@/components/json-ld";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getDynamicArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} | CV. Cakra Pamungkas Mandiri`,
    description: article.excerpt,
  };
}

export default async function DynamicArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getDynamicArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Beranda", href: "/" },
          { name: "Artikel", href: "/artikel" },
          { name: article.title, href: `/artikel/${article.slug}` },
        ]}
      />
      <ArticleJsonLd article={article} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1 text-primary-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Artikel
          </Link>
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-lg ${article.categoryColor} mb-4`}
          >
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-primary-200 text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.datePublished}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ArticleContent content={article.content} />
      </article>
    </>
  );
}
