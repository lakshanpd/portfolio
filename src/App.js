import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home";
import Services from "./pages/services";
import Resume from "./pages/resume";

// Component to handle route transitions with animations
function AnimatedRoutes() {
  const location = useLocation(); // useLocation must be used inside BrowserRouter

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
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
