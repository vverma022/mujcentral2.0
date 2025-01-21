"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Share2 } from "lucide-react";
import { Instagram, Facebook, Copy, MessageCircle } from "lucide-react"; 

export default function ShareButton() {
    
  const sharePost = () => {
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "Check out this post!",
          url,
        })
        .then(() => console.log("Post shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported. Use the buttons below.");
    }
  };

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="ghost" size="sm">
        <Share2 className="mr-2 size-4" />
      </Button>
    </DialogTrigger>
    <VisuallyHidden><DialogTitle></DialogTitle></VisuallyHidden>
    <DialogContent>
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-gradient_indigo-purple text-foreground ">Share this Post</h2>
          <>
            <a
              href={`https://www.instagram.com/?url=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="flex w-full items-center">
                <Instagram className="mr-2 size-4" />
                Instagram
              </Button>
            </a>

            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="flex w-full items-center">
                <MessageCircle className="mr-2 size-4" />
                WhatsApp
              </Button>
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button variant="outline" className="flex w-full items-center">
                <Facebook className="mr-2 size-4" />
                Facebook
              </Button>
            </a>

            <Button
              onClick={copyLink}
              variant="outline"
              className="flex w-full items-center"
            >
              <Copy className="mr-2 size-4" />
              Copy Link
            </Button>
          </>
      </div>
    </DialogContent>
  </Dialog>
  );
}