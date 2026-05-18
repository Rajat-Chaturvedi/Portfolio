export function mapWritings(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      title: attributes.title ?? "",
      summary: attributes.content ?? "",
      url: attributes.url ?? "",
    };
  });
}
