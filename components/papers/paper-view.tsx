"use server";
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

export function RectangularPaperCard({ link, imageUrl, title, name , difficulty, examType }: CompactRectangularPaperCardProps) {
  const difficultyColor = {
    E: 'bg-green-100 text-green-800',
    M: 'bg-yellow-100 text-yellow-800',
    H: 'bg-red-100 text-red-800'
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
          className="bg-gray-100"
        />
      </div>
      <CardContent className="p-4">
      <div className='justify-items-center mb-2'>
      <h3 className="text-lg font-medium line-clamp-2 flex-grow text-card-foreground">{title}</h3>
      <p className='text-xs font-light line-clamp-2 flex-grow text-muted-foreground text-center'>{name}</p>
      </div>
        <div className="flex justify-between items-start ">
          <div className={`inline-block px-2 py-1 rounded-full text-xs ${difficultyColor}`}>
          {difficulty}
          </div>
          <Badge variant="outline" className="ml-2 shrink-0">
            {examType}
          </Badge>
        </div>
        
      </CardContent>
    </Card>
  </Link>
  )
}

