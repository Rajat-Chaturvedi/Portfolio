export interface WritingItem {
  id: number;
  title: string;
  summary: string;
  url: string;
  publisher: string;
}

export function mapWritings(strapiData: any[]): WritingItem[] {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      title: attributes.title ?? "",
      summary: attributes.content ?? "",
      url: attributes.url ?? "",
      publisher: attributes.publisher ?? "",
    };
  });
}
