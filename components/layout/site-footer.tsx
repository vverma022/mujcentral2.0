import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import  Logo  from "@/public/_static/favicons/android-chrome-192x192.png";
import Image from "next/image";
import { Icons } from "../shared/icons";



export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn("border-t", className)}>
      <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0 space-x-1.5">
          <Icons.logo/>
            <span className="font-urban text-xl font-bold">MUJ Central 2.0</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link href="/aboutus" className="text-sm text-muted-foreground">
              About Us
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground">
              Privacy
            </Link>
          </nav>
        </div>
      </div>
      </div>
      <div className="border-t py-4">
        <div className="container flex max-w-6xl items-center justify-between">
           <span className="text-muted-foreground text-sm">
            Copyright &copy; 2025. All rights reserved.
          </span> 
          <p className="text-left text-sm text-muted-foreground">
            Built by passionate students of MUJ
            . Hosted on{" "}
            <Link
              href="https://vercel.com"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Vercel
            </Link>
          </p>

          <div className="flex items-center gap-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
