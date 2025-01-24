'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import { ErrorAlert, SuccessAlert } from '../shared/alearts'

interface ProfileFormData {
  name: string;
  gender: string;
  yearofentry: number;
  yearofgraduation: number;
  city: string;
  course: string;
  major: string;
  postPhoto: File | null;
  instagram: string;
  facebook: string;
  twitter: string;
  description: string;
}

const INITIAL_DATA: ProfileFormData = {
  name: '',
  gender: '',
  yearofentry: 2025,
  yearofgraduation: 2029,
  city: '',
  course: '',
  major: '',
  postPhoto: null,
  instagram: '',
  facebook: '',
  twitter: '',
  description: '',
}

export function AddProfileButton() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<ProfileFormData>(INITIAL_DATA);
  const [error, setError] = useState<string | null>('');
  const [message, setMessage] = useState<string | null>('');

  const steps = [
    { title: 'Basic Info' },
    { title: 'Course Details' },
    { title: 'Photo' },
    { title: 'Description' },
    { title: 'Social Media' },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (currentStep === steps.length - 1) {
      try{  
        console.log(formData)
        const reponse = await axios.post('/api/unimates/create', formData , {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        setMessage('Your profile has been submitted successfully.')
      } catch (error) {
        console.error(error)
        setError('Failed to submit your profile. Please try again.')
      }
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
            <div>
              <Label htmlFor='gender'>Gender</Label>
              <Select value={formData.gender} onValueChange={value => updateFields({gender: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem key='male' value='male'>
                     Male
                  </SelectItem>
                  <SelectItem key='female' value='female'>
                    Female
                  </SelectItem>
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
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input 
                id="course" 
                value={formData.course} 
                onChange={e => updateFields({ course: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input 
                id="major" 
                value={formData.major} 
                onChange={e => updateFields({ major: e.target.value })}
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='yearofentry'>Freshman Year</Label>
              <Input 
                id='batch' 
                type='number' 
                onChange={e => updateFields({ yearofentry: Number(e.target.value) })}
                defaultValue={currentYear}
                />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='yearofentry'>Graduation Year</Label>
              <Input 
                id='batch' 
                type='number' 
                onChange={e => updateFields({ yearofgraduation: Number(e.target.value) })}
                defaultValue={currentYear + 4}
                />
            </div>
          </div>
        )
      case 2:
        return (
          <div className='space-y-4'>
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
        case 4:
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
      default:
        return null
    }
  }

  return (
    <>
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Add Profile</Button>
      </DialogTrigger>
      <DialogContent className="fixed sm:max-w-[425px]">
        <DialogHeader>
          <h1 className="text-gradient_indigo-purple text-center font-bold">Unimates</h1>
          <DialogTitle>{steps[currentStep].title}</DialogTitle>
        </DialogHeader>
        <Progress value={progress} className="w-full" />
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {renderStepContent()}
          <div className="mt-4 flex justify-between">
            {currentStep > 0 && (
              <Button type="button" variant="outline" className='rounded-full' onClick={back}>
                Back
              </Button>
            )}
            <Button type="submit" className='rounded-full'>
              {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    <div className="pointer-events-none fixed inset-0 z-[9999] flex items-end justify-end p-4">
    <div className="pointer-events-auto space-y-4">
      {message && ( <SuccessAlert success={message} setSuccess={setMessage} /> )}
      {error && (<ErrorAlert error={error} setError={setError} /> )}
    </div>
  </div>
  </>

  )
}

