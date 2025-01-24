"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Share2 } from "lucide-react";
import { Instagram, Facebook, Copy, MessageCircle } from "lucide-react"; 
import { useEffect, useState } from "react";


export default function ShareButton({ confession, username }: { confession: string, username: string }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted on the client side
  }, []);

  const sharePost = () => {
    if (!isClient) return; // Make sure we only access `window` on the client side

    const url = window.location.href;
    const title = username ? `${username}'s Confession` : 'Check out this confession!';
    const text = confession || "Check out this amazing confession!";

    if (navigator.share) {
      navigator
        .share({
          title,
          text,
          url,
        })
        .then(() => console.log("Post shared successfully"))
        .catch((error) => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported. Use the buttons below.");
    }
  };

  const copyLink = () => {
    if (!isClient) return; // Prevent accessing window on the server side

    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  if (!isClient) return null; // Prevent rendering the button on the server side

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" onClick={sharePost}>
          <Share2 className="mr-2 size-4" />
        </Button>
      </DialogTrigger>
      <VisuallyHidden><DialogTitle>Share Post</DialogTitle></VisuallyHidden>
      <DialogContent>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-gradient_indigo-purple text-foreground">Share this Post</h2>
          <div className="flex w-full flex-col space-y-2">
            <a
              href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`}
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
              href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}