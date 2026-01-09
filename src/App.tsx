import "./App.css";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import HeroSection from "./screens/Hero";

function App() {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <AppHeader />
      <div className="flex flex-1 flex-grow">
        <HeroSection />
      </div>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
