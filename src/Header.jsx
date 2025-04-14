import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon from './assets/icon/icon.png';
import sound from './assets/sounds/allo.mp3';
import { Menu, X } from 'lucide-react'; // If you're using lucide-react (optional)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const playAudio = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-black text-white p-4 border-b border-gray-700">
      <div className="flex justify-between items-center">
        <a href="./" onClick={playAudio} className="flex items-center">
          <img src={icon} alt="Site Logo" className="h-16 w-16 mr-2" />
          <span className="text-2xl font-bold tracking-widest">TendoComic</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase">
          <Link to="/">Home</Link>
          <Link to="/comic">Comic</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/broadcast">Broadcast</Link>
        </nav>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="flex flex-col space-y-4 mt-4 text-center text-sm uppercase md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/comic" onClick={() => setMenuOpen(false)}>Comic</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/broadcast" onClick={() => setMenuOpen(false)}>Broadcast</Link>
        </nav>
      )}
    </header>
  );
}
