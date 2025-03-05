import { MarkdownEditor } from "@/components/markdown-editor";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Share instructions with everyone
        </h1>
        <MarkdownEditor />
      </div>
    </main>
  );
}
