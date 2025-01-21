"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RectangularPaperCard } from "./paper-view"
import D from "@/public/_static/illustrations/ai-collaboration.jpg"

interface Paper {
  id: number
  title: string,
  name: string,
  link?: string
  image?: string
  difficulty?: 'E' | 'M' | 'H'
  examType?: 'ETE' | 'MTE'

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
      <h3 className="font-heading text-xs md:text-4xl mb-4">
          Filters
      </h3>
      <div className="inline-flex gap-x-2">
        <div>
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
        {/* <div>
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
        </div> */}
        </div>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {papers[selectedCycle].map((paper) => (
          <RectangularPaperCard key={paper.id} name ={paper.name} link={paper.link || ''} imageUrl={paper.image || D.src } title={paper.title} difficulty={paper.difficulty || "E"} examType={paper.examType || "MTE"} />
        ))}
      </div>
    </div>
  )
}

