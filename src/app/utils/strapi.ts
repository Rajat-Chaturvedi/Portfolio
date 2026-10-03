import { getLocalContent } from "./localContent";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchStrapi(
  endpoint: string,
  options: RequestInit = {}
) {
  if (process.env.CONTENT_SOURCE === "local") return getLocalContent(endpoint);
  try {
    const res = await fetch(`${STRAPI_URL}${endpoint}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000),
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    if (!res.ok) throw new Error(`Strapi fetch failed: ${endpoint}`);
    return await res.json();
  } catch {
    console.warn(`CMS unavailable; using local content for ${endpoint}`);
    return getLocalContent(endpoint);
  }
}
