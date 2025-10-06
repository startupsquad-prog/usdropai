import { AILoader } from "@/components/ui/ai-loader";

export default function AILoaderDemo() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">AI Loader Demo</h1>
      <div className="bg-white rounded-lg border-2 border-gray-100 p-8">
        <AILoader text="Discovering Products" size={180} />
      </div>
    </div>
  );
}

