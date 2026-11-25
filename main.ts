// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// One funny line, a single sentence of at most 200 characters, written
// to /output/entry.txt. The joke turns on a self-defeating request (asking
// to be reminded to be spontaneous) with a punchline that makes the
// contradiction literal: a daily 9 a.m. reminder to be spontaneous.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "I asked my AI assistant to remind me to be more spontaneous, " +
  "and it has reminded me every day at 9 a.m. sharp.";

// The line must be a single sentence, 1-200 characters, and not only
// whitespace — the gate refuses anything else, so check before writing.
function main(): void {
  const text = ENTRY_LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (!text.includes(" ")) {
    throw new Error("entry must be a sentence, not a single word");
  }
  if (!text.endsWith(".")) {
    throw new Error("entry must end as one finished sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
