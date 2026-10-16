import {
  Clock3,
  History,
  QrCode,
  ShieldCheck,
  Star,
  MapPinned,
} from "lucide-react";
import { site } from "../content/site";

const ICONS = [Clock3, ShieldCheck, Star, QrCode, History, MapPinned];

export default function Features() {
  return (
    <section id="features" className="reveal bg-zinc-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
          Features
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Everything you need to book and play
        </h2>
        <p className="mt-3 max-w-2xl text-base text-zinc-600">
          Live slots, trusted payments and a ticket you can actually show at the
          gate.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.features.map((feature, index) => {
            const Icon = ICONS[index] ?? Clock3;
            return (
              <article
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
