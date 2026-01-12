import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Images } from "../assets";
import { Link } from "react-router-dom";

type NavItem = { label: string; href: string };

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Download App", href: "#download" },
  { label: "Contact", href: "/contact-us" },
];

function classNames(...v: Array<string | false | undefined | null>) {
  return v.filter(Boolean).join(" ");
}

function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

function AppStoreButtons() {
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

function Logo() {
  return (
    <a href="#home" className="group inline-flex items-center gap-2">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-700/15 ring-1 ring-emerald-500/20">
        <img src={Images.logo} />
      </span>
      <span className="leading-tight">
        <span className="block text-base font-semibold text-zinc-900">
          PitchBookng
        </span>
        <span className="block text-xs text-zinc-600 group-hover:text-zinc-700">
          Book pitches fast
        </span>
      </span>
    </a>
  );
}

export default function AppHeader({
  sticky = true,
  texture = true,
}: {
  sticky?: boolean;
  texture?: boolean;
}) {
  const [open, setOpen] = useState(false);
  useLockBody(open);

  // close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const headerCls = useMemo(
    () =>
      classNames(
        "w-full",
        sticky && "sticky top-0 z-50",
        "backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80",
        "border-b border-zinc-200/70 bg-red-100"
      ),
    [sticky]
  );

  return (
    <header className={headerCls}>
      {/* subtle texture behind header */}
      {texture && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(5,150,105,0.22) 1px, transparent 0)",
            backgroundSize: "12px 12px",
          }}
        />
      )}

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => window.scrollTo(0, 0)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-emerald-50 hover:text-zinc-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <AppStoreButtons />
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/5 text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-900/10 lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={classNames(
          "lg:hidden",
          open ? "pointer-events-auto bg-white" : "hidden pointer-events-none"
        )}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          className={classNames(
            "fixed inset-0 z-50 bg-zinc-950/40 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div
          className={classNames(
            "fixed right-0 top-0 z-[60] h-full w-[86%] max-w-sm transform bg-white shadow-2xl transition",
            open ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
            <Logo />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900/5 text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-900/10"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="px-5 py-5 bg-white">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-emerald-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 mt-6 rounded-2xl bg-emerald-50 p-4 ring-1 ring-emerald-100">
              <p className="text-sm font-semibold text-zinc-900">Get the app</p>
              <p className="mt-1 text-xs text-zinc-600">
                Book pitches, pay securely, and track bookings.
              </p>
              <div className="flex flex-col gap-3">
                <a href="" aria-label="Download on the App Store">
                  <div className="h-12 bg-black rounded-lg flex items-center p-5 gap-3">
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
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              By downloading, you agree to our{" "}
              <a className="text-emerald-700 hover:underline" href="/terms">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-emerald-700 hover:underline" href="/privacy">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
