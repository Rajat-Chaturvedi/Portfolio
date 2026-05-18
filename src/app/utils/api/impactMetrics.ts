import { fetchStrapi } from "../strapi";
import { mapImpactMetrics } from "../impactMetricsMapper";

export async function getImpactMetrics() {
  const res = await fetchStrapi("/api/impact-metrics?populate=*");
  return mapImpactMetrics(res.data);
}
