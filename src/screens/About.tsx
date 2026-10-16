import { Link } from "react-router-dom";
import PageBand from "../components/PageBand";
import { site } from "../content/site";

export default function About() {
  return (
    <main className="min-h-[calc(100vh-90px)] bg-white w-full">
      <PageBand
        title={`About ${site.brand.name}`}
        subtitle={site.about.headline}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <article className="space-y-5 rounded-2xl bg-white p-6 text-base leading-relaxed text-zinc-700 shadow-sm ring-1 ring-black/5 sm:p-8">
          {site.about.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            Enquiries:{" "}
            <a
              className="font-semibold text-emerald-800 hover:underline"
              href={`mailto:${site.contact.infoEmail}`}
            >
              {site.contact.infoEmail}
            </a>
            . Booking support:{" "}
            <a
              className="font-semibold text-emerald-800 hover:underline"
              href={`mailto:${site.contact.supportEmail}`}
            >
              {site.contact.supportEmail}
            </a>
            .
          </p>
          <p>
            <Link
              to="/owners"
              className="font-semibold text-emerald-800 hover:underline"
            >
              List your pitch
            </Link>
            {" · "}
            <Link
              to="/football-pitches-abuja"
              className="font-semibold text-emerald-800 hover:underline"
            >
              Book in Abuja
            </Link>
            {" · "}
            <Link
              to="/contact-us"
              className="font-semibold text-emerald-800 hover:underline"
            >
              Contact us
            </Link>
          </p>
        </article>
      </div>
    </main>
  );
}
