import StoreButtons from "../components/StoreButtons";
import { site } from "../content/site";

export default function DownloadCta() {
  return (
    <section id="download" className="reveal bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-zinc-900 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Download PitchBook NG and book your next game
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Available on the App Store now. Google Play is coming soon. Questions?
            Email{" "}
            <a
              className="text-emerald-300 hover:underline"
              href={`mailto:${site.contact.infoEmail}`}
            >
              {site.contact.infoEmail}
            </a>
            .
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
