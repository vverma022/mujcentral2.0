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
import axios from 'axios'

export default function AddConfessionButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [Formdata, SetFormData] = useState({name: '', confession: ''})

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    SetFormData({
      ...Formdata,
      [name]: value,
    })
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/confess/add', Formdata);
      console.log('Confession added:', response.data);
      setIsOpen(false);
      SetFormData({ name: '', confession: '' }); 
    } catch (error) {
      console.error('Error submitting confession:', error);
    }
  };


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
            <Textarea id="confession" placeholder="Type your confession here..." onChange={handleChange} required />
            <p className="text-xs text-muted-foreground text-center">
              please undestand that there are certain boundries to things
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your Name" onChange={handleChange} required />
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

