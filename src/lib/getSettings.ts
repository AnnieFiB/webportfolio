import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export function getLatestSettings() {
  const filePath = path.join(process.cwd(), "_settings", "site.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}
