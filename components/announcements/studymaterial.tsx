"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Poster from 'public/_static/blog/blog-post-2.jpg'
import { useRouter } from "next/navigation"

export default function FeaturePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenStudyMaterialPopup")

    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    router.push("/#studymaterial")
    // Save to localStorage so it doesn't show again
    localStorage.setItem("hasSeenStudyMaterialPopup", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in-0">
      <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden border border-border w-[px] max-w-[90vw]">
        <div className="relative">
          <Image
            src={Poster}
            alt="Study Materials"
            width={300}
            height={120}
            className="w-full h-[200px] object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-2 bg-green-400 text-green-900 text-xs px-2 py-0.5 rounded-full">
            NEW
          </div>
        </div>

        <div className="p-4">
          <h3 className=" text-sm mb-1 text-center text-gradient_indigo-purple font-semibold">Study Materials Added</h3>
          <p className="text-xs text-muted-foreground mb-3">
            We've added new study materials to help with your learning journey.
          </p>
          <div className="flex justify-center">
            <Button size="sm" variant="default" className="text-xs h-7 px-3" onClick={handleClose}>
              Check it out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

