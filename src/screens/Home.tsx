import DownloadCta from "../sections/DownloadCta";
import FaqPreview from "../sections/FaqPreview";
import Features from "../sections/Features";
import Hero from "../sections/Hero";
import HowItWorks from "../sections/HowItWorks";
import OwnersTeaser from "../sections/OwnersTeaser";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <HowItWorks />
      <Features />
      <OwnersTeaser />
      <FaqPreview />
      <DownloadCta />
    </main>
  );
}
