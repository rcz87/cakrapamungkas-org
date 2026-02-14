import fs from "fs";
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

export function getDynamicArticles(): DynamicArticle[] {
  try {
    const data = fs.readFileSync(DB_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export function getDynamicArticleBySlug(
  slug: string
): DynamicArticle | undefined {
  const articles = getDynamicArticles();
  return articles.find((a) => a.slug === slug);
}

export function saveDynamicArticle(article: DynamicArticle): void {
  const articles = getDynamicArticles();
  articles.unshift(article);
  fs.writeFileSync(DB_PATH, JSON.stringify(articles, null, 2), "utf-8");
}

export function updateDynamicArticle(
  slug: string,
  updates: Partial<DynamicArticle>
): DynamicArticle | null {
  const articles = getDynamicArticles();
  const index = articles.findIndex((a) => a.slug === slug);
  if (index === -1) return null;
  articles[index] = { ...articles[index], ...updates };
  fs.writeFileSync(DB_PATH, JSON.stringify(articles, null, 2), "utf-8");
  return articles[index];
}

export function deleteDynamicArticle(slug: string): boolean {
  const articles = getDynamicArticles();
  const filtered = articles.filter((a) => a.slug !== slug);
  if (filtered.length === articles.length) return false;
  fs.writeFileSync(DB_PATH, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
