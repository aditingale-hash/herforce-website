import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutProject from './components/AboutProject';
import AboutUs from './components/AboutUs';
import Technology from './components/Technology';
import Features from './components/Features';
import LLMDemo from './components/LLMDemo';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#2a1d2e] text-[#f5e6f0] font-sans">
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
  );
}

export default App;