import { useState } from "react";
import { Search } from "lucide-react";

export default function PromptForm({ onSearch, loading }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const q = input.trim();
    if (!q) return;
    onSearch(q);
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-2xl">
      <div className="relative flex items-center">
        <Search className="pointer-events-none absolute left-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g., aurora borealis, cute cats, vintage cars"
          className="w-full rounded-l-xl border border-gray-200 bg-white/70 px-11 py-3 text-base text-gray-900 placeholder:text-gray-400 shadow-sm outline-none ring-1 ring-transparent backdrop-blur focus:border-blue-500 focus:ring-blue-100"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-r-xl bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
      <p className="mt-2 text-center text-xs text-gray-500">
        Press Enter or click Search to fetch images.
      </p>
    </form>
  );
}
