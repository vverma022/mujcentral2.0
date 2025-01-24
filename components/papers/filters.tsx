"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RectangularPaperCard } from "./paper-view"
import D from "@/public/_static/illustrations/ai-collaboration.jpg"
import PapersHeaderLayout from "./papers-header-layout"
import MaxWidthWrapper from "../shared/max-width-wrapper"
import { Paper } from "@/types"


interface PastYearPapersProps {
  categories: string[]
  papers: Record<string, Paper[]>
  year: string
}

export function PastYearPapers({ categories , papers , year }: PastYearPapersProps) {
  const [selectedCycle, setSelectedCycle] = useState(categories[0]);
  const [selectedExamType, setSelectedExamType] = useState('MTE');

  return (
    <MaxWidthWrapper>
    <PapersHeaderLayout year={year} />
    <div className="mt-4 w-full">
    <div className="mb-8">
      <h3 className="mb-4 font-heading text-2xl md:text-4xl">Filters</h3>
      <div className="inline-flex gap-x-2">
        <div>
          <Select onValueChange={setSelectedCycle} defaultValue={selectedCycle}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a cycle" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cycle) => (
                <SelectItem key={cycle} value={cycle}>
                  {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select
            onValueChange={setSelectedExamType}
            defaultValue={selectedExamType}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select an exam type" />
            </SelectTrigger>
            <SelectContent>
              {['MTE', 'ETE'].map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {papers[selectedCycle]
        .filter((paper) => paper.examType === selectedExamType) // Filter papers by exam type
        .map((paper) => (
          <RectangularPaperCard
            key={paper.id}
            name={paper.name}
            link={paper.link || ''}
            imageUrl={paper.image || D.src}
            title={paper.title}
            difficulty={paper.difficulty || 'E'}
            examType={paper.examType || 'MTE'}
          />
        ))}
    </div>
  </div>
  </MaxWidthWrapper>
  )
}

