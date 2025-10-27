// FIX: Replaced placeholder content with a functional React component to serve as the main application entry point.
// This component imports and renders all the individual section components to build the complete webpage.
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import Technology from './components/Technology';
import Features from './components/Features';
import LLMDemo from './components/LLMDemo';
import Team from './components/Team';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import InteractiveBackground from './components/InteractiveBackground';
import SakuraPetalOverlay from './components/SakuraPetalOverlay';

function App() {
  return (
    <div className="bg-[#2a1d2e] text-[#f5e6f0] font-sans antialiased relative">
      <InteractiveBackground />
      <SakuraPetalOverlay />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <AboutProject />
          <AboutUs />
          <Technology />
          <Features />
          <LLMDemo />
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
