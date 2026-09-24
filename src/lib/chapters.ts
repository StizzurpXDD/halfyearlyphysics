import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ChapterMeta, ChapterData } from "./types";
import { markdownToHtml } from "./markdown";

const chaptersDirectory = path.join(process.cwd(), "content", "chapters");
const chapterCache = new Map<string, ChapterData>();
let allChaptersCache: ChapterMeta[] | null = null;

export function getAllChapters(): ChapterMeta[] {
  if (allChaptersCache) {
    return allChaptersCache;
  }
  if (!fs.existsSync(chaptersDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(chaptersDirectory);
  const allChaptersData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(chaptersDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: data.slug || slug,
        chapterNumber: Number(data.chapterNumber ?? 0),
        title: data.title || slug,
        unit: data.unit || "Physics",
        description: data.description || "",
        difficulty: data.difficulty || "Core",
        derivationsCount: Number(data.derivationsCount ?? 0),
        formulasCount: Number(data.formulasCount ?? 0),
        topics: Array.isArray(data.topics) ? data.topics : [],
        keyFormulasPreview: Array.isArray(data.keyFormulasPreview) ? data.keyFormulasPreview : [],
        accentColor: data.accentColor || "cyan",
        gradient: data.gradient || "from-cyan-500/20 via-blue-500/10 to-transparent",
        estimatedReadTime: data.estimatedReadTime || "15 min",
      } as ChapterMeta;
    });

  allChaptersCache = allChaptersData.sort((a, b) => a.chapterNumber - b.chapterNumber);
  return allChaptersCache;
}

export async function getChapterBySlug(slug: string): Promise<ChapterData | null> {
  if (chapterCache.has(slug)) {
    return chapterCache.get(slug)!;
  }

  const fullPath = path.join(chaptersDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  const result: ChapterData = {
    slug: data.slug || slug,
    chapterNumber: Number(data.chapterNumber ?? 0),
    title: data.title || slug,
    unit: data.unit || "Physics",
    description: data.description || "",
    difficulty: data.difficulty || "Core",
    derivationsCount: Number(data.derivationsCount ?? 0),
    formulasCount: Number(data.formulasCount ?? 0),
    topics: Array.isArray(data.topics) ? data.topics : [],
    keyFormulasPreview: Array.isArray(data.keyFormulasPreview) ? data.keyFormulasPreview : [],
    accentColor: data.accentColor || "cyan",
    gradient: data.gradient || "from-cyan-500/20 via-blue-500/10 to-transparent",
    estimatedReadTime: data.estimatedReadTime || "15 min",
    contentHtml,
    rawContent: content,
  };

  chapterCache.set(slug, result);
  return result;
}

export function getAdjacentChapters(currentSlug: string) {
  const all = getAllChapters();
  const currentIndex = all.findIndex((c) => c.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? all[currentIndex - 1] : null,
    next: currentIndex < all.length - 1 ? all[currentIndex + 1] : null,
  };
}
