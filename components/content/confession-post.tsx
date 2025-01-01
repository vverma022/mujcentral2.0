import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'

interface ConfessionPostProps {
  image: string
  confession: string
  username: string
  avatar: string
}

export default function ConfessionPost({ image, confession, username, avatar }: ConfessionPostProps) {
  const handleShare = () => {
    // Implement sharing functionality here
    console.log('Sharing confession:', confession)
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image
          src={image}
          alt="Confession image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-sm mb-3">{confession}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={avatar} alt={username} />
              <AvatarFallback>{username[0]}</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium">{username}</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

