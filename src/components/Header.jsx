import { Sparkles, Image as ImageIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="py-8 text-center">
      <div className="mx-auto inline-flex items-center gap-3 rounded-full bg-white/70 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
        <ImageIcon className="h-5 w-5 text-blue-600" />
        <span className="text-sm font-medium text-gray-700">Instant Image Finder</span>
      </div>
      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
        Find images from a single prompt
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
        Type what you are looking for and get a beautiful gallery in one click — powered by open web sources.
      </p>
      <div className="mt-4 inline-flex items-center gap-2 text-xs text-gray-500">
        <Sparkles className="h-4 w-4" />
        <span>No sign-up. No API key needed.</span>
      </div>
    </header>
  );
}
