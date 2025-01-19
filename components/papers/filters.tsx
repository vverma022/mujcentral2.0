"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText } from 'lucide-react'
import { RectangularPaperCard } from "./paper-view"
import MTEI from "@/public/_static/illustrations/MTE.png"

interface Paper {
  id: number
  title: string
  link?: string
  image?: string
  difficulty?: string
  examType?: string

}

interface PastYearPapersProps {
  cycles: string[]
  papers: Record<string, Paper[]>
}

export function PastYearPapers({ cycles, papers }: PastYearPapersProps) {
  const [selectedCycle, setSelectedCycle] = useState(cycles[0])

  return (
    <div className="w-full">
      <div className="mb-8">
        <Select onValueChange={setSelectedCycle} defaultValue={selectedCycle}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a cycle" />
          </SelectTrigger>
          <SelectContent>
            {cycles.map((cycle) => (
              <SelectItem key={cycle} value={cycle}>
                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {papers[selectedCycle].map((paper) => (
          <RectangularPaperCard key={paper.id} link={paper.link || ''} imageUrl={MTEI.src} title={paper.title} difficulty="Easy" examType="MTE" />
        ))}
      </div>
    </div>
  )
}

