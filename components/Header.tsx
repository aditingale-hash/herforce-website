import React from 'react';
import { HerForceLogo } from './HerForceLogo';

const Header = () => {
  const navLinks = [
    { href: '#about', label: 'Project' },
    { href: '#about-us', label: 'About Us' },
    { href: '#tech', label: 'Technology' },
    { href: '#features', label: 'Features' },
    { href: '#demo', label: 'Demo' },
    { href: '#team', label: 'Team' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#2a1d2e]/80 backdrop-blur-lg border-b border-[#5a3d63]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <HerForceLogo />
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#f5e6f0] hover:text-[#f7a8b8] transition-colors duration-300 font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;