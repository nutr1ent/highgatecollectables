import { sanity } from '../lib/sanity';

export async function getStaticProps() {
  const products = await sanity.fetch(`*[_type == "product"]{
    _id,
    title,
    description,
    price,
    "imageUrl": image.asset->url
  }`);

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

export default function HomePage({ products }) {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6">
      <div className="text-center py-20">
        <h1 className="text-4xl font-light mb-4">Highgate Collectables</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Curated antiques with character, from Highgate to your home.
        </p>
      </div>

      <section className="py-12 border-t">
        <h2 className="text-2xl font-semibold text-center mb-10">This Week’s Finds</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div key={item._id} className="border p-4 rounded-xl shadow-sm">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={item.title} className="w-full aspect-square object-cover mb-4 rounded-lg" />
              ) : (
                <div className="bg-gray-200 aspect-square mb-4 rounded-lg" />
              )}
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="mt-2 font-semibold">£{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
