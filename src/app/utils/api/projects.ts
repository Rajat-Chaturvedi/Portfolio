import { mapProjects } from "../projectMapper";
import { fetchStrapi } from "../strapi";

export async function getProjects() {
  const res = await fetchStrapi("/api/projects?populate=image&sort=order:asc");

  return mapProjects(res.data);
}
