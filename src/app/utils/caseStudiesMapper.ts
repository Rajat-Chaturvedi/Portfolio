export function mapCaseStudies(strapiData: any[]) {
  return strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    return {
      id: item.id,
      title: attributes.title ?? "",
      role: attributes.role ?? "",
      duration: attributes.duration ?? "",
      problem: attributes.problem ?? "",
      solution: attributes.solution ?? "",
      outcome: attributes.outcome ?? "",
      stack: attributes.stack?.split(", ") ?? [],
      liveUrl: attributes.liveUrl ?? "",
      repoUrl: attributes.repoUrl ?? "",
    };
  });
}
