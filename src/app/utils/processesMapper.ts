export function mapProcesses(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      step: attributes.step ?? "",
      title: attributes.title ?? attributes.step ?? "",
      description: attributes.description ?? "",
    };
  });
}
