import type { MouseEvent } from "react";
import { site } from "../content/site";
import { trackEvent } from "../lib/analytics";
import { withAppStoreCampaign, withPlayReferrer } from "../lib/utm";

type StoreButtonsProps = {
  layout?: "row" | "stack";
};

export default function StoreButtons({ layout = "row" }: StoreButtonsProps) {
  const androidUrl = site.stores.android.url;
  const wrap = layout === "stack" ? "flex flex-col gap-3" : "flex flex-wrap gap-3";

  function openIos(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent("app_store_click", { store: "ios" });
    const tagged = withAppStoreCampaign(site.stores.ios.url);
    if (tagged === event.currentTarget.href) return;
    event.preventDefault();
    window.location.assign(tagged);
  }

  function openAndroid(event: MouseEvent<HTMLAnchorElement>) {
    if (!androidUrl) return;
    trackEvent("app_store_click", { store: "android" });
    const tagged = withPlayReferrer(androidUrl);
    if (tagged === event.currentTarget.href) return;
    event.preventDefault();
    window.location.assign(tagged);
  }

  return (
    <div className={wrap}>
      <a
        href={site.stores.ios.url}
        aria-label="Download PitchBook NG on the App Store"
        onClick={openIos}
      >
        <div className="h-12 bg-black rounded-lg flex items-center p-2 gap-3">
          <img
            src="/images/apple-logo-white.png"
            alt=""
            className="w-6"
            width={24}
            height={24}
          />
          <div className="flex flex-col gap-0">
            <p className="text-white text-xs">Download on the</p>
            <p className="text-white">App Store</p>
          </div>
        </div>
      </a>

      {androidUrl ? (
        <a
          href={androidUrl}
          aria-label="Get PitchBook NG on Google Play"
          onClick={openAndroid}
        >
          <PlayBadge />
        </a>
      ) : (
        <div
          className="h-12 bg-zinc-800 rounded-lg flex items-center p-2 gap-3 opacity-80"
          aria-label="PitchBook NG on Google Play, coming soon"
          title="Coming soon on Google Play"
        >
          <img
            src="/images/play-store.png"
            alt=""
            className="w-6"
            width={24}
            height={24}
          />
          <div className="flex flex-col gap-0">
            <p className="text-white text-xs">Coming soon on</p>
            <p className="text-white">Google Play</p>
          </div>
        </div>
      )}
    </div>
  );
}

function PlayBadge() {
  return (
    <div className="h-12 bg-black rounded-lg flex items-center p-2 gap-3">
      <img
        src="/images/play-store.png"
        alt=""
        className="w-6"
        width={24}
        height={24}
      />
      <div className="flex flex-col gap-0">
        <p className="text-white text-xs">Get it on</p>
        <p className="text-white">Google Play</p>
      </div>
    </div>
  );
}
