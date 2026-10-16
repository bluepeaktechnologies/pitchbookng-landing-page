import siteJson from "./site.json";

export const site = siteJson;

export type Site = typeof site;
export type SeoEntry = Site["seo"][keyof Site["seo"]];

export const ROUTES = [
  "/",
  "/faq",
  "/about",
  "/owners",
  "/football-pitches-abuja",
  "/contact-us",
  "/terms",
  "/privacy",
  "/refunds",
] as const;

export type SitePath = (typeof ROUTES)[number];

export function absoluteUrl(path: string): string {
  const base = site.brand.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getSeo(pathname: string): SeoEntry {
  const normalised =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  const seo = site.seo as Record<string, SeoEntry>;
  return seo[normalised] ?? site.seo["/"];
}

export const socialLinks = [
  { label: "Instagram", href: site.social.instagram, network: "instagram" },
  { label: "X", href: site.social.x, network: "x" },
  { label: "Facebook", href: site.social.facebook, network: "facebook" },
  { label: "TikTok", href: site.social.tiktok, network: "tiktok" },
  { label: "WhatsApp", href: site.social.whatsapp, network: "whatsapp" },
] as const;
