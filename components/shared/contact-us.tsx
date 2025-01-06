'use client'

import { useState } from 'react'
import { useActionState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/actions/send-email'

export function ContactButton() {
  const [open, setOpen] = useState(false)
//   const [state, action, isPending] = useActionState(sendEmail)

  return (
      <>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className="">
                    Contact Us
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send us an email</DialogTitle>
                <DialogDescription>
                  Fill out this form to send us an email. We'll get back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <form >
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" name="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input id="email" name="email" type="email" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="content" className="text-right">
                      Message
                    </Label>
                    <Textarea id="content" name="content" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">
                    {/* {isPending ? 'Sending...' : 'Send Email'} */}
                  </Button>
                </DialogFooter>
              </form>
              {/* {state && (
                <div className={`mt-2 text-sm ${state.error ? 'text-red-600' : 'text-green-600'}`}>
                  {state.error || state.success}
                </div>
              )} */}
            </DialogContent>
          </Dialog>
        </>
  )
}

