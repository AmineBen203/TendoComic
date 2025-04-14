import React from 'react';
import { Link } from 'react-router-dom';
import icon from './assets/icon/icon.png';  
import sound from './assets/sounds/allo.mp3';


export default function Header() {
  const playAudio = () => {
    const audio = new Audio('./assets/sounds/allo.mp3');
    audio.play();
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold tracking-widest flex items-center">
        {/* 👇 Clickable logo triggers audio */}
        <a href="./" onClick={playAudio} className="flex items-center">
          <img src={icon} alt="Site Logo" className="h-24 w-24 mr-2" />
          <span className="text-3xl">TendoComic</span>
        </a>
      </h1>

      <nav className="space-x-4 text-sm uppercase">
        <Link to="/">Home</Link>
        <Link to="/comic">Comic</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/broadcast">Broadcast</Link>
        {/* Add more links as needed */}
      </nav>
    </header>
  );
}
