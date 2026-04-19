import fs from "fs";
import path from "path";

export function getArticleContent(filename: string): string {
  const filePath = path.join(process.cwd(), "content", filename);
  return fs.readFileSync(filePath, "utf-8");
}
