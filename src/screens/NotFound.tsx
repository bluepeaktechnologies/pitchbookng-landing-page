import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search, ShieldAlert } from "lucide-react";

const MESSAGES = [
  "404 — That pass went out for a throw-in. This page isn’t on the pitch.",
  "404 — Offside! You’ve wandered beyond the last defender (and our routes).",
  "404 — That link hit the crossbar. No page here, unfortunately.",
  "404 — VAR check complete: page not found.",
  "404 — This page got a red card and left the match early.",
  "404 — The goalkeeper saved this page. Try another shot.",
  "404 — Wrong stadium entrance. This page isn’t in this venue.",
  "404 — You’re searching for Arsenal’s Champions League trophy cabinet? Keep looking 😅",
  "404 — The fixture list says: Page vs. You. Result: Not Found.",
  "404 — That route was nutmegged. We can’t find the page.",
  "404 — The gaffer changed tactics. This page is no longer in the squad.",
  "404 — Corner taken quickly… but the page didn’t show up.",
  "404 — The pitch is ready, but this page didn’t turn up for kickoff.",
  "404 — That page transferred to another club… without telling us.",
  "404 — You’ve gone into extra time. Still no page found.",
  "404 — We searched the bench, the stands, and the tunnel… nothing.",
  "404 — This page is training separately. Check back later.",
  "404 — That URL got tackled. Cleanly. No advantage played.",
  "404 — Your link is doing stepovers, but it’s not going anywhere.",
  "404 — This page is currently on international duty.",
];

export const NotFound = () => {
  const message = MESSAGES[0];

  return (
    <main className="w-full relative min-h-[calc(100vh-90px)] overflow-hidden bg-white">
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 right-[-6rem] h-72 w-72 rounded-full bg-zinc-900/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(5,150,105,0.7) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-90px)] items-center justify-center px-4 py-14 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl">
          <div className="rounded-3xl bg-white p-8 shadow-[0_25px_60px_-40px_rgba(0,0,0,0.35)] ring-1 ring-black/5 sm:p-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-100">
              <ShieldAlert className="h-4 w-4" />
              404 — Page Not Found
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              Looks like you’ve dribbled off the pitch.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              {message}
            </p>

            {/* Quick actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-md"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>

              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900/5 px-5 py-3 text-sm font-semibold text-zinc-900 ring-1 ring-black/10 transition hover:-translate-y-0.5 hover:bg-zinc-900/10 hover:shadow-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200 transition hover:bg-emerald-50"
              >
                <Search className="h-4 w-4" />
                Contact Support
              </Link>
            </div>

            {/* Small hint row */}
            <div className="mt-8 rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/5">
              <p className="text-sm text-zinc-700">
                Tip: Check the link address, or head back home to book a pitch.
              </p>
            </div>
          </div>

          {/* tiny footer */}
          <p className="mt-6 text-center text-xs text-zinc-500">
            PitchBookng — Find pitches. Book fast. Play more.
          </p>
        </div>
      </div>
    </main>
  );
};
