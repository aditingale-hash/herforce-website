import React from 'react';

const AboutProject = () => {
  return (
    <section id="about" className="py-20 bg-[#3e2a44]/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From Flat Data to Immersive Insight
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            Traditional knowledge graph visualizations often fail to retain the rich, contextual "knowledge" within the data. We're changing that by moving beyond 2D screens.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-[#2a1d2e]/50 p-8 rounded-lg border border-[#5a3d63]">
            <h3 className="text-2xl font-semibold text-[#f7a8b8] mb-4">The Challenge</h3>
            <p className="text-[#f5e6f0]">
              Visualizing complex RDF triples (Subject, Predicate, Object) as simple dots and lines loses semantic depth. Users see connections but don't intuitively grasp the underlying knowledge. This limits exploration and understanding.
            </p>
          </div>
          <div className="bg-[#2a1d2e]/50 p-8 rounded-lg border border-[#5a3d63]">
            <h3 className="text-2xl font-semibold text-[#f7a8b8] mb-4">Our Solution</h3>
            <p className="text-[#f5e6f0]">
              By rendering knowledge graphs in an interactive 3D space using WebXR, we create an environment where users can navigate, interact with, and truly experience the data. Information is not just seen; it's explored.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;