const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchStrapi(
  endpoint: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${STRAPI_URL}${endpoint}`, {
    next: { revalidate: 60 }, // ISR (safe for portfolio)
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${endpoint}`);
  }

  return res.json();
}
