import { GoogleGenAI } from "@google/genai";

// FIX: Per guidelines, API_KEY must be available from environment variables.
// The "!" non-null assertion operator is used to satisfy TypeScript's type checker,
// assuming the key is always present in the execution environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export async function generateText(prompt: string): Promise<string> {
  try {
    // FIX: Use systemInstruction for better contextual prompting, as per Gemini API guidelines.
    const systemInstruction = `You are an AI assistant exploring a knowledge graph about philosophy and art, focusing on figures like Socrates and Raphael. Provide a concise, informative answer based on the connections in this knowledge graph.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      // FIX: The user's direct query is passed as contents.
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating text:", error);
    throw new Error("Failed to communicate with the Gemini API.");
  }
}
