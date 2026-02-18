import fs from "fs/promises";
import path from "path";
import type { Article } from "@/data/articles";

export interface DynamicArticle extends Article {
  content: string;
  createdAt: string;
}

const DB_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "dynamic-articles.json"
);

let cachedArticles: DynamicArticle[] | null = null;
let cacheTime = 0;
const CACHE_TTL = 5000; // 5 seconds

function invalidateCache() {
  cachedArticles = null;
  cacheTime = 0;
}

export async function getDynamicArticles(): Promise<DynamicArticle[]> {
  if (cachedArticles && Date.now() - cacheTime < CACHE_TTL) {
    return cachedArticles;
  }

  try {
    const data = await fs.readFile(DB_PATH, "utf-8");
    cachedArticles = JSON.parse(data);
    cacheTime = Date.now();
    return cachedArticles!;
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    console.error("Failed to read articles database:", err);
    return [];
  }
}

export async function getDynamicArticleBySlug(
  slug: string
): Promise<DynamicArticle | undefined> {
  const articles = await getDynamicArticles();
  return articles.find((a) => a.slug === slug);
}

export async function saveDynamicArticle(
  article: DynamicArticle
): Promise<void> {
  const articles = await getDynamicArticles();
  articles.unshift(article);
  await fs.writeFile(DB_PATH, JSON.stringify(articles, null, 2), "utf-8");
  invalidateCache();
}

export async function updateDynamicArticle(
  slug: string,
  updates: Partial<DynamicArticle>
): Promise<DynamicArticle | null> {
  const articles = await getDynamicArticles();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return null;
  articles[index] = { ...articles[index], ...updates };
  await fs.writeFile(DB_PATH, JSON.stringify(articles, null, 2), "utf-8");
  invalidateCache();
  return articles[index];
}

export async function deleteDynamicArticle(slug: string): Promise<boolean> {
  const articles = await getDynamicArticles();
  const filtered = articles.filter((a) => a.slug !== slug);
  if (filtered.length === articles.length) return false;
  await fs.writeFile(DB_PATH, JSON.stringify(filtered, null, 2), "utf-8");
  invalidateCache();
  return true;
}
