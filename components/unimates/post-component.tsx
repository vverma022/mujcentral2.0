import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { placeholderBlurhash } from '@/lib/utils'

interface InstagramPostProps {
  username: string
  avatarUrl: string
  course: string
  major: string
  yearofentry: number,
  yearofgraduation: number,
  city: string
  imageUrl: string
  caption: string
  facebookUrl?: string
  instagramUrl?: string
  twitterUrl?: string
}


export default  function UnimatesPost({
  username,
  avatarUrl,
  course,
  major,
  yearofentry,
  yearofgraduation,
  city,
  imageUrl,
  caption,
  facebookUrl,
  instagramUrl,
  twitterUrl
}: InstagramPostProps) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center space-x-4 p-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatarUrl} alt={username || 'User'} />
          <AvatarFallback>{username ? username[0].toUpperCase() : 'U'}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold">{username || 'Anonymous'}</span>
          <span className="text-sm text-muted-foreground">
            {`${course} ${major} ${yearofentry}-${yearofgraduation} from ${city}`}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg?height=400&width=400"}
            alt="Post image"
            fill
            style={{objectFit: "cover"}}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start p-4">
        <p className="text-sm mb-4">
          <span className="font-semibold mr-2">{username || 'Anonymous'},</span>
          {caption}
        </p>
        <div className="flex justify-center items-center w-full space-x-4">
          {facebookUrl && (
            <Button variant="ghost" size="icon">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
            </Button>
          )}
          {instagramUrl && (
            <Button variant="ghost" size="icon">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </Button>
          )}
          {twitterUrl && (
            <Button variant="ghost" size="icon">
              <a href={twitterUrl} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}

