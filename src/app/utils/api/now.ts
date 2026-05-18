import { fetchStrapi } from "../strapi";
import { mapNow } from "../nowMapper";

export async function getNow() {
  const res = await fetchStrapi("/api/nows?populate=*");
  return mapNow(res.data);
}
