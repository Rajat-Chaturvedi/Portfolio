export function mapSkills(data: any[]) {
  return data.map((item) => ({
    id: item.id,
    skill: item.attributes.name,
    type: item.attributes.types.map((t: any) => ({
      subType: t.subType,
      image: t.icon?.data
        ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${t.icon.data.attributes.url}`
        : "",
    })),
  }));
}
