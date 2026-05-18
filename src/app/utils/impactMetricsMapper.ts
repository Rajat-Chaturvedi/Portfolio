export function mapImpactMetrics(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      value: attributes.value ?? "",
      label: attributes.metric ?? "",
      note: attributes.description ?? "",
    };
  });
}
