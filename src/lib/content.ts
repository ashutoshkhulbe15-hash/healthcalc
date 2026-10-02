import fs from "fs";
import path from "path";

export function getArticleContent(filename: string): string {
  const filePath = path.join(process.cwd(), "content", filename);
  return fs.readFileSync(filePath, "utf-8");
}

/**
 * Reads the `<!-- last-updated: Month YYYY -->` marker from a content file.
 * Returns a display string like "July 2026", or undefined if absent.
 */
export function getLastUpdated(filename: string): string | undefined {
  try {
    const raw = getArticleContent(filename);
    const match = raw.match(/<!--\s*last-updated:\s*([^>]+?)\s*-->/i);
    return match ? match[1].trim() : undefined;
  } catch {
    return undefined;
  }
}

/**
 * ISO date for schema dateModified, derived from the same marker.
 */
export function getLastUpdatedISO(filename: string): string | undefined {
  const display = getLastUpdated(filename);
  if (!display) return undefined;
  // Month-only legacy markers have no known day; do not invent a structured date.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(display)) return undefined;
  const parsed=new Date(`${display}T00:00:00Z`);
  return !isNaN(parsed.getTime()) && parsed.toISOString().startsWith(display) ? parsed.toISOString() : undefined;
}
