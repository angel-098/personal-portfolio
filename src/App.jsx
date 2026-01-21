import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ArrowUp } from "lucide-react";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Navbar */}
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main Sections */}
        <main>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll-to-Top Button */}
        {showScroll && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-4 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-500 transition z-50"
          >
            <ArrowUp size={24} />
          </button>
        )}

        {/* Optional ScrollToTop Component */}
        <ScrollToTop />
      </div>
    </div>
  );
}

export default App;
