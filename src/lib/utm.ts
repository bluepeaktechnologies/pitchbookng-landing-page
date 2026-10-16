const STORAGE_KEY = "pb_first_touch_utm";

export type UtmParams = {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
};

function readParams(search: string): UtmParams | null {
  const params = new URLSearchParams(search);
  const utm: UtmParams = {
    source: params.get("utm_source") ?? undefined,
    medium: params.get("utm_medium") ?? undefined,
    campaign: params.get("utm_campaign") ?? undefined,
    content: params.get("utm_content") ?? undefined,
    term: params.get("utm_term") ?? undefined,
  };
  if (!utm.source && !utm.medium && !utm.campaign) return null;
  return utm;
}

export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return;
  const incoming = readParams(window.location.search);
  if (!incoming) return;
  if (localStorage.getItem(STORAGE_KEY)) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(incoming));
}

export function getStoredUtm(): UtmParams | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : null;
  } catch {
    return null;
  }
}

function campaignToken(utm: UtmParams): string {
  return [utm.source, utm.campaign].filter(Boolean).join("_") || "website";
}

export function withAppStoreCampaign(url: string): string {
  const utm = getStoredUtm();
  if (!utm?.source) return url;
  const parsed = new URL(url);
  parsed.searchParams.set("ct", campaignToken(utm));
  parsed.searchParams.set("mt", "8");
  return parsed.toString();
}

export function withPlayReferrer(url: string): string {
  const utm = getStoredUtm();
  if (!utm?.source) return url;
  const referrer = new URLSearchParams({
    utm_source: utm.source,
    utm_medium: utm.medium ?? "social",
    utm_campaign: utm.campaign ?? "bio",
  }).toString();
  const parsed = new URL(url);
  parsed.searchParams.set("referrer", referrer);
  return parsed.toString();
}
