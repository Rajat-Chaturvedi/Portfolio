export function mapTestimonials(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      name: attributes.author ?? "",
      role: attributes.role ?? "",
      company: attributes.company ?? "",
      quote: attributes.content ?? "",
    };
  });
}
