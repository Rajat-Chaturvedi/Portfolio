function toAbsoluteUrl(rawUrl: string) {
  if (!rawUrl?.trim()) return "";

  try {
    const normalized = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
    return new URL(normalized);
  } catch {
    return null;
  }
}

function normalizeBookCallUrl(rawUrl: string) {
  const url = toAbsoluteUrl(rawUrl);
  if (!url) return rawUrl;

  try {
    url.searchParams.delete("month");
    return url.toString();
  } catch {
    return rawUrl;
  }
}

function normalizeAllSlotsUrl(rawUrl: string) {
  const url = toAbsoluteUrl(rawUrl);
  if (!url) return rawUrl;

  try {
    url.searchParams.delete("month");

    const hostname = url.hostname.replace(/^www\./i, "").toLowerCase();
    if (hostname === "cal.com") {
      const segments = url.pathname.split("/").filter(Boolean);
      if (segments.length > 0) {
        url.pathname = `/${segments[0]}`;
      }
    }

    return url.toString();
  } catch {
    return rawUrl;
  }
}

export function mapCTAs(strapiData: any[]) {
  const mapped = strapiData.map((item) => {
    const attributes = item.attributes ?? item;
    const sourceUrl = attributes.url ?? "";

    return {
      headline: attributes.label ?? "",
      subheadline: attributes.subheadline ?? "",
      email: attributes.email ?? "",
      resumeUrl: attributes.resumeUrl ?? "",
      calendarUrl: normalizeBookCallUrl(sourceUrl),
      allSlotsUrl: normalizeAllSlotsUrl(sourceUrl),
    };
  });

  return (
    mapped[0] || {
      headline: "",
      subheadline: "",
      email: "",
      resumeUrl: "",
      calendarUrl: "",
      allSlotsUrl: "",
    }
  );
}
