import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ text: "Method not allowed" });
  }

  const { feature, topic, lang } = req.body;

  const promptMap = {
    cheatnotes: `Create a concise 1-page UPSC bullet-point cheat sheet on "${topic}". Include important facts, schemes, dates, and people. Respond only in the ${lang} language.`,
    mnemonics: `Provide mnemonics, acronyms, and memory tricks for "${topic}" to help in UPSC memorization. Respond only in the ${lang} language.`,
    qa: `Generate flashcard-style Q&A on "${topic}" for UPSC aspirants. Respond only in the ${lang} language.`,
    test: `Create 5 multiple choice questions (MCQs) with options and detailed explanations on "${topic}" for UPSC/Govt exams. Respond only in the ${lang} language.`,
    current: `Summarize current affairs for "${topic}" in a timeline or story format suitable for revision. Respond only in the ${lang} language.`,
    doubt: `Answer this previous year UPSC exam doubt: "${topic}". Keep the answer informative, concise, and respond only in the ${lang} language.`,
    plan: `Suggest a detailed and practical study plan for covering "${topic}" based on UPSC preparation. Respond only in the ${lang} language.`,
    recap: `Provide a 15-minute revision summary for "${topic}". Use bullet points and highlight key info. Respond only in the ${lang} language.`
  };

  if (!promptMap[feature]) {
    return res.status(400).json({ text: "Invalid feature selected" });
  }

  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(promptMap[feature]);
    const text = result.response.text();
    res.status(200).json({ text });
  } catch (err) {
    console.error("Error generating content:", err);
    res.status(500).json({ text: "Error generating content" });
  }
}
