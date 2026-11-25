import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "My agent wrote 4,000 words, called twelve tools, and billed it as a 'quick fix' — the confidence of a golden retriever with a search bar.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDir}/entry.txt`;

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, `${line}\n`, "utf8");
} catch (cause) {
  throw new Error(`Failed to write entry.txt from ${import.meta.url}`, { cause });
}

const length = readFileSync(outputPath, "utf8").trim().length;
if (length === 0 || length > 200) {
  throw new Error(`Competition gate failed: entry.txt has ${length} characters; expected 1–200.`);
}
