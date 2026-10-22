import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ClosingHero from './components/ClosingHero';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Theme state: false = Light Natural Mode (Default), true = Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ClosingHero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
