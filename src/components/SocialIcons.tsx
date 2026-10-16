import { Facebook, Instagram } from "lucide-react";
import { socialLinks } from "../content/site";
import { trackEvent } from "../lib/analytics";

type IconProps = { className?: string };

function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.56l-5.14-6.71L5.5 22H2.24l8.03-9.17L1.5 2h6.73l4.64 6.15L18.244 2Zm-1.15 18.15h1.81L7.01 3.76H5.07l12.024 16.39Z"
      />
    </svg>
  );
}

function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M21 8.24a6.9 6.9 0 0 1-4.02-1.28v7.33A6.79 6.79 0 1 1 9.3 7.5c.2 0 .4.01.59.04v3.33a3.5 3.5 0 1 0 2.46 3.34V2h3.2A6.9 6.9 0 0 0 21 6.9V8.24Z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.33 4.94L2 22l5.4-1.41a10 10 0 0 0 4.64 1.18h.01c5.46 0 9.89-4.4 9.89-9.83 0-2.63-1.03-5.1-2.9-6.96A9.9 9.9 0 0 0 12.04 2Zm0 17.97h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.2.84.85-3.12-.2-.32a8.13 8.13 0 0 1-1.25-4.38c0-4.5 3.68-8.16 8.22-8.16 2.2 0 4.26.85 5.81 2.4a8.1 8.1 0 0 1 2.4 5.78c0 4.5-3.68 8.17-8.14 8.17Zm4.5-6.12c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z"
      />
    </svg>
  );
}

const ICONS = {
  instagram: Instagram,
  x: XIcon,
  facebook: Facebook,
  tiktok: TikTokIcon,
  whatsapp: WhatsAppIcon,
} as const;

export default function SocialIcons({
  className = "h-5 w-5 text-white/85",
}: {
  className?: string;
}) {
  return (
    <>
      {socialLinks.map(({ label, href, network }) => {
        const Icon = ICONS[network];
        return (
          <a
            key={network}
            href={href}
            target="_blank"
            rel="noopener noreferrer me"
            aria-label={label}
            onClick={() =>
              trackEvent(network === "whatsapp" ? "whatsapp_click" : "social_click", {
                network,
              })
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
          >
            <Icon className={className} />
          </a>
        );
      })}
    </>
  );
}
