"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

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
    <div className="my-4 border rounded-lg overflow-hidden border-red-500">
      <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-3 py-2">
        <span className="text-base font-mono text-gray-600 dark:text-gray-300">
          {language}
        </span>
        <button
          onClick={handleCopy}
className={`text-sm border-1 px-2 py-1 min-w-[93px] rounded transition cursor-pointer flex gap-2 items-center justify-center
  ${copied 
    ? "border-green-400 bg-green-600" 
    : "bg-gray-200 dark:bg-gray-700 border-transparent hover:bg-gray-300 dark:hover:bg-gray-600"
  }`}        >
          {!copied && (
            <>
              <MdContentCopy size={15} />
              Copiar
            </>
          )}
          {copied && (
            <>
             <FaCheck size={13}/>
              Copiado
            </>
          )
          }
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={theme === "dark" ? oneDark : oneLight}
        customStyle={{ margin: 0, padding: "1em", borderTopLeftRadius: 0, borderTopRightRadius:0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
