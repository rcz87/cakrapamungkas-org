"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Save,
  ArrowLeft,
  AlertCircle,
  CheckCircle,
  Upload,
  X,
  Image as ImageIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { value: "Kebijakan", color: "bg-red-100 text-red-700" },
  { value: "Teknologi", color: "bg-blue-100 text-blue-700" },
  { value: "Budidaya", color: "bg-green-100 text-green-700" },
  { value: "Agribisnis", color: "bg-indigo-100 text-indigo-700" },
  { value: "Kearifan Lokal", color: "bg-emerald-100 text-emerald-700" },
  { value: "Regulasi", color: "bg-amber-100 text-amber-700" },
  { value: "Ekspor", color: "bg-rose-100 text-rose-700" },
  { value: "Lingkungan", color: "bg-teal-100 text-teal-700" },
  { value: "Manajemen", color: "bg-blue-100 text-blue-700" },
  { value: "Sejarah & Ekonomi", color: "bg-purple-100 text-purple-700" },
];

interface ArticleData {
  slug: string;
  title: string;
  category: string;
  categoryColor: string;
  content: string;
  excerpt: string;
  readTime: string;
  image: string;
  datePublished: string;
}

export default function EditArtikelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0].value);
  const [content, setContent] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
      fetch(`/api/articles/${slug}`)
        .then((res) => {
          if (!res.ok) throw new Error("Not found");
          return res.json();
        })
        .then((data: ArticleData) => {
          setTitle(data.title);
          setCategory(data.category);
          setContent(data.content);
          setExcerpt(data.excerpt);
          setImageUrl(data.image);
          setFetching(false);
        })
        .catch(() => {
          setError("Artikel tidak ditemukan");
          setFetching(false);
        });
    });
  }, [params]);

  function estimateReadTime(text: string) {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min`;
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setImageUrl(data.url);
      } else {
        const data = await res.json();
        setError(data.error || "Gagal upload gambar");
      }
    } catch {
      setError("Gagal upload gambar");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!title.trim() || !content.trim()) {
      setError("Judul dan konten wajib diisi");
      setLoading(false);
      return;
    }

    const selectedCategory = categories.find((c) => c.value === category);

    try {
      const res = await fetch(`/api/articles/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          category,
          categoryColor:
            selectedCategory?.color || "bg-gray-100 text-gray-700",
          content: content.trim(),
          excerpt: excerpt.trim() || content.trim().substring(0, 200) + "...",
          readTime: estimateReadTime(content),
          image: imageUrl,
        }),
      });

      if (res.ok) {
        setSuccess("Artikel berhasil diperbarui!");
        setTimeout(() => {
          router.push("/dashboard/artikel");
        }, 1500);
      } else {
        const data = await res.json();
        setError(data.error || "Gagal menyimpan perubahan");
      }
    } catch {
      setError("Terjadi kesalahan. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-gray-400">Memuat artikel...</div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <Link
          href="/dashboard/artikel"
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-primary-600 mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Kelola Artikel
        </Link>
        <h1 className="text-2xl font-bold text-gray-900">Edit Artikel</h1>
        <p className="text-gray-500 mt-1">Perbarui konten artikel</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-4xl">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2 text-green-700 text-sm">
            <CheckCircle className="w-5 h-5 shrink-0" />
            {success}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Artikel
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors text-lg"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.value}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gambar Cover
            </label>
            {imageUrl && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-3 bg-gray-100">
                <Image
                  src={imageUrl}
                  alt="Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                <button
                  type="button"
                  onClick={() => setImageUrl("")}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 hover:bg-black/70 text-white rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors"
              >
                {uploading ? (
                  <>Mengupload...</>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    {imageUrl ? "Ganti Gambar" : "Upload Gambar"}
                  </>
                )}
              </button>
              <span className="text-xs text-gray-400">
                JPG, PNG, WebP, GIF (maks. 5MB)
              </span>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ringkasan
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={2}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
              placeholder="Ringkasan singkat artikel..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Konten Artikel{" "}
              <span className="text-gray-400 font-normal">(Markdown)</span>
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={20}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors font-mono text-sm resize-y"
              required
            />
            {content && (
              <p className="mt-1 text-xs text-gray-400">
                {content.trim().split(/\s+/).length} kata · Estimasi baca:{" "}
                {estimateReadTime(content)}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
          >
            <Save className="w-5 h-5" />
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </div>
      </form>
    </>
  );
}
