export const categories = [
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
  { value: "Umum", color: "bg-gray-100 text-gray-700" },
] as const;

export const VALID_CATEGORIES = categories.map((c) => c.value);

export function getCategoryColor(category: string): string {
  return (
    categories.find((c) => c.value === category)?.color ||
    "bg-gray-100 text-gray-700"
  );
}
