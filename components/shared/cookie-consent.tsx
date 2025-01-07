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
    <div className="fixed bottom-4 right-4 bg-inherit  shadow-lg rounded-lg overflow-hidden border  z-50 p-4 flex items-center space-x-4 max-w-sm">
      <Cookie className="h-6 w-6 text-gradient_indigo-purple flex-shrink-0" />
      <div className="flex-grow">
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your experience.
        </p>
      </div>
      <div className="flex space-x-2 flex-shrink-0">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleDeny}
          className="text-xs px-2 py-1 h-8"
        >
          Deny
        </Button>
        <Button 
          size="sm" 
          onClick={handleAllow}
          className="text-xs px-2 py-1 h-8"
        >
          Allow
        </Button>
      </div>
    </div>
  )
}

export default CookieConsentBanner

