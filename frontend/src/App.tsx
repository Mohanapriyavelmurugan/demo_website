import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { SmoothScroll } from "./components/SmoothScroll";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Vision } from "./pages/Vision";
import { Product } from "./pages/Product";
import { Validation } from "./pages/Validation";
import { Evidence } from "./pages/Evidence";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";
import { Legal } from "./pages/Legal";
import { Toaster } from "./components/ui/sonner";
import "./App.css";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="alyvn-theme">
      <SmoothScroll>
        <BrowserRouter>
          <div className="App min-h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/product" element={<Product />} />
              <Route path="/validation" element={<Validation />} />
              <Route path="/evidence" element={<Evidence />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<Legal />} />
            </Routes>
            <Footer />
            <Toaster />
          </div>
        </BrowserRouter>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
