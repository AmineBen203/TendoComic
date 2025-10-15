// src/pages/Comics.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from './utils/supabase'

function Comics() {
  const [comics, setComics] = useState([])

  useEffect(() => {
    const fetchComics = async () => {
      const { data, error } = await supabase.from('comics').select('*').order('date', { ascending: false })
      if (error) {
        console.error('Failed to fetch comics:', error)
      } else {
        setComics(data)
      }
    }

    fetchComics()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Latest Comics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {comics.map((comic) => (
          <Link
            key={comic.id}
            to={`/comic/${comic.id}`}
            className="bg-zinc-900 border border-zinc-700 p-4 rounded-xl shadow-md hover:shadow-xl hover:border-white transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={comic.cover}
              alt={comic.title}
              className="w-full h-auto max-h-[600px] object-contain rounded-md"
            />
            <h2 className="text-lg font-bold mt-3 text-white text-center">Title: {comic.title}</h2>
            <p className="text-gray-400 text-sm text-center">Author: {comic.author}</p>
            <p className="text-gray-400 text-sm text-center">Date: {comic.date}</p>
            <p className="text-gray-400 text-sm text-center">Genre: {comic.category}</p>
          </Link>
        
        
        ))}
      </div>
    </div>
  )
}

export default Comics
