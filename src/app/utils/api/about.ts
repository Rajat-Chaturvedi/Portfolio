import { mapAbout } from "../aboutMapper";

export async function getAbout() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about`, {
    cache: "no-store",
    signal: AbortSignal.timeout(5000),
  });

  if (!res.ok) throw new Error(`About request failed: ${res.status}`);
  const json = await res.json();

  return mapAbout(json);
}
