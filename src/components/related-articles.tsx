import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { articles, getArticleHref } from "@/data/articles";

interface Props {
  currentSlug: string;
  limit?: number;
}

export function RelatedArticles({ currentSlug, limit = 4 }: Props) {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return null;

  const others = articles.filter((a) => a.slug !== currentSlug);
  const sameCategory = others.filter((a) => a.category === current.category);

  const picked = [...sameCategory, ...others.filter((a) => a.category !== current.category)]
    .slice(0, limit);

  if (picked.length === 0) return null;

  return (
    <section
      aria-label="Artikel Terkait"
      className="bg-gray-50 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary-600 mb-2">
              Baca Lainnya
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Artikel Terkait
            </h2>
          </div>
          <Link
            href="/artikel"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {picked.map((a) => (
            <Link
              key={a.slug}
              href={getArticleHref(a.slug)}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="relative h-36 overflow-hidden bg-gray-100">
                <Image
                  src={a.image}
                  alt={a.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <span
                  className={`self-start px-2 py-0.5 text-[10px] font-bold rounded ${a.categoryColor} mb-2`}
                >
                  {a.category}
                </span>
                <h3 className="text-sm font-bold text-gray-900 leading-snug line-clamp-3 mb-2 group-hover:text-primary-700 transition-colors">
                  {a.title}
                </h3>
                <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-auto">
                  <Clock className="w-3 h-3" /> {a.readTime}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-800"
          >
            Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
