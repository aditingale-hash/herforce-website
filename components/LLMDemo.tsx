import React, { useState } from 'react';
import { generateText } from '../services/geminiService';

const LLMDemo = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const prefilledPrompts = [
    "Who was Socrates?",
    "Describe the painting 'The School of Athens'.",
    "What is the connection between Raphael and Socrates?"
  ];

  const handlePromptClick = (p: string) => {
    setPrompt(p);
    handleSubmit(p);
  };

  const handleSubmit = async (currentPrompt: string) => {
    if (!currentPrompt.trim()) return;

    setIsLoading(true);
    setError('');
    setResult('');

    try {
      const response = await generateText(currentPrompt);
      setResult(response);
    } catch (err) {
      setError('Failed to get a response from the AI. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      handleSubmit(prompt);
  }

  return (
    <section id="demo" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Interactive AI Demo
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-[#c5b8c3]">
            Experience how an LLM could query our knowledge graph. Ask a question related to philosophy or art to see a simulated response.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="mb-4 flex flex-wrap justify-center gap-2">
              {prefilledPrompts.map(p => (
                  <button 
                    key={p}
                    onClick={() => handlePromptClick(p)}
                    className="px-3 py-1 bg-[#3e2a44] text-sm text-[#f5e6f0] rounded-full hover:bg-[#5a3d63] transition-colors"
                  >
                    {p}
                  </button>
              ))}
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g., Who was the teacher of Plato?"
              className="flex-grow bg-[#2a1d2e] border border-[#5a3d63] rounded-md px-4 py-3 text-white placeholder-[#c5b8c3]/50 focus:outline-none focus:ring-2 focus:ring-[#f7a8b8]"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#f7a8b8] to-[#e685a3] text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? 'Thinking...' : 'Ask AI'}
            </button>
          </form>

          {error && <div className="mt-4 text-center text-red-400">{error}</div>}
          
          {result && (
            <div className="mt-6 p-6 bg-[#3e2a44]/50 border border-[#5a3d63] rounded-lg whitespace-pre-wrap font-mono text-[#f5e6f0]">
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LLMDemo;