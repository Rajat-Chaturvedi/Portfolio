export function mapProjects(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;

    const imageUrl = attributes.image?.url
      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}${attributes.image.url}`
      : "";

    return {
      id: item.id,
      name: attributes.name ?? "",
      description: attributes.description ?? "",
      link: attributes.link ?? "",
      techStack: attributes.techStack ?? [],
      image: imageUrl,
    };
  });
}
