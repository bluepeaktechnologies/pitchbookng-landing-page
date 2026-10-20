import { absoluteUrl, getSeo, site } from "../content/site";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function organizationLd() {
  return {
    "@type": "Organization",
    "@id": `${site.brand.url}/#organization`,
    name: site.brand.name,
    url: `${site.brand.url}/`,
    logo: site.brand.logo,
    email: site.contact.infoEmail,
    telephone: site.contact.phone,
    sameAs: [
      site.social.instagram,
      site.social.x,
      site.social.facebook,
      site.social.tiktok,
      site.social.whatsapp,
      site.social.googleBusiness,
    ].filter((url) => url.length > 0),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      addressCountry: site.contact.address.countryCode,
    },
  };
}

function localBusinessLd() {
  return {
    "@type": "LocalBusiness",
    "@id": `${site.brand.url}/#localbusiness`,
    name: site.brand.name,
    url: `${site.brand.url}/`,
    image: site.brand.ogImage,
    telephone: site.contact.phone,
    email: site.contact.infoEmail,
    areaServed: [
      { "@type": "City", name: "Abuja" },
      { "@type": "Country", name: "Nigeria" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.locality,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.region,
      addressCountry: site.contact.address.countryCode,
    },
    parentOrganization: { "@id": `${site.brand.url}/#organization` },
  };
}

function websiteLd() {
  return {
    "@type": "WebSite",
    "@id": `${site.brand.url}/#website`,
    name: site.brand.name,
    url: `${site.brand.url}/`,
    publisher: { "@id": `${site.brand.url}/#organization` },
  };
}

function mobileAppLd() {
  return {
    "@type": "MobileApplication",
    name: site.stores.ios.name,
    operatingSystem: "iOS",
    applicationCategory: "SportsApplication",
    offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
    downloadUrl: site.stores.ios.url,
    installUrl: site.stores.ios.url,
  };
}

function faqLd() {
  return {
    "@type": "FAQPage",
    mainEntity: site.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function jsonLdFor(pathname: string): Record<string, unknown> {
  const graph: Record<string, unknown>[] = [
    organizationLd(),
    websiteLd(),
    mobileAppLd(),
  ];
  if (pathname === "/" || pathname === "/football-pitches-abuja") {
    graph.push(localBusinessLd());
  }
  if (pathname === "/faq") {
    graph.push(faqLd());
  }
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function renderHead(pathname: string): string {
  if (pathname === "/404") {
    return [
      `<title>Page not found | ${escapeHtml(site.brand.name)}</title>`,
      `<meta name="robots" content="noindex, follow" />`,
      `<meta name="description" content="This page is not on the pitch. Head back to PitchBookng to book a football pitch in Abuja." />`,
    ].join("\n    ");
  }

  const seo = getSeo(pathname);
  const url = absoluteUrl(pathname);
  const title = escapeHtml(seo.title);
  const description = escapeHtml(seo.description);
  const keywords = escapeHtml(seo.keywords);
  const image = escapeHtml(site.brand.ogImage);
  const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION;

  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="keywords" content="${keywords}" />`,
    `<meta name="author" content="${escapeHtml(site.brand.name)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta name="theme-color" content="#0F6F3E" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:site_name" content="${escapeHtml(site.brand.name)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:secure_url" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeHtml(`${site.brand.name} app preview`)}" />`,
    `<meta property="og:locale" content="en_NG" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${escapeHtml(site.brand.twitterHandle)}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="apple-itunes-app" content="app-id=${site.stores.ios.appId}, app-argument=${url}" />`,
    `<meta name="application-name" content="${escapeHtml(site.brand.name)}" />`,
    `<meta name="apple-mobile-web-app-title" content="${escapeHtml(site.brand.name)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLdFor(pathname))}</script>`,
  ];

  if (verification) {
    tags.push(
      `<meta name="google-site-verification" content="${escapeHtml(verification)}" />`,
    );
  }

  return tags.join("\n    ");
}

export function applyClientSeo(pathname: string): void {
  if (typeof document === "undefined") return;
  const seo = getSeo(pathname);
  document.title = seo.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", seo.description);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", absoluteUrl(pathname));
}
