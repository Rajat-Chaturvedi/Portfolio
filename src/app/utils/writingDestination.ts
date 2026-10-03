export function writingDestination(rawUrl: string) {
  const href = rawUrl.trim();
  if (href.startsWith("/") && !href.startsWith("//")) return { href, external: false };
  try {
    const url = new URL(href);
    if (url.protocol === "https:" || url.protocol === "http:") return { href, external: true };
  } catch {}
  return null;
}