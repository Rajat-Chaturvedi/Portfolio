function extractField(description: string, labels: string[]) {
  for (const label of labels) {
    const regex = new RegExp(
      `(?:^|\\n)\\s*${label}\\s*:\\s*(.+?)(?=\\n\\s*[A-Za-z ]+\\s*:|$)`,
      "i",
    );
    const match = description.match(regex);
    if (match?.[1]?.trim()) return match[1].trim();
  }
  return "";
}

function firstNonEmpty(...values: any[]) {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return "";
}

export function mapNow(strapiData: any[]) {
  const mapped = strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    const description = String(attributes.description ?? "").replace(
      /\\n/g,
      "\n",
    );
    const parsedFocus = extractField(description, ["Current Focus", "Focus"]);
    const parsedLearning = extractField(description, ["Learning"]);
    const parsedBuilding = extractField(description, ["Building"]);
    const parsedAvailability = extractField(description, ["Availability"]);
    const hasParsedSections = Boolean(
      parsedFocus || parsedLearning || parsedBuilding || parsedAvailability,
    );

    return {
      title: attributes.title ?? "",
      focus: firstNonEmpty(
        attributes.focus,
        parsedFocus,
        hasParsedSections ? "" : description,
      ),
      learning: firstNonEmpty(attributes.learning, parsedLearning),
      building: firstNonEmpty(attributes.building, parsedBuilding),
      availability: firstNonEmpty(attributes.availability, parsedAvailability),
    };
  });
  return (
    mapped[0] || {
      title: "",
      focus: "",
      learning: "",
      building: "",
      availability: "",
    }
  );
}
