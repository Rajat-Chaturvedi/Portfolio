import { fetchStrapi } from "../strapi";
import { mapCTAs } from "../ctasMapper";

export async function getCTAs() {
  const res = await fetchStrapi("/api/ctas?populate=*");
  return mapCTAs(res.data);
}
