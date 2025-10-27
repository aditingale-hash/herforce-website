import React from 'react';

const TechCard = ({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) => (
  <div className="bg-[#3e2a44]/80 rounded-xl overflow-hidden border border-[#5a3d63] transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-pink-900/40">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-[#f5e6f0]">{title}</h3>
      <p className="text-[#c5b8c3]">{description}</p>
    </div>
  </div>
);


const Technology = () => {
  return (
    <section id="tech" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Core Technologies
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            Our solution is built on two powerful, open web standards.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            <TechCard 
              title="WebXR"
              description="The Web API for rendering immersive 3D scenes in Virtual and Augmented Reality. This allows us to build experiences that run directly in your browser, no installation required."
              imageUrl="https://picsum.photos/seed/webxr/600/400"
            />
            <TechCard 
              title="RDF-based Knowledge Graphs"
              description="Using standards like RDF and data sources like Wikidata, we model complex relationships between entities. This structured data is the backbone of our visualizations."
              imageUrl="https://picsum.photos/seed/rdf/600/400"
            />
        </div>
      </div>
    </section>
  );
};

export default Technology;