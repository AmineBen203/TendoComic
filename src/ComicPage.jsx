import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './utils/supabase'
import PdfViewer from './components/PdfViewer'

function ComicPage() {
  const { id } = useParams()
  const [comic, setComic] = useState(null)
  const [pdfUrl, setPdfUrl] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchComicAndPDF = async () => {
      const { data: comicData, error: comicError } = await supabase
        .from('comics')
        .select('*')
        .eq('id', id)
        .single()

      if (comicError) {
        console.error('Error loading comic:', comicError)
        setLoading(false)
        return
      }

      setComic(comicData)

      const { data: pagesData, error: pagesError } = await supabase
        .from('comic_pages')
        .select('comic_pdf')
        .eq('comic_id', id)
        .limit(1)

      if (pagesError) {
        console.error('Error loading PDF:', pagesError)
        setLoading(false)
        return
      }

      if (pagesData && pagesData.length > 0) {
        setPdfUrl(pagesData[0].comic_pdf)
      }

      setLoading(false)
    }

    fetchComicAndPDF()
  }, [id])

  if (loading) {
    return (
      <div className="text-center mt-10">
        <div className="w-1/2 mx-auto bg-gray-200 rounded-full h-4 dark:bg-gray-700">
          <div className="bg-blue-600 h-4 rounded-full animate-pulse w-3/4"></div>
        </div>
        <p className="mt-4 text-gray-500">Loading comic...</p>
      </div>
    )
  }

  if (!comic) return <div className="text-center mt-6">Comic not found.</div>

  return (
    <div className="max-w-screen-md mx-auto px-4 pb-10">
      <h1 className="text-3xl font-bold mb-2">{comic.title}</h1>
      <p className="mb-4 text-gray-500">By {comic.author}</p>

      {pdfUrl ? (
        <PdfViewer key={pdfUrl} pdfUrl={pdfUrl} />
      ) : (
        <p className="text-sm text-gray-400">No PDF found for this comic.</p>
      )}
    </div>
  )
}

export default ComicPage