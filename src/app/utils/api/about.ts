import { mapAbout } from "../aboutMapper";
import { fetchStrapi } from "../strapi";

export async function getAbout() {
  const json = await fetchStrapi("/api/about", {
    cache: "no-store",
    next: { revalidate: 0 },
  });

  return mapAbout(json);
}
