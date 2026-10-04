import { fetchStrapi } from "../strapi";
import { getLocalContent } from "../localContent";
import { mapImpactMetrics } from "../impactMetricsMapper";

export async function getImpactMetrics() {
  const res = await fetchStrapi("/api/impact-metrics?populate=*");
  const cmsMetrics = mapImpactMetrics(res?.data ?? []);
  return cmsMetrics.length
    ? cmsMetrics
    : mapImpactMetrics(
        getLocalContent("/api/impact-metrics").data as unknown[],
      );
}
