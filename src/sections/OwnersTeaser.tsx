import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../content/site";

export default function OwnersTeaser() {
  return (
    <section className="reveal bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-emerald-900 px-6 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">
            For pitch owners
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {site.owners.headline}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-emerald-50 sm:text-base">
            {site.owners.intro}
          </p>
          <Link
            to="/owners"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            List your pitch
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
