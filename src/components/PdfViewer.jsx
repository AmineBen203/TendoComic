import { useEffect, useState, useRef } from 'react'
import * as pdfjsLib from 'pdfjs-dist/build/pdf'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker?url'
import 'pdfjs-dist/web/pdf_viewer.css'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker

export default function PdfViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(0)
  const [pdf, setPdf] = useState(null)
  const canvasRefs = useRef([])

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl)
      const loadedPdf = await loadingTask.promise
      setPdf(loadedPdf)
      setNumPages(loadedPdf.numPages)
    }
    loadPdf()
  }, [pdfUrl])

  useEffect(() => {
    const renderPages = async () => {
      if (!pdf) return

      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i)
        const viewport = page.getViewport({ scale: 1.5 })
        const canvas = canvasRefs.current[i - 1]
        const context = canvas.getContext('2d')
        canvas.height = viewport.height
        canvas.width = viewport.width
        await page.render({ canvasContext: context, viewport }).promise
      }
    }

    renderPages()
  }, [pdf, numPages])

  return (
    <div className="flex flex-col gap-6">
      {Array.from({ length: numPages }).map((_, index) => (
        <canvas key={index} ref={(el) => (canvasRefs.current[index] = el)} />
      ))}
    </div>
  )
}
