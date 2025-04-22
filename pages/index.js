import '../styles/globals.css';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-4xl font-light mb-4 tracking-wide">Highgate Collectables</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Curated antiques and collectables with character, from Highgate to your home.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
        Shop Now
      </button>
    </div>
  );
}
