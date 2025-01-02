"use client"

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'

interface ConfessionPostProps {
  confession: string
  username: string
}

export default function ConfessionPost({ confession, username}: ConfessionPostProps) {
  const handleShare = () => {
    
    console.log('Sharing confession:', confession)
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <p className="text-sm mb-3">{confession}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
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

