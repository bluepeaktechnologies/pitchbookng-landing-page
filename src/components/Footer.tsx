import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../content/site";
import SocialIcons from "./SocialIcons";
import StoreButtons from "./StoreButtons";

type FooterLink = { label: string; href: string };

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.href}
              className="text-sm text-white/75 transition hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-950 to-zinc-950">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
      />

      <div className="relative mx-auto px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Book football pitches in Abuja in minutes.
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Real-time availability, secure payments, and trusted reviews — so
                you can play more and plan less.
              </p>
            </div>
            <StoreButtons />
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/20">
                <img src="/logo.png" alt="" className="h-7 w-7" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  {site.brand.name}
                </p>
                <p className="text-xs text-white/60">
                  Football pitch booking, simplified.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href={`mailto:${site.contact.infoEmail}`}
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-200" />
                {site.contact.infoEmail}
              </a>
              <a
                href={`mailto:${site.contact.supportEmail}`}
                className="flex items-center gap-2 text-white/75 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-200" />
                {site.contact.supportEmail}
              </a>
              <a
                href={site.contact.whatsappUrl}
                className="flex items-center gap-2 text-white/75 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-emerald-200" />
                {site.contact.phoneDisplay}
              </a>
              <div className="flex items-start gap-2 text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-200" />
                <span>{site.contact.address.display}</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <SocialIcons />
            </div>
          </div>

          <div className="grid gap-10 grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterColumn title="Product" links={site.footer.product} />
            <FooterColumn title="Company" links={site.footer.company} />
            <FooterColumn title="Legal" links={site.footer.legal} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60 text-center">
            © {year} {site.brand.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/50 text-center">
            Book football pitches in Abuja and Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
