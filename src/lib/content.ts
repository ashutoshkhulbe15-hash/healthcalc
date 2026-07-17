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
  const parsed = new Date(`${display} 1`);
  if (isNaN(parsed.getTime())) return undefined;
  return parsed.toISOString();
}
