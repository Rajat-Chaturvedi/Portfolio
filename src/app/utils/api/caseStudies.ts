import { fetchStrapi } from "../strapi";
import { mapCaseStudies } from "../caseStudiesMapper";

export async function getCaseStudies() {
  const res = await fetchStrapi("/api/case-studies?populate=*");
  return mapCaseStudies(res.data);
}
