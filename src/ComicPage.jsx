// src/pages/ComicPage.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './utils/supabase'

function ComicPage() {
  const { id } = useParams()
  const [pages, setPages] = useState([])
  const [comic, setComic] = useState(null)

  useEffect(() => {
    const fetchComic = async () => {
      const { data: comicData } = await supabase
        .from('comics')
        .select('*')
        .eq('id', id)
        .single()
      setComic(comicData)
    }

    const fetchPages = async () => {
      const { data: pagesData } = await supabase
        .from('comic_pages')
        .select('*')
        .eq('comic_id', id)
        .order('page_number', { ascending: true })

      setPages(pagesData)
    }

    fetchComic()
    fetchPages()
  }, [id])

  if (!comic) return <div>Loading...</div>

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">{comic.title}</h1>
      <p className="mb-2 text-gray-600">By {comic.author}</p>
      <div className="space-y-4">
        {pages.map((page) => (
          <img key={page.id} src={page.image_url} alt={`Page ${page.page_number}`} className="w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}

export default ComicPage
