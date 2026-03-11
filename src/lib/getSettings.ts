import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getLatestSettings() {
  const filePath = path.join(process.cwd(), "_settings", "site.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data;
}
