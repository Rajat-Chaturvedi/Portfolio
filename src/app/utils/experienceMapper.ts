export function mapExperiences(data: any[]) {
  return data.map((item) => ({
    id: item.id,
    company: item.attributes.company,
    title: item.attributes.title,
    startDate: item.attributes.startDate,
    endDate: item.attributes.endDate,
    image: item.attributes.logo?.data
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${item.attributes.logo.data.attributes.url}`
      : "",
    description: item.attributes.bullets.map((b: any) => b.point),
  }));
}
