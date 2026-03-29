import OpenAI from "openai";

// Lazily create an OpenAI client so importing modules doesn't throw when the
// API key is missing. Callers should call `getOpenAI()` at runtime and handle
// a `null` return value if the key isn't set.
export default function getOpenAI() {
  const key = process.env.OPENAI_API_KEY;
  if (!key) {
    return null;
  }
  return new OpenAI({ apiKey: key });
}