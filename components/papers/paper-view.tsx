import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'

interface CompactRectangularPaperCardProps {
  imageUrl: string
  link: string
  title: string,
  name: string,
  difficulty: "E" | "M" | "H" ;
  examType: 'MTE' | 'ETE'
}

export  function RectangularPaperCard({ link, imageUrl, title, name , difficulty, examType}: CompactRectangularPaperCardProps) {
  const difficultyColor = {
    E: 'bg-green-100 text-green-800',
    M: 'bg-yellow-100 text-yellow-800',
    H: 'bg-red-100 text-red-800'
  }[difficulty]

  return (
    <>
    <Link href={link}>
     <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="fill"
          className="bg-gray-100"
        />
      </div>
      <CardContent className="p-4">
      <div className="mb-2 justify-items-center text-center">
      <h3 className="line-clamp-2 grow text-center text-lg font-medium text-card-foreground">
       {title}
      </h3>
      <p className="line-clamp-2 grow text-center text-xs font-light text-muted-foreground">
       {name}
      </p>
      </div>
        <div className="flex items-start justify-between ">
          <div className={`inline-block rounded-full px-2 py-1 text-xs ${difficultyColor}`}>
          {difficulty}
          </div>
          <Badge variant="outline" className="ml-2 shrink-0">
            {examType}
          </Badge>
        </div>
      </CardContent>
    </Card>
  </Link>
  </>
  )
}

