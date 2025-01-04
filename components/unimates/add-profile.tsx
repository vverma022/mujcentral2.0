'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface ProfileFormData {
  name: string;
  batch: string;
  city: string;
  course: string;
  profilePhoto: File | null;
  postPhoto: File | null;
  instagram: string;
  facebook: string;
  twitter: string;
  description: string;
}

const INITIAL_DATA: ProfileFormData = {
  name: '',
  batch: '',
  city: '',
  course: '',
  profilePhoto: null,
  postPhoto: null,
  instagram: '',
  facebook: '',
  twitter: '',
  description: '',
}

export function AddProfileButton() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<ProfileFormData>(INITIAL_DATA)

  const steps = [
    { title: 'Basic Info' },
    { title: 'Photos' },
    { title: 'Social Media' },
    { title: 'Description' },
  ]

  const updateFields = (fields: Partial<ProfileFormData>) => {
    setFormData(prev => ({ ...prev, ...fields }))
  }

  const next = () => {
    setCurrentStep(i => Math.min(i + 1, steps.length - 1))
  }

  const back = () => {
    setCurrentStep(i => Math.max(i - 1, 0))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === steps.length - 1) {
      // Submit the form data
      console.log('Form submitted:', formData)
      setOpen(false)
      setCurrentStep(0)
      setFormData(INITIAL_DATA)
    } else {
      next()
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  const currentYear = new Date().getFullYear()
  const years = Array.from({length: 10}, (_, i) => currentYear - 5 + i)

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={formData.name} 
                onChange={e => updateFields({ name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batch">Batch</Label>
              <Select value={formData.batch} onValueChange={value => updateFields({ batch: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year} - {year + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input 
                id="city" 
                value={formData.city} 
                onChange={e => updateFields({ city: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input 
                id="course" 
                value={formData.course} 
                onChange={e => updateFields({ course: e.target.value })}
              />
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="profilePhoto">Profile Photo</Label>
              <Input 
                id="profilePhoto" 
                type="file" 
                accept="image/*"
                onChange={e => updateFields({ profilePhoto: e.target.files?.[0] || null })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postPhoto">Post Photo</Label>
              <Input 
                id="postPhoto" 
                type="file" 
                accept="image/*"
                onChange={e => updateFields({ postPhoto: e.target.files?.[0] || null })}
              />
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="instagram">Instagram</Label>
              <Input 
                id="instagram" 
                placeholder="URL"
                value={formData.instagram}
                onChange={e => updateFields({ instagram: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="facebook">Facebook</Label>
              <Input 
                id="facebook" 
                placeholder="URL"
                value={formData.facebook}
                onChange={e => updateFields({ facebook: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="twitter">Twitter</Label>
              <Input 
                id="twitter" 
                placeholder="URL"
                value={formData.twitter}
                onChange={e => updateFields({ twitter: e.target.value })}
              />
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Caption"
              value={formData.description}
              onChange={e => updateFields({ description: e.target.value })}
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] fixed">
        <DialogHeader>
          <h1 className="text-gradient_indigo-purple font-bold text-center">Unimates</h1>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <Progress value={progress} className="w-full" />
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {renderStepContent()}
          <div className="flex justify-between mt-4">
            {currentStep > 0 && (
              <Button type="button" variant="outline" onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit">
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

