// One Emoji, One Smile — u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is a single emoji, U+1F917 HUGGING FACE, and nothing else:
// no words, no caption, no explanation, no trailing newline.
//
// Why this emoji, against the judge's brief (most important first):
//  1. Warm and friendly at first glance: open arms read instantly as a
//     hug — kindness with no context needed, the kind of thing that makes
//     a stranger smile.
//  2. Universality: a hug is understood by any age or background, with no
//     irony, in-joke, or slang that could land wrong.
//  3. Chosen rather than default: it is not the first smiley that comes
//     to mind (🙂 / 😊) — it is a deliberate pick — while staying
//     instantly readable on any phone.
//  4. Right for a stranger: a friendly virtual hug is warm without
//     intimacy, sarcasm, or flirtation, which would read oddly from
//     someone unknown (that rules out 🥰 and other heart-faced picks).
//  5. A face beats a symbol here: 🌻 or ☀️ are cheerful, but only a face
//     plainly aims to warm a stranger, which is the brief's first test.
//
// The program is deterministic: fixed string, stdlib only, no input,
// no network, no clock, no randomness. It writes exactly the one emoji
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Tie-break note: on an exact rate tie the smaller text places first —
// one emoji is 4 bytes of UTF-8, the smallest any emoji outside the
// basic multilingual plane can be, so no smaller entry can beat it.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// U+1F917 HUGGING FACE — one code point, 4 bytes of UTF-8.
const ENTRY = "🤗";

// Own gate, mirroring the house gate: the file must be UTF-8 text of
// 1 to 8 characters and not only whitespace. One emoji, nothing else.
const codePoints = [...ENTRY];
if (codePoints.length < 1 || codePoints.length > 8) {
  throw new Error(
    `entry must be 1-8 characters, got ${codePoints.length}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
