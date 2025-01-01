'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function AddConfessionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
    console.log('Form submitted')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="w-full md:w-auto">Add Your Confession</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Confession</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="confession">Your Confession</Label>
            <Textarea id="confession" placeholder="Type your confession here..." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" type="url" placeholder="https://example.com/image.jpg" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Your username" required />
          </div>
          <Button type="submit" className="w-full">Submit Confession</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

