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

  // JSON-LD structured data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "UPSC AI Exam Assistant",
    "url": "https://upsc-exam-assistance.netlify.app/",
    "applicationCategory": "EducationApplication",
    "description": "AI-powered UPSC & Govt exam preparation tool. Generate cheat notes, mnemonics, Q&A, mock tests, study plans, and current affairs summaries in multiple languages.",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>UPSC AI Exam Assistant | Free UPSC & Govt Exam Preparation Tool</title>
        <meta
          name="description"
          content="Prepare for UPSC & Govt exams with our free AI-powered assistant. Get cheat notes, mnemonics, Q&A, MCQs, study plans, and current affairs summaries in English, Hindi, Urdu, Tamil, and Bengali."
        />
        <meta
          name="keywords"
          content="UPSC AI Assistant, UPSC preparation, govt exam preparation, UPSC cheat notes, UPSC mnemonics, UPSC study plan, current affairs UPSC, UPSC MCQs"
        />
        <meta name="author" content="UPSC AI Exam Assistant" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="UPSC AI Exam Assistant" />
        <meta
          property="og:description"
          content="AI-powered UPSC & Govt exam preparation tool in English, Hindi, Urdu, Tamil, and Bengali."
        />
        <meta
          property="og:image"
          content="https://upsc-exam-assistance.netlify.app/og-image.jpg"
        />
        <meta
          property="og:url"
          content="https://upsc-exam-assistance.netlify.app/"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UPSC AI Exam Assistant" />
        <meta
          name="twitter:description"
          content="AI-powered UPSC & Govt exam preparation tool in multiple languages."
        />
        <meta
          name="twitter:image"
          content="https://upsc-exam-assistance.netlify.app/og-image.jpg"
        />

        {/* Multi-language hints */}
        <link rel="alternate" href="https://upsc-exam-assistance.netlify.app/" hrefLang="en" />
        <link rel="alternate" href="https://upsc-exam-assistance.netlify.app/" hrefLang="hi" />
        <link rel="alternate" href="https://upsc-exam-assistance.netlify.app/" hrefLang="ur" />
        <link rel="alternate" href="https://upsc-exam-assistance.netlify.app/" hrefLang="ta" />
        <link rel="alternate" href="https://upsc-exam-assistance.netlify.app/" hrefLang="bn" />
        <link rel="canonical" href="https://upsc-exam-assistance.netlify.app/" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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
