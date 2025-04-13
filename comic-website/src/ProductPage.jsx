
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import products from './productData';

export default function ProductPage() {
  const { id } = useParams();
  const product = products[id];

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.paypal && window.paypal.HostedButtons && product?.hostedButtonId) {
        clearInterval(interval);
        window.paypal.HostedButtons({
          hostedButtonId: product.hostedButtonId
        }).render(`#paypal-container-${product.hostedButtonId}`);
      }
    }, 300);
  }, [product]);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="max-w-xl mx-auto text-center mt-10">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-full my-6 rounded" />
      <p className="mb-6 text-gray-300">{product.description}</p>
      <div id={`paypal-container-${product.hostedButtonId}`} />
    </div>
  );
}
