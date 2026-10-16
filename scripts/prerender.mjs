import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

function findSsrEntry() {
  const candidates = ["entry-server.js", "entry-server.mjs"];
  for (const name of candidates) {
    const full = path.join(ssrDir, name);
    if (fs.existsSync(full)) return full;
  }
  const files = fs.readdirSync(ssrDir);
  const match = files.find((f) => f.startsWith("entry-server"));
  if (!match) {
    throw new Error(`SSR bundle not found in ${ssrDir}: ${files.join(", ")}`);
  }
  return path.join(ssrDir, match);
}

function writeHtml(template, html, head, outFile) {
  const withHead = template.replace(
    /<!--app-head-start-->[\s\S]*?<!--app-head-end-->/,
    () => `<!--app-head-start-->\n    ${head}\n    <!--app-head-end-->`,
  );
  const withApp = withHead.replace(
    '<div id="root"></div>',
    () => `<div id="root">${html}</div>`,
  );
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, withApp);
}

function sitemapXml(origin, routes) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map((route) => {
      const loc = route === "/" ? `${origin}/` : `${origin}${route}`;
      const priority =
        route === "/"
          ? "1.0"
          : route === "/football-pitches-abuja"
            ? "0.9"
            : "0.7";
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render, ROUTES } = await import(pathToFileURL(findSsrEntry()).href);
const origin = "https://pitchbookng.com";

for (const route of ROUTES) {
  const { html, head } = render(route);
  const outFile =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route.replace(/^\//, ""), "index.html");
  writeHtml(template, html, head, outFile);
  console.log(`prerendered ${route}`);
}

const notFound = render("/missing-page-for-static-404");
writeHtml(
  template,
  notFound.html,
  notFound.head,
  path.join(dist, "404.html"),
);
console.log("prerendered /404.html");

fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemapXml(origin, ROUTES));
console.log("wrote sitemap.xml");
