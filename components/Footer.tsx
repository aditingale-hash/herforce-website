import React from 'react';
import { HerForceLogo } from './HerForceLogo';

const Footer = () => {
  return (
    <footer className="bg-[#2a1d2e] border-t border-[#5a3d63]">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <HerForceLogo />
            <p className="mt-2 text-sm text-[#c5b8c3]/70 max-w-xs">
              Chemnitz University of Technology
              <br/>
              Planspiel Web Engineering - Winter 2025/2026
            </p>
          </div>
          <div className="text-sm text-[#c5b8c3]">
            <h4 className="font-semibold text-[#f5e6f0] mb-2">Contact</h4>
            <p>Jan-Ingo.Haas@informatik.tu-chemnitz.de</p>
            <p>Christoph.Goepfert@informatik.tu-chemnitz.de</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#5a3d63] text-center text-xs text-[#c5b8c3]/70">
          <p className="font-bold">Disclaimer: 'HerForce' is a fictional entity created for a university project.</p>
          <p>This website and all associated content are for demonstration purposes only and do not represent a real company or product.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;