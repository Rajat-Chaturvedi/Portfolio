export function mapExperiences(strapiData: any[]) {
  return strapiData.map((item) => ({
    id: item.id,
    company: item.company ?? "",
    title: item.title ?? "",
    startDate: item.startDate ?? "",
    endDate: item.endDate ?? "",
    logo: item.logo?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.logo.url}`
      : "",
    bullets: item.bullets?.map((b: any) => b) ?? [],
  }));
}
