import type { GuideBlock, GuideContent } from "@/content/guides/types";

/** Raw editorial markers that must never reach reader-facing guide content. */
export const prohibitedMarkers: RegExp[] = [/<\/?TODO>/i, /\bTODO\b/, /\bTBD\b/, /\[comment/i, /\bcommented\b.*\breply\b/i, /\bconfidential\b/i, /\bLorem ipsum\b/i, /\breviewer:\s*$/im, /\[insert/i, /\bXX+\b/, /Page:\s*\d+\s*\/\s*\d+/];

function blockText(block: GuideBlock): string[] {
  switch (block.type) {
    case "prose": return block.paragraphs;
    case "bullets": return [block.title ?? "", ...block.items];
    case "callout": return [block.title, ...block.paragraphs, ...(block.items ?? [])];
    case "cards": return [block.title ?? "", ...block.items.flatMap(i => [i.label ?? "", i.title, i.text])];
    case "roadmap": return [block.title ?? "", ...block.items.flatMap(i => [i.label, i.title, i.text, ...(i.points ?? [])])];
    case "table": return [block.caption, block.note ?? "", ...block.columns, ...block.rows.flat()];
    case "disclosure": case "subsection": return [block.title, ...block.blocks.flatMap(blockText)];
  }
}
export function guideStrings(content: GuideContent): string[] {
  return [content.purpose, ...content.sections.flatMap(s => [s.title, s.intro ?? "", ...s.blocks.flatMap(blockText)]), ...content.references.flatMap(r => [r.title, r.publisher ?? ""])];
}
export function findEditorialMarkers(content: GuideContent): string[] {
  return guideStrings(content).filter(text => prohibitedMarkers.some(re => re.test(text)));
}
