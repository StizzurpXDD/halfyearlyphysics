export interface ChapterMeta {
  slug: string;
  chapterNumber: number;
  title: string;
  unit: string;
  description: string;
  difficulty?: "Essential" | "Core" | "Advanced";
  derivationsCount: number;
  formulasCount: number;
  topics?: string[];
  keyFormulasPreview?: string[];
  accentColor?: string;
  gradient?: string;
  estimatedReadTime?: string;
}

export interface ChapterData extends ChapterMeta {
  contentHtml: string;
  rawContent: string;
}
