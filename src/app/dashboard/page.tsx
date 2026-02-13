import Link from "next/link";
import { FileText, PlusCircle, Eye, TrendingUp } from "lucide-react";
import { articles } from "@/data/articles";
import { getDynamicArticles } from "@/lib/articles-db";

export default function DashboardPage() {
  const dynamicArticles = getDynamicArticles();
  const totalArticles = articles.length + dynamicArticles.length;

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Selamat datang di admin panel Cakra Pamungkas
        </p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {totalArticles}
              </p>
              <p className="text-sm text-gray-500">Total Artikel</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {dynamicArticles.length}
              </p>
              <p className="text-sm text-gray-500">Artikel dari Dashboard</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">
                {articles.length}
              </p>
              <p className="text-sm text-gray-500">Artikel Statis</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Aksi Cepat
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/dashboard/artikel/baru"
            className="flex items-center gap-4 p-5 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-colors shadow-md"
          >
            <PlusCircle className="w-8 h-8" />
            <div>
              <p className="font-bold">Tulis Artikel Baru</p>
              <p className="text-sm text-primary-100">
                Buat dan publish artikel
              </p>
            </div>
          </Link>
          <Link
            href="/artikel"
            target="_blank"
            className="flex items-center gap-4 p-5 bg-white border border-gray-200 text-gray-900 rounded-2xl hover:border-primary-300 hover:bg-primary-50 transition-colors"
          >
            <Eye className="w-8 h-8 text-primary-600" />
            <div>
              <p className="font-bold">Lihat Website</p>
              <p className="text-sm text-gray-500">
                Buka halaman artikel publik
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent dynamic articles */}
      {dynamicArticles.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Artikel Terbaru (dari Dashboard)
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {dynamicArticles.slice(0, 5).map((article) => (
              <div
                key={article.slug}
                className="flex items-center justify-between px-6 py-4 border-b border-gray-50 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900">{article.title}</p>
                  <p className="text-sm text-gray-500">
                    {article.category} · {article.datePublished}
                  </p>
                </div>
                <Link
                  href={`/artikel/${article.slug}`}
                  target="_blank"
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Lihat
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
