import { type ClassValue } from "./types";

const MOOD_COLORS = {
  default: ["slate-900", "blue-950"],
  positive: ["slate-900", "emerald-950"],
  negative: ["slate-900", "rose-950"],
  question: ["slate-900", "violet-950"],
  technical: ["slate-900", "cyan-950"],
  creative: ["slate-900", "amber-950"],
} as const;

const POSITIVE_WORDS = [
  "good",
  "great",
  "awesome",
  "love",
  "happy",
  "thanks",
  "excellent",
  "amazing",
];
const NEGATIVE_WORDS = [
  "bad",
  "wrong",
  "error",
  "issue",
  "problem",
  "bug",
  "fail",
  "broken",
];
const TECHNICAL_WORDS = [
  "code",
  "programming",
  "developer",
  "software",
  "tech",
  "api",
  "database",
];
const CREATIVE_WORDS = [
  "design",
  "create",
  "build",
  "make",
  "art",
  "style",
  "color",
];

export function getBackgroundTheme(input: string): ClassValue {
  const text = input.toLowerCase();

  if (!text) {
    return `from-${MOOD_COLORS.default[0]} to-${MOOD_COLORS.default[1]}`;
  }

  if (text.includes("?")) {
    return `from-${MOOD_COLORS.question[0]} to-${MOOD_COLORS.question[1]}`;
  }

  if (POSITIVE_WORDS.some((word) => text.includes(word))) {
    return `from-${MOOD_COLORS.positive[0]} to-${MOOD_COLORS.positive[1]}`;
  }

  if (NEGATIVE_WORDS.some((word) => text.includes(word))) {
    return `from-${MOOD_COLORS.negative[0]} to-${MOOD_COLORS.negative[1]}`;
  }

  if (TECHNICAL_WORDS.some((word) => text.includes(word))) {
    return `from-${MOOD_COLORS.technical[0]} to-${MOOD_COLORS.technical[1]}`;
  }

  if (CREATIVE_WORDS.some((word) => text.includes(word))) {
    return `from-${MOOD_COLORS.creative[0]} to-${MOOD_COLORS.creative[1]}`;
  }

  return `from-${MOOD_COLORS.default[0]} to-${MOOD_COLORS.default[1]}`;
}
