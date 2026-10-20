import { site } from "../content/site";
import { trackEvent } from "../lib/analytics";

type WebAppButtonsProps = {
  showBook?: boolean;
  showRegister?: boolean;
};

export default function WebAppButtons({
  showBook = true,
  showRegister = true,
}: WebAppButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {showBook ? (
        <a
          href={site.webApps.client}
          onClick={() => trackEvent("web_app_click", { app: "client" })}
          className="inline-flex items-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Book a session
        </a>
      ) : null}
      {showRegister ? (
        <a
          href={site.webApps.org}
          onClick={() => trackEvent("web_app_click", { app: "org" })}
          className={
            showBook
              ? "inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200 hover:bg-emerald-50"
              : "inline-flex items-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          }
        >
          Register your Pitch
        </a>
      ) : null}
    </div>
  );
}
