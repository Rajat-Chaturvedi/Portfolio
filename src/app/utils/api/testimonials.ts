import { fetchStrapi } from "../strapi";
import { mapTestimonials } from "../testimonialsMapper";

export async function getTestimonials() {
  const res = await fetchStrapi("/api/testimonials?populate=*");
  return mapTestimonials(res.data);
}
