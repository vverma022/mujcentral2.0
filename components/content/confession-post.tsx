"use client"

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Share2 } from 'lucide-react'
import ShareButton from '../shared/sharebutton'

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
        <p className="mb-3 text-sm">{confession}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-medium">{username}</span>
          </div>
           <ShareButton />
        </div>
      </CardContent>
    </Card>
  )
}

