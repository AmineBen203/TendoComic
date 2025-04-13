import { Link } from "react-router-dom";
import products from "./productData";

export default function Shop() {
  return (
    <div className="p-10 bg-black min-h-screen">
      <h1 className="text-white text-4xl font-bold text-center mb-10">🛍️ The Galactic Merch Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {Object.entries(products).map(([id, product]) => (
          <div
            key={id}
            className="bg-white text-black rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-contain bg-black p-4"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2 mb-4">
                {product.description.slice(0, 60)}...
              </p>
              <Link
                to={`/product/${id}`}
                className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
