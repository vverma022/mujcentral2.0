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
      <div className="w-[px] max-w-[90vw] overflow-hidden rounded-lg border border-border bg-white shadow-lg dark:bg-black">
        <div className="relative">
          <Image
            src={Poster}
            alt="Study Materials"
            width={300}
            height={120}
            className="h-[200px] w-full object-cover"
          />
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 rounded-full bg-black/20 p-1 text-white hover:bg-black/40"
          >
            <X className="size-4" />
          </button>
          <div className="absolute bottom-2 left-2 rounded-full bg-green-400 px-2 py-0.5 text-xs text-green-900">
            NEW
          </div>
        </div>

        <div className="p-4">
          <h3 className=" text-gradient_indigo-purple mb-1 text-center text-sm font-semibold">Study Materials Added</h3>
          <p className="mb-3 text-xs text-muted-foreground">
            We have added new study materials to help with your learning journey.
          </p>
          <div className="flex justify-center">
            <Button size="sm" variant="default" className="h-7 px-3 text-xs" onClick={handleClose}>
              Check it out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

