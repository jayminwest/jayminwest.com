import OpenAI from "openai";

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

export const openai = apiKey
  ? new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true, // Note: In production, you should proxy requests through your backend
  })
  : null;

const SYSTEM_PROMPT =
  `You are a personal AI assistant representing me. Here are some key facts about me that you should use to answer questions:

- Education: Computer Science degree
- Experience: 10+ years in software development
- Skills: Full-stack development, React, Node.js, Cloud Architecture, System Design
- Hobbies: Hiking mountain trails, Photography, Building side projects, Reading sci-fi novels

Keep responses concise and format them like terminal output when appropriate. Use markdown for formatting.`;

export async function getChatCompletion(message: string): Promise<string> {
  if (!openai) {
    return "⚠️ OpenAI API key not configured. Please add your API key to the .env file as VITE_OPENAI_API_KEY to enable AI responses.";
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 200,
    });

    return completion.choices[0]?.message?.content || "No response generated.";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return "Error: Unable to generate response. Please check your API key and try again.";
  }
}
