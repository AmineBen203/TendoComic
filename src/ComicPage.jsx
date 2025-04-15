import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from './utils/supabase'
import PdfViewer from './components/PdfViewer'

function ComicPage() {
  const { id } = useParams()
  const [comic, setComic] = useState(null)
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    const fetchComicAndPDF = async () => {
      const { data: comicData, error: comicError } = await supabase
        .from('comics')
        .select('*')
        .eq('id', id)
        .single()

      if (comicError) {
        console.error('Error loading comic:', comicError)
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
        return
      }

      if (pagesData && pagesData.length > 0) {
        setPdfUrl(pagesData[0].comic_pdf)
      }
    }

    fetchComicAndPDF()
  }, [id])

  if (!comic) return <div className="text-center mt-6">Loading comic...</div>

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