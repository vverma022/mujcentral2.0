'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/actions/send-email'
import { SuccessAlert } from './alearts'
import { ErrorAlert } from './alearts'

export function ContactButton() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null); // Success message
  const [error, setError] = useState<string | null>(null); // Error message

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setMessage("Your message has been sent successfully!");
        setOpen(false); // Close the dialog
      } else {
        setError("Something went wrong.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost" className="text-sm text-muted-foreground">
            Contact Us
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-gradient_indigo-purple text-center font-heading">
              Contact Us
            </DialogTitle>
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
            <Button
              type="submit"
              variant="secondary"
              className="flex justify-center items-center"
            >
              Send Message
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <div className="fixed inset-0 z-[9999] pointer-events-none flex items-end justify-end p-4">
        <div className="space-y-4 pointer-events-auto">
          {message && (
            <SuccessAlert success={message} setSuccess={setMessage} />
          )}
          {error && <ErrorAlert error={error} setError={setError} />}
        </div>
      </div>
    </>
  );
}