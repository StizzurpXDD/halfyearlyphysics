import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";

/**
 * Preprocesses markdown before passing to remark:
 * Standalone lines containing $$formula$$ (with optional leading/trailing whitespace)
 * are expanded into display math fences ($$\nformula\n$$) with blank line separation.
 * This ensures remark-math parses them as block display math (`<span class="katex-display">`)
 * instead of inline math, enabling expansive, proportional space gaps per mathematical step.
 * Table rows (`| $$...$$ |`) are left intact to preserve table layout.
 */
function preprocessMarkdown(markdown: string): string {
  // 1. Expand standalone $$ display math fences
  let result = markdown.replace(/(^|\r?\n)[ \t]*\$\$([^\r\n]+?)\$\$[ \t]*(?=\r?\n|$)/g, (match, prefix, formula) => {
    return `${prefix}\n\n$$\n${formula.trim()}\n$$\n\n`;
  });

  // 2. Fix raw SVG and HTML figure blocks:
  // Under CommonMark specification, an empty line inside an HTML block terminates the block.
  // Any subsequent indented lines (such as <!-- comment --> or <circle...>) are then misparsed as indented code blocks (<pre><code>).
  // Removing blank lines inside <svg> and container <div> blocks ensures remark-parse keeps the entire graphic as a single HTML element.
  result = result.replace(/<svg[\s\S]*?<\/svg>/gi, (svgBlock) => {
    return svgBlock.replace(/\r?\n[ \t]*\r?\n+/g, "\n");
  });

  result = result.replace(/<div[\s\S]*?<\/div>/gi, (divBlock) => {
    if (divBlock.includes("<svg")) {
      return divBlock.replace(/\r?\n[ \t]*\r?\n+/g, "\n");
    }
    return divBlock;
  });

  return result;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const processed = preprocessMarkdown(markdown);

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processed);

  return String(file);
}
