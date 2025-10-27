import React from 'react';

// FIX: Renamed `children` prop to `description` for clarity and consistency with other components like `FeatureItem`.
const ValueCard = ({ icon, title, description }: { icon: string; title: string; description: React.ReactNode }) => (
  <div className="bg-[#3e2a44]/50 p-6 rounded-lg border border-[#5a3d63] h-full">
    <div className="text-3xl mb-3 text-[#f7a8b8]">{icon}</div>
    <h4 className="text-xl font-semibold text-[#f5e6f0] mb-2">{title}</h4>
    <p className="text-[#c5b8c3]">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About HerForce
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            Pioneering the Next Wave of Data Interaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#f7a8b8]">Our Story</h3>
                <p className="text-[#f5e6f0]">
                    'HerForce' was born from a collaborative university project at the Chemnitz University of Technology. Faced with the challenge of making complex knowledge graphs understandable, our team envisioned a future beyond flat screens and static diagrams. We were inspired to create a more intuitive, human-centric way to explore interconnected data, leading us to the immersive frontiers of WebXR.
                </p>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-[#f7a8b8]">Our Mission</h3>
                <p className="text-[#f5e6f0]">
                    Our mission is to dissolve the barriers between complex information and human understanding. We believe that by transforming abstract data into tangible, explorable virtual environments, we can unlock new levels of insight and discovery for everyone, from researchers and students to curious minds.
                </p>
            </div>
        </div>

        <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-2xl font-semibold text-center text-[#f7a8b8] mb-8">Our Core Values</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* FIX: Updated ValueCard to use the `description` prop instead of children. */}
                <ValueCard icon="💡" title="Innovation" description="We constantly push the boundaries of what's possible with open web technologies to create novel experiences." />
                {/* FIX: Updated ValueCard to use the `description` prop instead of children. */}
                <ValueCard icon="🌐" title="Accessibility" description="Built on standards like WebXR, our vision is for a future where immersive data is accessible to all, directly in the browser." />
                {/* FIX: Updated ValueCard to use the `description` prop instead of children. */}
                <ValueCard icon="💎" title="Clarity" description="Our primary goal is to demystify complexity and present data in a form that is not only informative but also intuitive." />
                 {/* FIX: Updated ValueCard to use the `description` prop instead of children. */}
                <ValueCard icon="❤️" title="Human-Centric Design" description="Every interaction is designed with the user in mind, aiming for an experience that feels natural and empowering." />
            </div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto p-6 bg-pink-900/20 border border-pink-700/50 rounded-lg text-center">
            <h4 className="font-bold text-pink-300 text-lg">A Fictional Endeavor</h4>
            <p className="text-pink-400/80 mt-2">
                Please remember that HerForce is a fictional company created exclusively for the "Planspiel Web Engineering" project. This website serves as a conceptual demonstration of our project goals and is not a commercial entity.
            </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;