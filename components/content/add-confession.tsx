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
import { Icons } from "@/components/shared/icons"

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
        <Button size="lg" className="px-8">
          Confess
          </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-gradient_indigo-purple text-center'>Add New Confession</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="confession">Your Confession</Label>
            <Textarea id="confession" placeholder="Type your confession here..." required />
            <p className="text-xs text-muted-foreground text-center">
              please undestand that there are certain boundries to things
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" required />
            <p className="text-xs text-muted-foreground text-center">
             provided name will be hashed and securely stored in our database for security reasons.
            </p>
           </div>
          <Button type="submit" className="w-full">Submit Confession</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

