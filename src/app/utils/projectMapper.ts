export function mapProjects(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;

    const imageUrl = attributes.image?.url
      ? `${attributes.image.url}`
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
