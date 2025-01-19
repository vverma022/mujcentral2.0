import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

interface CompactRectangularPaperCardProps {
  imageUrl: string
  link: string
  title: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  examType: 'MTE' | 'ETE'
}

export function RectangularPaperCard({ link, imageUrl, title, difficulty, examType }: CompactRectangularPaperCardProps) {
  const difficultyColor = {
    Easy: 'bg-green-100 text-green-800',
    Medium: 'bg-yellow-100 text-yellow-800',
    Hard: 'bg-red-100 text-red-800'
  }[difficulty]

  return (
    <Link href={link}>
     <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium line-clamp-2 flex-grow text-gradient_indigo-purple">{title}</h3>
          <Badge variant="outline" className="ml-2 shrink-0">
            {examType}
          </Badge>
        </div>
        <div className={`inline-block px-2 py-1 rounded-full text-xs ${difficultyColor}`}>
          {difficulty}
        </div>
      </CardContent>
    </Card>
  </Link>
  )
}

