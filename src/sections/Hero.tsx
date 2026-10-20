import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import StoreButtons from "../components/StoreButtons";
import WebAppButtons from "../components/WebAppButtons";
import { site } from "../content/site";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden w-full">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/background.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/pitch.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Football pitch booking in Abuja & Nigeria
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Book football pitches in Abuja instantly.
              <br />
              <span className="text-zinc-900">Play more, stress less.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              {site.brand.description} Secure your game time and focus on
              playing, not planning.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              <WebAppButtons />
              <StoreButtons />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Real-time availability
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Secure payments
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Ratings & reviews
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:ml-auto lg:mr-0 flex items-center justify-center">
              <img
                src="/images/app-screenshot.webp"
                alt="PitchBookng app showing football pitch listings and a booking in Abuja"
                className="h-96 lg:h-[500px] rounded-3xl shadow-2xl ring-1 ring-black/10"
                width={450}
                height={920}
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/#how-it-works"
            className="inline-flex flex-col items-center gap-1 text-sm font-medium text-zinc-600 transition hover:text-emerald-800"
          >
            How it works
            <ChevronDown className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
