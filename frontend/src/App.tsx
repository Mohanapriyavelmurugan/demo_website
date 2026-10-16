import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { ScrollToTop } from "./components/ScrollToTop";
import { Analytics } from "./lib/analytics";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { RedirectLegacy } from "./components/Redirect";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Solutions } from "./pages/Solutions";
import { Clinoveai } from "./pages/Clinoveai";
import { Partners } from "./pages/Partners";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { Toaster } from "./components/ui/sonner";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="valtraq-theme">
      <BrowserRouter>
        <ScrollToTop />
        <Analytics />
        <div className="App min-h-screen bg-transparent text-foreground">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/clinoveai" element={<Clinoveai />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
              {/* Retired routes — redirect to nearest new page */}
              <Route path="/product" element={<RedirectLegacy />} />
              <Route path="/services" element={<RedirectLegacy />} />
              <Route path="/team" element={<RedirectLegacy />} />
              <Route path="/vision" element={<RedirectLegacy />} />
              <Route path="/validation" element={<RedirectLegacy />} />
              <Route path="/evidence" element={<RedirectLegacy />} />
              <Route path="/newsroom" element={<RedirectLegacy />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
          <Toaster />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
