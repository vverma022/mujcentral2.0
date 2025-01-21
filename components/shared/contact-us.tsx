'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { sendEmail } from '@/actions/send-email'

export function ContactButton() {
  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const result = await sendEmail(formData)

    if (result.success) {
      toast({
        title: "Success",
        description: "Your message has been sent.",
        variant: "default",  // Green toast for success
      })
      setOpen(false)
    } else {
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",  // Red toast for error
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='ghost' className='text-sm text-muted-foreground'>Contact Us</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className='text-gradient_indigo-purple text-center font-heading'>Contact Us</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
          </div>
          <Button type="submit" variant="secondary" className='flex justify-center items-center'>Send Message</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}