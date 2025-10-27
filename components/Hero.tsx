import React from 'react';

const Hero = () => {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative py-24 md:py-32 text-center overflow-hidden">
       <div className="container mx-auto px-6 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f5e6f0] to-[#c5b8c3]">
            Weaving Knowledge
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f7a8b8] to-[#e685a3]">
            Into the Fabric of Reality
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-[#c5b8c3]">
          HerForce is pioneering the future of information visualization by integrating dynamic Knowledge Graphs into immersive Extended Reality experiences with WebXR.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#demo"
            onClick={handleScrollClick}
            className="px-6 py-3 bg-gradient-to-r from-[#f7a8b8] to-[#e685a3] text-white font-semibold rounded-lg shadow-lg hover:shadow-pink-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            See The Vision
          </a>
          <a
            href="#features"
            onClick={handleScrollClick}
            className="px-6 py-3 bg-[#3e2a44] text-[#f5e6f0] font-semibold rounded-lg shadow-md hover:bg-[#5a3d63] transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;