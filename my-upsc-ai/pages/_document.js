// my-upsc-ai/pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://upsc-exam-assistance.netlify.app/"
        />

        {/* hreflang links */}
        <link
          rel="alternate"
          href="https://upsc-exam-assistance.netlify.app/en"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://upsc-exam-assistance.netlify.app/hi"
          hrefLang="hi"
        />
        <link
          rel="alternate"
          href="https://upsc-exam-assistance.netlify.app/ur"
          hrefLang="ur"
        />
        <link
          rel="alternate"
          href="https://upsc-exam-assistance.netlify.app/ta"
          hrefLang="ta"
        />
        <link
          rel="alternate"
          href="https://upsc-exam-assistance.netlify.app/bn"
          hrefLang="bn"
        />

        {/* SEO meta tags */}
        <meta
          name="description"
          content="AI-powered UPSC & Govt Exam study assistant. Generate cheat notes, MCQs, flashcards, current affairs and study plans in English, Hindi, Urdu, Tamil, Bengali."
        />
        <meta
          name="keywords"
          content="UPSC AI assistant, UPSC notes in Hindi, UPSC study plan, UPSC current affairs, UPSC MCQ generator"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="UPSC AI Exam Assistant" />
        <meta
          property="og:description"
          content="AI-powered UPSC study assistant with multilingual support for notes, MCQs, flashcards and more."
        />
        <meta
          property="og:url"
          content="https://upsc-exam-assistance.netlify.app/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://upsc-exam-assistance.netlify.app/preview.jpg"
        />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id":
                    "https://upsc-exam-assistance.netlify.app/#website",
                  "url": "https://upsc-exam-assistance.netlify.app/",
                  "name": "UPSC Exam Assistance",
                  "description":
                    "AI-powered UPSC preparation tool offering cheat sheets, mnemonics, flashcards, MCQs and current affairs summaries.",
                  "publisher": {
                    "@id":
                      "https://upsc-exam-assistance.netlify.app/#organization"
                  },
                  "inLanguage": ["en", "hi", "ur", "ta", "bn"],
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target":
                      "https://upsc-exam-assistance.netlify.app/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id":
                    "https://upsc-exam-assistance.netlify.app/#organization",
                  "name": "UPSC Exam Assistance",
                  "url": "https://upsc-exam-assistance.netlify.app/",
                  "logo": {
                    "@type": "ImageObject",
                    "url":
                      "https://upsc-exam-assistance.netlify.app/logo.png"
                  },
                  "sameAs": [
                    "https://twitter.com/yourpage",
                    "https://facebook.com/yourpage"
                  ]
                },
                {
                  "@type": "WebApplication",
                  "@id":
                    "https://upsc-exam-assistance.netlify.app/#webapp",
                  "name": "UPSC Exam Assistance Tool",
                  "url": "https://upsc-exam-assistance.netlify.app/",
                  "description":
                    "Generate cheat notes, MCQs, flashcards and current affairs summaries in English, Hindi, Urdu, Tamil, and Bengali.",
                  "applicationCategory": "EducationalApplication",
                  "operatingSystem": "All",
                  "creator": {
                    "@id":
                      "https://upsc-exam-assistance.netlify.app/#organization"
                  },
                  "inLanguage": ["en", "hi", "ur", "ta", "bn"]
                },
                {
                  "@type": "FAQPage",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "How can I generate UPSC cheat notes?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Select 'Cheat Notes' from the feature list, enter your topic, choose a language, and click 'Generate Content'."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can I get UPSC current affairs in Hindi?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes, choose 'Current Affairs Timeline' and select Hindi as the output language."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Is the UPSC AI Exam Assistant free?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text":
                          "Yes, it is completely free to use for UPSC and government exam preparation."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
