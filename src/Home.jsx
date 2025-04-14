import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold tracking-widest mb-10">
          Check out the latest comic!
        </h1>
  
        <div className="latest-comic mb-16">
          <Link to="./comic">
            <img src="/assets/comic/COVER.png" alt="Cover" className="mx-auto w-72 mb-6" />
          </Link>
          
            <h2 className="text-3xl mt-6 font-bold">The only man who Y the call...</h2>
            <p className="mt-2 text-gray-400 max-w-xl mx-auto">
              Discover Josh's journey with aliens in a black & white sci-fi webcomic.
            </p>
          
        </div>
  
        <div className="bg-white text-black p-6 rounded max-w-md mx-auto mb-10">
          <h2 className="text-xl font-bold">🛸 Featured Merch Drop</h2>
          <p className="mb-2 text-sm">Josh's Black Sweatshirt is now available</p>
          <Link
            to="/product/black-sweatshirt"
            className="inline-block bg-black text-white px-4 py-2 rounded mt-2 hover:bg-gray-800 transition"
          >
            View Product
          </Link>
        </div>

        <div className="">
          <Link to="./Broadcast">
            <h2 className="text-xl font-bold">🛸 Click here for a surprise</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
