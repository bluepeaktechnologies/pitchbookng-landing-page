import { Link } from "react-router-dom";
import PageBand from "../components/PageBand";
import { site } from "../content/site";

export default function Faq() {
  return (
    <main className="min-h-[calc(100vh-90px)] bg-white w-full">
      <PageBand
        title="Frequently asked questions"
        subtitle="How PitchBookng works for players booking football pitches in Abuja, and for pitch owners listing a venue."
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <dl className="space-y-4">
          {site.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
            >
              <dt className="text-lg font-semibold text-zinc-900">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-zinc-600">
          Still stuck?{" "}
          <Link
            to="/contact-us"
            className="font-semibold text-emerald-800 hover:underline"
          >
            Contact support
          </Link>{" "}
          or email{" "}
          <a
            className="font-semibold text-emerald-800 hover:underline"
            href={`mailto:${site.contact.supportEmail}`}
          >
            {site.contact.supportEmail}
          </a>
          .
        </p>
      </div>
    </main>
  );
}
