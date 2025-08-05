import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [feature, setFeature] = useState("cheatnotes");
  const [topic, setTopic] = useState("");
  const [lang, setLang] = useState("English");
  const [output, setOutput] = useState("📝 Output will appear here...");

  async function generateResponse() {
    if (!topic.trim()) {
      alert("❗ Please enter a topic or question.");
      return;
    }
    setOutput("⏳ Generating content... Please wait.");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ feature, topic, lang }),
      });

      const data = await res.json();
      setOutput(data.text || "❌ No response from backend.");
    } catch (err) {
      console.error(err);
      setOutput("❌ Error connecting to backend.");
    }
  }

  function copyToClipboard() {
    if (output && output !== "📝 Output will appear here...") {
      navigator.clipboard.writeText(output).then(() =>
        alert("✅ Copied to clipboard!")
      );
    } else {
      alert("Nothing to copy!");
    }
  }

  return (
    <>
      <Head>
        <title>UPSC AI Exam Assistant</title>
      </Head>
      <div className="container">
        <h1>🧠 UPSC & Govt Exam AI Assistant</h1>

        <label>🛠️ Select Feature</label>
        <select value={feature} onChange={(e) => setFeature(e.target.value)}>
          <option value="cheatnotes">📝 Cheat Notes</option>
          <option value="mnemonics">🔡 Mnemonics / Acronym</option>
          <option value="qa">📚 Flashcard Q&A</option>
          <option value="test">🧪 Topic-wise Test (5 MCQs)</option>
          <option value="current">📰 Current Affairs Timeline</option>
          <option value="doubt">❓ Ask a Previous Year Doubt</option>
          <option value="plan">📅 Custom Study Plan</option>
          <option value="recap">⏱️ 15-Min Quick Recap</option>
        </select>

        <label>📌 Enter Topic / Question</label>
        <textarea
          rows="4"
          placeholder="Eg: Fundamental Rights, March 2025 Current Affairs..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        ></textarea>

        <label>🌐 Output Language</label>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Telugu">Telugu</option>
          <option value="Urdu">Urdu</option>
          <option value="Tamil">Tamil</option>
          <option value="Bengali">Bengali</option>
        </select>

        <button onClick={generateResponse}>🚀 Generate Content</button>

        <div className="output">{output}</div>
        <button className="copy-btn" onClick={copyToClipboard}>
          📋 Copy
        </button>
      </div>
    </>
  );
}
