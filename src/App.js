import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Services from "./pages/services";
import Resume from "./pages/resume";
import Work from "./pages/work";
import Contact from "./pages/contact";

// Component to handle route transitions with animations
function AnimatedRoutes() {
  const location = useLocation(); // useLocation must be used inside BrowserRouter

  return (
    <AnimatePresence mode="wait">
      <div className="scale-125">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

// Main component to set up BrowserRouter and route animations
function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App; // Ensure App is exported as default
