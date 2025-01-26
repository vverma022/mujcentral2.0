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
  const [open, setOpen] = useState(false); // Controls modal/dialog state
  const [message, setMessage] = useState<string | null>(null); // Success message
  const [error, setError] = useState<string | null>(null); // Error message
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setIsSubmitting(true); // Start submission
    setMessage(null); // Reset success message
    setError(null); // Reset error message

    try {
      const result = await sendEmail(formData); // Assume sendEmail is defined elsewhere
      if (result.success) {
        setMessage("Your message has been sent successfully!");
        setOpen(false); // Close the dialog if needed
      } else {
        setError("Something went wrong.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setIsSubmitting(false); // End submission
    }
  }

  return (
    <>
     <Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <span className="cursor-pointer text-sm text-muted-foreground">
      Contact Us
    </span>
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
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Contact Us'}
      </Button>
    </form>
  </DialogContent>
</Dialog>
<div className="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-end p-4">
  <div className="pointer-events-auto space-y-4">
    {message && (
      <SuccessAlert success={message} setSuccess={setMessage} />
    )}
    {error && <ErrorAlert error={error} setError={setError} />}
  </div>
</div>
    </>
  );
}