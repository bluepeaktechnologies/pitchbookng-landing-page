import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../content/site";

export default function FaqPreview() {
  const preview = site.faq.slice(0, 4);

  return (
    <section className="reveal bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Questions players ask before they book
        </h2>

        <dl className="mt-10 space-y-4">
          {preview.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <dt className="text-base font-semibold text-zinc-900">
                {item.question}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>

        <Link
          to="/faq"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:underline"
        >
          See all FAQs
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
