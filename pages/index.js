export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6">
      {/* Header */}
      <div className="flex flex-col items-center text-center py-20">
        <h1 className="text-4xl font-light mb-4 tracking-wide">Highgate Collectables</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl">
          Curated antiques and collectables with character, from Highgate to your home.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>

      {/* Shop Section */}
      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold text-center mb-10">This Week’s Finds</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
              <div className="bg-gray-200 aspect-square mb-4 rounded-lg" />
              <h3 className="text-lg font-medium">Antique Item {item}</h3>
              <p className="text-sm text-gray-600 mt-1">Short description of item {item}.</p>
              <p className="mt-3 font-semibold">£XX.XX</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
