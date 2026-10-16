import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppShell } from "./App";
import { ROUTES } from "./content/site";
import { renderHead } from "./lib/seo";

export { ROUTES };

export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>,
  );

  const known = (ROUTES as readonly string[]).includes(url);
  return { html, head: renderHead(known ? url : "/404") };
}
