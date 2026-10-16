import { Link } from "react-router-dom";
import PageBand from "../components/PageBand";
import StoreButtons from "../components/StoreButtons";
import { site } from "../content/site";
import HowItWorks from "../sections/HowItWorks";

export default function Abuja() {
  return (
    <main className="min-h-[calc(100vh-90px)] bg-white w-full">
      <PageBand title={site.abuja.headline} subtitle={site.abuja.intro} />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
            Areas we serve in Abuja
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600">
            Search in the PitchBookng app for football pitches, astro turf and
            5-a-side near you. Coverage grows as more venues join — including
            these neighbourhoods:
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {site.abuja.areas.map((area) => (
              <li
                key={area}
                className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 ring-1 ring-emerald-100"
              >
                {area}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <HowItWorks />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900">
            Ready to book a pitch in Abuja?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-zinc-600">
            Download PitchBook NG, pick a slot, and show your QR ticket at the
            gate. Pitch owner?{" "}
            <Link
              to="/owners"
              className="font-semibold text-emerald-800 hover:underline"
            >
              List your venue
            </Link>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </section>
    </main>
  );
}
