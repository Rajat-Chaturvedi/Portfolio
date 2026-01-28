import { mapAwards } from "../awardMapper";
import { fetchStrapi } from "../strapi";

export async function getAwards() {
  const res = await fetchStrapi("/api/awards?sort=order:asc");

  return mapAwards(res.data);
}
