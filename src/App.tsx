import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import { CancellationTerms } from "./components/CancellationTerms";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { useClientEffects } from "./lib/client-effects";
import About from "./screens/About";
import Abuja from "./screens/Abuja";
import ContactUs from "./screens/Contact";
import Faq from "./screens/Faq";
import Home from "./screens/Home";
import { NotFound } from "./screens/NotFound";
import Owners from "./screens/Owners";

function ClientEffects() {
  useClientEffects();
  return null;
}

export function AppShell() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <ClientEffects />
      <AppHeader />
      <div className="flex flex-1 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/about" element={<About />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/football-pitches-abuja" element={<Abuja />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refunds" element={<CancellationTerms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
