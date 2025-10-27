import React from 'react';

// FIX: Changed type of `icon` from `JSX.Element` to `React.ReactNode` to resolve "Cannot find namespace 'JSX'" error.
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string; }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-[#2a1d2e] rounded-lg flex items-center justify-center text-[#f7a8b8]">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-semibold text-[#f5e6f0]">{title}</h4>
      <p className="text-[#c5b8c3] mt-1">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-20 bg-[#3e2a44]/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Project Features</h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            A breakdown of our goals, from essential requirements to our future vision.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          
          <div className="p-6 bg-[#2a1d2e]/50 rounded-lg border border-[#5a3d63]">
            <h3 className="text-xl font-bold text-[#f7a8b8] mb-6">Core Requirements (MUST)</h3>
            <div className="space-y-6">
              <FeatureItem icon={<CubeIcon />} title="Render KG in AR" description="The primary goal: display the knowledge graph in an augmented reality space." />
              <FeatureItem icon={<DatabaseIcon />} title="RDF-based Data" description="Utilize data from RDF sources like Wikidata to ensure a standardized foundation." />
              <FeatureItem icon={<CursorClickIcon />} title="Interactive & Navigable" description="Users must be able to select nodes to explore the graph's connections." />
            </div>
          </div>

          <div className="p-6 bg-[#2a1d2e]/50 rounded-lg border border-[#5a3d63]">
            <h3 className="text-xl font-bold text-[#f7a8b8] mb-6">Advanced Capabilities (SHOULD)</h3>
            <div className="space-y-6">
              <FeatureItem icon={<FilterIcon />} title="Semantic Filtering" description="Allow users to show only semantically relevant information to reduce clutter." />
              <FeatureItem icon={<SparklesIcon />} title="Rich Visual Metaphors" description="Move beyond simple spheres, using varied shapes and icons for different node types." />
              <FeatureItem icon={<MicrophoneIcon />} title="Multimodal Interaction" description="Enable interaction through voice commands and touch gestures for a natural experience." />
            </div>
          </div>

          <div className="p-6 bg-[#2a1d2e]/50 rounded-lg border border-[#5a3d63]">
            <h3 className="text-xl font-bold text-[#f7a8b8] mb-6">Future Vision (NICE TO HAVE)</h3>
            <div className="space-y-6">
              <FeatureItem icon={<CodeIcon />} title="Connect LLMs to the Graph" description="Integrate Large Language Models to provide natural language answers about the graph." />
              <FeatureItem icon={<EyeIcon />} title="Context-Aware Subgraphs" description="Automatically display subgraphs relevant to the object a user is looking at in AR." />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// SVG Icons
const CubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
const CursorClickIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l5-2 2 8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.333 12.667L6 7.333" /></svg>;
const FilterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V16a1 1 0 01-.293.707l-2 2A1 1 0 0113 18v-1.586l-3.707-3.707A1 1 0 019 12V6a1 1 0 01-.293-.707L8 4H4a1 1 0 01-1-1z" /></svg>;
const SparklesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m11-13l-1.414 1.414M17 5h4M19 3v4m-5 8l-1.414 1.414M15 19h4m-2-2v4" /></svg>;
const MicrophoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const EyeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;

export default Features;