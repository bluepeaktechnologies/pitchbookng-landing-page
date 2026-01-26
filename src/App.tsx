import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import HeroSection from "./screens/Hero";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { TermsOfService } from "./components/TermsOfService";
import { CancellationTerms } from "./components/CancellationTerms";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import ContactUs from "./screens/Contact";
import { NotFound } from "./screens/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-[100vh]">
        <AppHeader />
        <div className="flex flex-1 flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/refunds" element={<CancellationTerms />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/service" element={<TermsOfService />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <footer>
          <AppFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
