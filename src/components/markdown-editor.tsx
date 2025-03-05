"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { type MDEditorProps } from "@uiw/react-md-editor";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

const MDPreview = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.Preview),
  { ssr: false }
);

type Tab = "write" | "preview";

export function MarkdownEditor() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("write");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex" aria-label="Tabs">
          <button
            onClick={() => setActiveTab("write")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "write"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Write
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`px-4 py-2 text-sm font-medium ${
              activeTab === "preview"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            Preview
          </button>
          <div className="ml-auto px-4 py-2">
            <button
              onClick={handleCopy}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {copied ? "Copied!" : "Copy text"}
            </button>
          </div>
        </nav>
      </div>

      <div className="p-4">
        {activeTab === "write" ? (
          <MDEditor
            value={value}
            onChange={(val) => setValue(val || "")}
            preview="edit"
            height={400}
          />
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            <MDPreview source={value} />
          </div>
        )}
      </div>
    </div>
  );
}
