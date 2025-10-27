import React from 'react';

const SakuraPetalOverlay = () => {
  // Create an array of petal elements to render
  const petals = Array.from({ length: 15 }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      // Randomize animation delay and duration for a natural, non-uniform effect
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${10 + Math.random() * 10}s`,
      // Randomize size for variety
      width: `${10 + Math.random() * 10}px`,
      height: `${10 + Math.random() * 10}px`,
    };
    return <div key={i} className="sakura-petal" style={style}></div>;
  });

  return (
    // This container sits on top of the particle background but behind the main content.
    // pointer-events-none ensures it doesn't interfere with mouse interactions.
    <div 
      className="fixed top-0 left-0 w-full h-full -z-5 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {petals}
    </div>
  );
};

export default SakuraPetalOverlay;
