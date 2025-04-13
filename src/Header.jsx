
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold tracking-widest flex items-center">
      <a href="/"><img src="./src/assets/icon/icon.png" alt="Site Logo" className="h-24 w-24 mr-2"/>
      <span className="text-3xl">TendoComic</span></a>  
      </h1>
      <nav className="space-x-4 text-sm uppercase">
        <Link to="/">Home</Link>
        <Link to="/comic">Comic</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
