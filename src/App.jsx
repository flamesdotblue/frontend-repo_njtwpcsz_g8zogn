import { useState } from "react";
import Header from "./components/Header";
import PromptForm from "./components/PromptForm";
import ImageGrid from "./components/ImageGrid";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchImages(q) {
    try {
      setLoading(true);
      setError("");
      setQuery(q);
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/images?query=${encodeURIComponent(q)}&limit=28`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to fetch images");
      setItems(data.items || []);
    } catch (e) {
      setError(e.message || "Something went wrong");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-10">
        <Header />
        <PromptForm onSearch={fetchImages} loading={loading} />

        {error && (
          <div className="mx-auto mt-6 max-w-2xl rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {loading ? (
          <div className="mt-10 flex items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <ImageGrid items={items} query={query} />
        )}

        <Footer />
      </div>
    </div>
  );
}

export default App;
