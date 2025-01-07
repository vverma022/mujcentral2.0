'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

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
    <div className="flex w-full max-w-2xl overflow-hidden rounded-xl shadow-lg">
      <div className="w-1/2">
        <Image src={posterUrl} alt={`Poster for ${paperName}`} className="size-full object-cover" />
      </div>
      <div className="flex w-1/2 flex-col justify-between bg-white p-6">
        <div>
          <h2 className="mb-2 text-2xl font-bold">{paperName}</h2>
          <Badge className={`${difficultyColor[difficulty]} mb-4`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">
              View
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="h-[80vh] w-full max-w-3xl">
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

