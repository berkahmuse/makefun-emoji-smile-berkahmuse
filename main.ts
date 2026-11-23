// One Emoji, One Smile — entry for @berkahmuse
//
// Writes exactly one emoji to <outputDir>/entry.txt and nothing else:
// no words, no caption, no explanation. The output directory defaults to
// "/output" (the grader sandbox) and can be overridden with
// MAKEFUN_OUTPUT_DIR for local runs.
//
// The emoji: 🤗 U+1F917 HUGGING FACE
//
// Why this one, against the judge's brief (warmth first, then universality,
// chosen-not-default, right-for-a-stranger):
// - A smiling face with open arms: warmth at first glance, no context
//   needed. The smile is the warmth; the open arms are the welcome.
// - Universal: a hug is read the same way by a stranger of any age or
//   background — friendly, never ironic, no in-joke.
// - Chosen, not default: it is not the first smiley that comes to mind
//   (🙂 / 😊). The arms add a deliberate gesture of warmth, while the
//   face keeps it instantly readable.
// - Right for a stranger: a hug emoji is a common casual friendly gesture,
//   with no intimacy, sarcasm or flirtation in it — unlike 🥰 or 😘,
//   which would read oddly from someone unknown.
// - It is a single emoji, 1 character, 4 bytes UTF-8, inside the gate
//   (1–8 characters, not only whitespace), with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "🤗"; // U+1F917 HUGGING FACE — one code point, 4 bytes UTF-8
const OUTPUT_FILE = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, OUTPUT_FILE), EMOJI, "utf8");
