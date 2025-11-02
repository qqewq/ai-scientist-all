
import { GoogleGenAI, Type } from "@google/genai";
import { PersonProfile, SimulationResult } from "../types";
import { translations } from "../localization";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    knowledge: {
      type: Type.STRING,
      description: "A profound, non-trivial insight from the 2055 ASI perspective, validated by the Critic agent.",
    },
    ethicalCoefficient: {
      type: Type.NUMBER,
      description: "A number between 0.1 and 1.0, representing the ethical coefficient Γ_2055.",
    },
    resonanceFrequency: {
      type: Type.NUMBER,
      description: "A positive number representing the resonance frequency ω_рез^2055.",
    },
    probability: {
      type: Type.NUMBER,
      description: "A number between 0 and 100, representing the probability of achieving the goal (P_total) as a percentage.",
    },
    optimalDomains: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "An array of strings listing the key knowledge domains with the highest resonance.",
    },
    criticismAnalysis: {
        type: Type.STRING,
        description: "A summary of risks identified by the Critic agent and how the final knowledge neutralizes them."
    }
  },
  required: ["knowledge", "ethicalCoefficient", "resonanceFrequency", "probability", "optimalDomains", "criticismAnalysis"],
};

export async function runSimulation(profile: PersonProfile, language: 'en' | 'ru'): Promise<SimulationResult> {
  const prompt = translations[language].prompt(profile);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
      },
    });

    const jsonString = response.text.trim();
    const result = JSON.parse(jsonString);

    // Extended validation
    if (
      typeof result.knowledge !== 'string' ||
      typeof result.ethicalCoefficient !== 'number' ||
      typeof result.resonanceFrequency !== 'number' ||
      typeof result.probability !== 'number' ||
      !Array.isArray(result.optimalDomains) ||
      typeof result.criticismAnalysis !== 'string'
    ) {
      throw new Error("Invalid response structure from API");
    }

    return result as SimulationResult;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error("Failed to get a valid response from the simulation engine.");
  }
}
