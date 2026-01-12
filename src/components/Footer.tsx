import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { Images } from "../assets";

type FooterLink = { label: string; href: string };

const policyLinks: FooterLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/refunds" },
  { label: "FAQ", href: "/faq" },
];

const productLinks: FooterLink[] = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Features", href: "/features" },
  { label: "Owner Dashboard", href: "/owners" },
  { label: "Pitch Listings", href: "/pitches" },
];

const companyLinks: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contac-ust" },
  { label: "Careers", href: "/careers" },
  { label: "Press", href: "/press" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/pitch.book",
    Icon: Instagram,
  },
  { label: "Twitter", href: "#", Icon: Twitter },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold tracking-wide text-white">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              className="group inline-flex items-center gap-1 text-sm text-white/75 transition hover:text-white"
            >
              {l.label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StoreButtons() {
  return (
    <div className="flex gap-3">
      <a href="" aria-label="Download on the App Store">
        <div className=" h-12 bg-black rounded-lg flex items-center p-2 gap-3">
          <img src={Images.appleLogoWhite} className="w-6" />
          <div className="flex flex-col gap-0">
            <p className="text-white text-xs">Download on the</p>
            <p className="text-white">App Store</p>
          </div>
        </div>
      </a>

      <a href="" aria-label="Get it on Google Play">
        <div className=" h-12 bg-black rounded-lg flex items-center p-2 gap-3">
          <img src={Images.playStore} className="w-6" />
          <div className="flex flex-col gap-0">
            <p className="text-white text-xs">Get it on</p>
            <p className="text-white">Google Play</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-950 to-zinc-950">
      {/* subtle texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      />
      {/* top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[48rem] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl"
      />

      <div className="relative mx-auto px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        {/* CTA strip */}
        <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Book football pitches in minutes.
              </h3>
              <p className="mt-2 max-w-xl text-sm text-white/70">
                Real-time availability, secure payments, and trusted reviews—so
                you can play more and plan less.
              </p>
            </div>
            <StoreButtons />
          </div>
        </div>

        {/* main grid */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/20">
                <MapPin className="h-6 w-6 text-emerald-200" />
              </div>
              <div>
                <p className="text-base font-semibold text-white">
                  PitchBookng
                </p>
                <p className="text-xs text-white/60">
                  Football pitch booking, simplified.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:support@pitchbookng.com"
                className="inline-flex items-center gap-2 text-white/75 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-emerald-200" />
                support@pitchbookng.com
              </a>
              <div className="flex items-center gap-2 text-white/75">
                <Phone className="h-4 w-4 text-emerald-200" />
                <span>+234 (0) 000 000 0000</span>
              </div>
              <div className="flex items-start gap-2 text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 text-emerald-200" />
                <span>Jahi, Abuja • Nigeria</span>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <Icon className="h-5 w-5 text-white/85" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-10 grid-cols-2 lg:col-span-8 lg:grid-cols-3">
            <FooterColumn title="Product" links={productLinks} />
            <FooterColumn title="Company" links={companyLinks} />
            <FooterColumn title="Legal" links={policyLinks} />
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/60 text-center">
            © {year} PitchBookng. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs items-center justify-center">
            <a className="text-white/60 hover:text-white" href="/security">
              Security
            </a>
            <a className="text-white/60 hover:text-white" href="/status">
              Status
            </a>
            <a className="text-white/60 hover:text-white" href="/accessibility">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
