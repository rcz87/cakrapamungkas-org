"use client";

import { useState } from "react";
import { Sparkles, Loader2, Copy, Check, RotateCcw } from "lucide-react";

const toneOptions = [
  { value: "informatif dan profesional", label: "Informatif" },
  { value: "santai dan mudah dipahami", label: "Santai" },
  { value: "akademis dan mendalam", label: "Akademis" },
  { value: "praktis dan langkah demi langkah", label: "Praktis" },
];

interface AiArticleHelperProps {
  category: string;
  onApply: (content: string) => void;
}

export default function AiArticleHelper({
  category,
  onApply,
}: AiArticleHelperProps) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState(toneOptions[0].value);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!topic.trim()) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const res = await fetch("/api/ai/generate-article", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim(), category, tone }),
      });

      const data = await res.json();

      if (res.ok) {
        setResult(data.content);
      } else {
        setError(data.error || "Gagal generate artikel");
      }
    } catch {
      setError("Gagal menghubungi server. Coba lagi.");
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleApply() {
    onApply(result);
    setOpen(false);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-xl hover:from-violet-700 hover:to-indigo-700 transition-all shadow-md"
      >
        <Sparkles className="w-4 h-4" />
        Generate dengan AI
      </button>
    );
  }

  return (
    <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 rounded-2xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-violet-100 rounded-lg">
            <Sparkles className="w-4 h-4 text-violet-600" />
          </div>
          <h3 className="font-semibold text-gray-900 text-sm">
            AI Article Helper
          </h3>
          <span className="text-[10px] px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full font-medium">
            OpenAI
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Tutup
        </button>
      </div>

      {/* Input */}
      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Topik / Ide Artikel
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="cth: Cara meningkatkan hasil panen padi di musim kemarau"
            className="w-full px-3 py-2.5 border border-violet-200 rounded-xl text-sm focus:ring-2 focus:ring-violet-400 focus:border-violet-400 outline-none bg-white"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleGenerate();
              }
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Gaya Penulisan
          </label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setTone(opt.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  tone === opt.value
                    ? "bg-violet-600 text-white"
                    : "bg-white border border-violet-200 text-gray-600 hover:bg-violet-50"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading || !topic.trim()}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Sedang menulis artikel...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Artikel
            </>
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-gray-600">
              Hasil Generate ({result.trim().split(/\s+/).length} kata)
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleGenerate}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-violet-600"
              >
                <RotateCcw className="w-3 h-3" />
                Ulangi
              </button>
              <button
                type="button"
                onClick={handleCopy}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-violet-600"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3" />
                    Tersalin
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    Salin
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="max-h-64 overflow-y-auto bg-white border border-violet-200 rounded-xl p-4">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap font-sans leading-relaxed">
              {result}
            </pre>
          </div>

          <button
            type="button"
            onClick={handleApply}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors"
          >
            <Check className="w-4 h-4" />
            Gunakan Artikel Ini
          </button>
        </div>
      )}
    </div>
  );
}
