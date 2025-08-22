"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  theme?: "light" | "dark";
}

export default function CodeBlock({ code, language = "plaintext", theme = "dark" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // volta após 2s
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return (
    <div className="my-4 border rounded-lg overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-3 py-2">
        <span className="text-sm font-mono text-gray-600 dark:text-gray-300">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="text-xs bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 px-2 py-1 rounded transition"
        >
          {copied ? "✅ Copiado!" : "📋 Copiar"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{ margin: 0, padding: "1em" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
