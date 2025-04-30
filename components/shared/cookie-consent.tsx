"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // If no consent is found, show the banner
      setIsVisible(true);
      // Add overflow: hidden to body to prevent scrolling
      document.body.style.overflow = "hidden";
    }
  }, []);

  const handleAllow = () => {
    localStorage.setItem("cookieConsent", "allowed");
    const userUUID = uuidv4();
    document.cookie = `user_data=${JSON.stringify({
      uuid: userUUID,
      confessionCount: 0,
      lastreset: Date.now(),
    })};path=/;secure;sameSite=strict;`;
    setIsVisible(false);
    // Re-enable scrolling and interaction
    document.body.style.overflow = "";
    toast.success("Cookie consent allowed. Thank you!");
  };

  const handleDeny = () => {
    localStorage.setItem("cookieConsent", "denied");
    setIsVisible(false);
    // Re-enable scrolling and interaction
    document.body.style.overflow = "";
    toast.error("Cookie consent denied. Non-essential cookies disabled.");
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Full-screen overlay with high z-index to block interaction */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        style={{ backdropFilter: "blur(4px)" }}
      >
        <div className="m-4 w-full max-w-md rounded-lg border bg-background p-6 shadow-xl">
          <div className="mb-4 flex items-center gap-3">
            <Cookie className="text-gradient_indigo-purple size-8" />
            <h2 className="text-xl font-bold">Cookie Consent</h2>
          </div>
          
          <p className="mb-6 text-muted-foreground">
            This website uses cookies to enhance your experience. You must choose whether to allow or deny cookies before continuing to use this site.
          </p>
          
          <div className="flex justify-between gap-3">
            <Button
              variant="outline"
              onClick={handleDeny}
            >
              Deny
            </Button>
            <Button
              onClick={handleAllow}
            >
              Allow
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieConsentBanner;