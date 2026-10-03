import { mapSkills } from "../skillMapper";
import { fetchStrapi } from "../strapi";

export async function getSkills() {
  const json = await fetchStrapi(
    "/api/skills?populate[types][populate]=icon&sort=order:asc",
    { cache: "no-store", next: { revalidate: 0 } },
  );
  return mapSkills(json.data);
}
