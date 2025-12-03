import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedContent } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini
// Note: In a real production app, you might proxy this through a backend to secure the key.
// For this demo, we assume the environment variable is available.
const ai = new GoogleGenAI({ apiKey });

export const generateSocialContent = async (
  topic: string,
  platform: string,
  tone: string
): Promise<GeneratedContent> => {
  if (!apiKey) {
    console.warn("No API Key provided. Returning mock data.");
    return {
      platform,
      script: "This is a simulated script because no API key was found. Imagine a great hook here!",
      caption: `Check out this amazing post about ${topic}! #viral #${platform}`,
      hashtags: ["#viral", "#trending", `#${platform.toLowerCase()}`],
      suggestedVisual: "A high-contrast image showing the product in use with neon lighting."
    };
  }

  try {
    const modelId = "gemini-2.5-flash"; // Optimized for text tasks
    const prompt = `
      Act as an expert social media strategist for "Viralitics".
      Create a viral content strategy for the topic: "${topic}".
      Target Platform: ${platform}.
      Tone: ${tone}.

      Output structured JSON with:
      - script: A short video script or text post body.
      - caption: An engaging caption with a call to action.
      - hashtags: A list of 5-10 relevant, high-reach hashtags.
      - suggestedVisual: A description of the visual style or image prompt.
    `;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            script: { type: Type.STRING },
            caption: { type: Type.STRING },
            hashtags: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedVisual: { type: Type.STRING }
          },
          required: ["script", "caption", "hashtags", "suggestedVisual"]
        }
      }
    });

    const jsonText = response.text || "{}";
    const data = JSON.parse(jsonText);

    return {
      platform,
      script: data.script || "Could not generate script.",
      caption: data.caption || "Could not generate caption.",
      hashtags: data.hashtags || [],
      suggestedVisual: data.suggestedVisual || "No visual suggestion."
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate content. Please try again.");
  }
};

export const chatWithAssistant = async (message: string, history: {role: string, text: string}[]): Promise<string> => {
    if (!apiKey) {
        return "I'm currently in demo mode without an API key, but I'd love to help you scale your social media presence! Please configure the API key to chat with me.";
    }

    try {
        const modelId = "gemini-2.5-flash";
        const systemInstruction = `
            You are TiC, the AI assistant for Viralitics. 
            Viralitics is an AI-first social media operating system.
            Your goal is to help users understand the platform, pricing, and features (AI Manager, Influencer Marketplace, Ad Automation, AI Tutor).
            Keep answers concise, helpful, and enthusiastic.
            If asked about pricing: Starter is free, Creator Pro is $29/mo, Business is $99/mo.
        `;
        
        // Construct the prompt with history
        let prompt = `${systemInstruction}\n\n`;
        history.forEach(msg => {
            prompt += `${msg.role === 'user' ? 'User' : 'TiC'}: ${msg.text}\n`;
        });
        prompt += `User: ${message}\nTiC:`;

        const response = await ai.models.generateContent({
            model: modelId,
            contents: prompt,
        });

        return response.text || "I'm thinking...";
    } catch (error) {
        console.error("Gemini Chat Error:", error);
        return "I'm having trouble connecting to my brain right now. Please try again later.";
    }
}