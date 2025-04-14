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
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={comic.cover}
              alt={comic.title}
              className="w-full h-72 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{comic.title}</h2>
              <p className="text-sm text-gray-500">{comic.category} • {comic.author}</p>
              {comic.description && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{comic.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Comics
