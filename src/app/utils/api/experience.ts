import { mapExperiences } from "../experienceMapper";
import { fetchStrapi } from "../strapi";

export async function getExperiences() {
  const res = await fetchStrapi("/api/experiences?populate=*&sort=order:asc");

  return mapExperiences(res.data);
}
