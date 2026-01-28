export function mapAwards(data: any[]) {
  return data.map((item) => {
    const a = item.attributes ?? item;
    return {
      id: item.id,
      title: a.title,
    };
  });
}
