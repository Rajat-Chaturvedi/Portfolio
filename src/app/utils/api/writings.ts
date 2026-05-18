import { fetchStrapi } from "../strapi";
import { mapWritings } from "../writingsMapper";

export async function getWritings() {
  const res = await fetchStrapi("/api/writings?populate=*");
  return mapWritings(res.data);
}
