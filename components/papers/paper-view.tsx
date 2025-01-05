'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react'

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  pdfUrl: string
  posterUrl: string
  paperName: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export default function PDFViewer({ pdfUrl, posterUrl, paperName, difficulty }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)

  const difficultyColor = {
    easy: 'bg-green-500',
    medium: 'bg-yellow-500',
    hard: 'bg-red-500'
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="flex overflow-hidden rounded-xl shadow-lg max-w-2xl w-full">
      <div className="w-1/2">
        <img src={posterUrl} alt={`Poster for ${paperName}`} className="w-full h-full object-cover" />
      </div>
      <div className="w-1/2 p-6 flex flex-col justify-between bg-white">
        <div>
          <h2 className="text-2xl font-bold mb-2">{paperName}</h2>
          <Badge className={`${difficultyColor[difficulty]} mb-4`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              View
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl w-full h-[80vh]">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="h-full overflow-auto"
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} />
              ))}
            </Document>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

