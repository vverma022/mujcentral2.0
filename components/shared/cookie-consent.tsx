"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Cookie } from 'lucide-react'

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAllow = () => {
    localStorage.setItem('cookieConsent', 'allowed')
    setIsVisible(false)
    // Here you would typically set cookies or trigger your analytics software
  }

  const handleDeny = () => {
    localStorage.setItem('cookieConsent', 'denied')
    setIsVisible(false)
    // Here you would typically ensure no non-essential cookies are set
  }

  if (!isVisible) return null

  

  return (
    <div className="fixed bottom-4 right-4 z-50  flex max-w-sm items-center space-x-4  overflow-hidden rounded-lg border bg-inherit p-4 shadow-lg">
      <Cookie className="text-gradient_indigo-purple size-6 shrink-0" />
      <div className="grow">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your experience.
        </p>
      </div>
      <div className="flex shrink-0 space-x-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDeny}
          className="h-8 px-2 py-1 text-xs"
        >
          Deny
        </Button>
        <Button 
          size="sm" 
          onClick={handleAllow}
          className="h-8 px-2 py-1 text-xs"
        >
          Allow
        </Button>
      </div>
    </div>
  )
}

export default CookieConsentBanner

