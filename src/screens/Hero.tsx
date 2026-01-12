import { useLayoutEffect } from "react";
import { Images } from "../assets";
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

export default function HeroSection() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden w-full">
      {/* Textured background */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Images.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Top: pitch background (fades in diagonally from right) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${Images.pitchImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",

          // ✅ This creates the *soft diagonal fade* (not a sharp clip)
          // Black = visible, Transparent = hidden
          WebkitMaskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          maskImage:
            "linear-gradient(115deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.85) 70%, rgba(0,0,0,1) 100%)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      {/* Soft overlays for readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/35 to-white"
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 lg:px-8 lg:pb-20 lg:pt-14">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left: copy */}
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
              Book football pitches instantly.
              <br />
              <span className="text-zinc-900">Play more, stress less.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-700 sm:text-lg">
              Easily find, book, and enjoy football pitches near you with our
              intuitive app. Secure your game time and focus on playing, not
              planning.
            </p>

            <div className="mt-7">
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

          {/* Right: screenshot */}
          <div className="lg:col-span-6">
            <div className="mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:ml-auto lg:mr-0 flex items-center justify-center">
              <img
                src={Images.appScreenshot}
                alt="App screenshot preview"
                className="h-96 lg:h-[500px] rounded-3xl shadow-2xl ring-1 ring-black/10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
