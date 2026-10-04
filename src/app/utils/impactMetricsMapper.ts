import type { ImpactMetric } from "../types/impactMetric";

export function mapImpactMetrics(strapiData: unknown[] = []): ImpactMetric[] {
  return strapiData
    .map((record) => {
      if (!record || typeof record !== "object") return null;
      const item = record as Record<string, unknown>;
      const attributes = (item.attributes ?? item) as Record<string, unknown>;
      const slug = attributes.slug;
      const visualization = attributes.visualization ?? attributes.chart;
      if (typeof slug !== "string" || !visualization) return null;

      return {
        id: (item.id as number | string) ?? slug,
        slug,
        value: String(attributes.value ?? ""),
        label: String(attributes.metric ?? ""),
        context: String(attributes.context ?? attributes.description ?? ""),
        project: String(attributes.project ?? ""),
        company: String(attributes.company ?? ""),
        measurement: String(attributes.measurement ?? ""),
        detail: String(attributes.detail ?? ""),
        href: String(attributes.href ?? "/#experience"),
        featured: attributes.featured === true,
        visualization: visualization as ImpactMetric["visualization"],
      };
    })
    .filter((metric): metric is ImpactMetric => metric !== null);
}
