import { CalendarClock, CreditCard, MapPin, QrCode } from "lucide-react";
import { site } from "../content/site";

const ICONS = [MapPin, CalendarClock, CreditCard, QrCode];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="reveal bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
          How it works
        </p>
        <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Book a football pitch in four steps
        </h2>
        <p className="mt-3 max-w-2xl text-base text-zinc-600">
          From search to kick-off, PitchBookng keeps the whole flow on your
          phone — built for players in Abuja and across Nigeria.
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.howItWorks.map((step, index) => {
            const Icon = ICONS[index] ?? MapPin;
            return (
              <li
                key={step.title}
                className="rounded-2xl bg-emerald-50/60 p-6 ring-1 ring-emerald-100"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  Step {index + 1}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
