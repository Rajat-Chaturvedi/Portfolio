import { mapAbout } from "../aboutMapper";

export async function getAbout() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about`, {
    cache: "no-store",
  });

  const json = await res.json();

  return mapAbout(json);
}
