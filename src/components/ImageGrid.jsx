export default function ImageGrid({ items, query }) {
  if (!items || items.length === 0) {
    return (
      <div className="mt-10 text-center text-gray-500">
        <p>No images yet. Try searching for "sunset beach" or "modern architecture".</p>
      </div>
    );
  }

  return (
    <section className="mx-auto mt-8 max-w-6xl px-2 md:px-0">
      <h2 className="mb-4 text-sm font-medium text-gray-500">
        Showing {items.length} results for "{query}"
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.pageUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <img
              src={item.thumbnail}
              alt={item.title || "image"}
              loading="lazy"
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-x-0 bottom-0 max-h-16 bg-gradient-to-t from-black/70 to-transparent p-2 text-xs text-white">
              <p className="truncate font-medium">{item.title}</p>
              <p className="truncate opacity-80">{item.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
