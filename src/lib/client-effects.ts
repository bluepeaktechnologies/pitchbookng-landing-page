import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "./analytics";
import { applyClientSeo } from "./seo";
import { captureUtmFromUrl } from "./utm";

export function useClientEffects(): void {
  const { pathname, hash, search } = useLocation();

  useEffect(() => {
    initAnalytics();
    captureUtmFromUrl();
  }, [search]);

  useEffect(() => {
    applyClientSeo(pathname);
    trackPageView(`${pathname}${search}${hash}`);
  }, [pathname, search, hash]);

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
}
