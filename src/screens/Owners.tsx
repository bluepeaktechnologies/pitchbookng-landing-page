import { Link } from "react-router-dom";
import PageBand from "../components/PageBand";
import WebAppButtons from "../components/WebAppButtons";
import { site } from "../content/site";
import { trackEvent } from "../lib/analytics";

export default function Owners() {
  return (
    <main className="min-h-[calc(100vh-90px)] bg-white w-full">
      <PageBand title="For pitch owners" subtitle={site.owners.headline} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="max-w-3xl text-base leading-relaxed text-zinc-700">
          {site.owners.intro}
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {site.owners.benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <h2 className="text-lg font-semibold text-zinc-900">
                {benefit.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {benefit.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
          <h2 className="text-lg font-semibold text-zinc-900">
            Ready to list your football pitch?
          </h2>
          <p className="mt-2 text-sm text-zinc-700">
            Email{" "}
            <a
              className="font-semibold text-emerald-800 hover:underline"
              href={`mailto:${site.contact.infoEmail}`}
            >
              {site.contact.infoEmail}
            </a>{" "}
            or message us on WhatsApp and we will get you onto the owners app.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <WebAppButtons showBook={false} />
            <a
              href={site.contact.whatsappUrl}
              onClick={() =>
                trackEvent("whatsapp_click", { network: "whatsapp" })
              }
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200 hover:bg-emerald-50"
            >
              WhatsApp us
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-200 hover:bg-emerald-50"
            >
              Contact form
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
